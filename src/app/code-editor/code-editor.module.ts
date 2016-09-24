import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CodeEditorComponent } from './code-editor.component';
import { CodeMirrorComponent } from './code-mirror';
import { LanguageDropdownComponent } from './language-dropdown';

import { SubmissionTemplateModule } from '../shared/submission-template/submission-template.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SubmissionTemplateModule
  ],
  declarations: [
    CodeEditorComponent,
    CodeMirrorComponent,
    LanguageDropdownComponent
  ],
  exports: [CodeEditorComponent]
})
export class CodeEditorModule { }
