import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProblemListComponent } from './problem-list.component';
import { problemListRouting } from './problem-list.routing';
import { ProblemPreviewComponent } from './problem-preview';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    problemListRouting
  ],
  declarations: [
    ProblemListComponent,
    ProblemPreviewComponent
  ],
  exports: [
    ProblemListComponent
  ]
})
export class ProblemListModule { }
