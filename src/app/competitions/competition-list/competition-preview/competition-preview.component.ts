import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';
import * as moment from 'moment';

import { Competition, TimeSpan } from '../../../shared';

// The time in milliseconds before a competition is considered to start soon
// 6 hours = 21600000
const startingSoonThreshold = 21600000;
// The period after the end date to say "hard ended"
// 10 minutes = 600000
const hardEndThreshold = 600000;
const oneDayInMilliseconds = 86400000;

@Component({
  moduleId: module.id,
  selector: 'app-competition-preview',
  templateUrl: 'competition-preview.component.html',
  styleUrls: ['competition-preview.component.css']
})
export class CompetitionPreviewComponent implements OnInit, OnDestroy {
  @Input() competition: Competition;
  state: State = 'Distanced';

  scheduled: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    let currentMilliseconds = new Date().getTime();

    let millisecondsUntilStart = this.competition.startTime.getTime() - currentMilliseconds;
    let millisecondsUntilStartingSoon = millisecondsUntilStart - startingSoonThreshold;
    let millisecondsUntilEnd = this.competition.endTime.getTime() - currentMilliseconds;
    let millisecondsUntilHardEnd = millisecondsUntilEnd + hardEndThreshold;

    if (millisecondsUntilStartingSoon > 0) {
      this.scheduleStartingSoon(
          millisecondsUntilStartingSoon,
          millisecondsUntilStart,
          millisecondsUntilEnd,
          millisecondsUntilHardEnd);
    } else if (millisecondsUntilStart > 0) {
      this.scheduleStart(millisecondsUntilStart, millisecondsUntilEnd, millisecondsUntilHardEnd);
    } else if (millisecondsUntilEnd > 0) {
      this.scheduleEnd(millisecondsUntilEnd, millisecondsUntilHardEnd);
    } else if (millisecondsUntilHardEnd > 0) {
      this.scheduleHardEnd(millisecondsUntilHardEnd);
    } else {
      this.state = 'Ended';
    }
  }

  scheduleStartingSoon(
      millisecondsUntilStartingSoon: number,
      millisecondsUntilStart: number,
      millisecondsUntilEnd: number,
      millisecondsUntilHardEnd: number) {
    this.state = 'Distanced';
    // Schedule only if within one day
    if (millisecondsUntilStartingSoon < oneDayInMilliseconds) {
      this.scheduled = Observable.timer(millisecondsUntilStartingSoon).subscribe(() => {
        this.scheduleStart(millisecondsUntilStart, millisecondsUntilEnd, millisecondsUntilHardEnd);
      });
    }
  }

  scheduleStart(
      millisecondsUntilStart: number,
      millisecondsUntilEnd: number,
      millisecondsUntilHardEnd: number) {
    this.state = 'StartingSoon';
    // Schedule only if within one day
    if (millisecondsUntilStart < oneDayInMilliseconds) {
      this.scheduled = Observable.timer(this.competition.startTime).subscribe(() => {
        this.scheduleEnd(millisecondsUntilEnd, millisecondsUntilHardEnd);
      });
    }
  }

  scheduleEnd(millisecondsUntilEnd: number, millisecondsUntilHardEnd: number) {
    this.state = 'Started';
    // Schedule only if within one day
    if (millisecondsUntilEnd < oneDayInMilliseconds) {
      this.scheduled = Observable.timer(millisecondsUntilEnd).subscribe(() => {
        this.scheduleHardEnd(millisecondsUntilHardEnd);
      });
    }
  }

  scheduleHardEnd(millisecondsUntilHardEnd: number) {
    this.state = 'JustEnded';
    // Schedule only if within one day
    if (millisecondsUntilHardEnd < oneDayInMilliseconds) {
      this.scheduled = Observable.timer(millisecondsUntilHardEnd).subscribe(() => {
        this.state = 'Ended';
      });
    }
  }

  abbreviateAgo(date: Date) {
    return moment.duration(TimeSpan.since(date).totalMilliseconds, 'ms').humanize();
  }

  viewCompetition() {
    if (new Date() < this.competition.endTime) {
      this.router.navigate(['/competitions', this.competition.$key]);
    } else {
      this.router.navigate(['/competitions', this.competition.$key, 'scoreboard']);
    }
  }

  ngOnDestroy() {
    if (this.scheduled) {
      this.scheduled.unsubscribe();
    }
  }
}

type State = 'Distanced' | 'StartingSoon' | 'Started' | 'JustEnded' | 'Ended';
