import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownComponent } from './countdown.component';
import { FormattingModule } from '../shared/formatting/formatting.module';

@NgModule({
  imports: [
    CommonModule,

    FormattingModule
  ],
  declarations: [CountdownComponent],
  exports: [CountdownComponent]
})
export class CountdownModule { }
