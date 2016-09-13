import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeEditorComponent } from './code-editor.component';
import { CodeMirrorComponent } from './code-mirror';
import { LanguageDropdownComponent } from './language-dropdown';
import { SubmissionTemplateService } from './submission-template.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodeEditorComponent,
    CodeMirrorComponent,
    LanguageDropdownComponent
  ],
  providers: [SubmissionTemplateService],
  exports: [CodeEditorComponent]
})
export class CodeEditorModule { }
