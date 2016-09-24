import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ng2-bootstrap';

import { SubmissionModalComponent } from './submission-modal.component';
import { SubmissionService } from './submission.service';
import { FormattingModule } from '../shared/formatting/formatting.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,

    ModalModule,

    FormattingModule
  ],
  declarations: [SubmissionModalComponent],
  providers: [SubmissionService],
  exports: [SubmissionModalComponent]
})
export class SubmissionModule { }
