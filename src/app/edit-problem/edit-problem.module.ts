import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditProblemComponent } from './edit-problem.component';
import { editProblemRouting } from './edit-problem.routing';
import { EditProblemFormModule } from '../edit-problem-form';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    EditProblemFormModule,

    editProblemRouting
  ],
  declarations: [EditProblemComponent],
  exports: [EditProblemComponent]
})
export class EditProblemModule { }
