import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateProblemComponent } from './create-problem.component';
import { createProblemRouting } from './create-problem.routing';
import { EditProblemFormModule } from '../edit-problem-form';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    EditProblemFormModule,

    createProblemRouting
  ],
  declarations: [CreateProblemComponent],
  exports: [CreateProblemComponent]
})
export class CreateProblemModule { }
