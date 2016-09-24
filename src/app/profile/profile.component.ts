import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../shared/firebase/auth.service';
import { RepositoryService } from '../shared/firebase/repository.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {
  myUid: string;
  user: User;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private authService: AuthService,
      private repoService: RepositoryService) { }

  ngOnInit() {
    this.authService.auth.subscribe(auth => this.myUid = auth ? auth.uid : null);
    this.route.params.subscribe(
        params => {
          let id = params['id'];
          this.repoService.getUser(id).subscribe(user => {
            if (user) {
              this.user = user;
            } else {
              this.router.navigateByUrl('/');
            }
          });
        });
  }

  isMyProfile(): boolean {
    return this.myUid === this.user.$key;
  }
}
