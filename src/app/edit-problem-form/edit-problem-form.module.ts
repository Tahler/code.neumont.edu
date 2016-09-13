import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditProblemFormComponent } from './edit-problem-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditProblemFormComponent],
  exports: [EditProblemFormComponent]
})
export class EditProblemFormModule { }
