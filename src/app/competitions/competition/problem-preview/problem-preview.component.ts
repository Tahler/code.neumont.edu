import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-problem-preview',
  templateUrl: './problem-preview.component.html',
  styleUrls: ['./problem-preview.component.css']
})
export class ProblemPreviewComponent {
  @Input() problemName: string;
  @Input() solved: boolean;
  @Input() numIncorrect: number;
}
