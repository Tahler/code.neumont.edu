import { Component, Input } from '@angular/core';

import { Problem } from '../../../shared/models/problem';

@Component({
  selector: 'app-problem-preview',
  templateUrl: './problem-preview.component.html',
  styleUrls: ['./problem-preview.component.css']
})
export class ProblemPreviewComponent {
  @Input() problem: Problem;
}
