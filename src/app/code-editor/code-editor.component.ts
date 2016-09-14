import { Component, forwardRef, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CodeMirrorComponent } from './code-mirror';
import { Language, supportedLanguages, Submission, SubmissionTemplateService } from '../shared';

const noop = () => {};

const inputControlValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CodeEditorComponent),
  multi: true
};

@Component({
  moduleId: module.id,
  selector: 'app-code-editor',
  templateUrl: 'code-editor.component.html',
  styleUrls: ['code-editor.component.css'],
  providers: [inputControlValueAccessor]
})
export class CodeEditorComponent implements ControlValueAccessor {
  submission: Submission;

  @ViewChild('editor') editor: CodeMirrorComponent;

  code: string;
  language: Language;

  constructor(private templateService: SubmissionTemplateService) { }

  // Called on language dropdown select
  onLangChange(newLang: Language) {
    this.submission.lang = newLang.apiCode;
    if (this.editor) {
      this.editor.mode = newLang.editorMode;
    }
    this.templateService
        .getTemplate(newLang.apiCode)
        .take(1)
        .subscribe(template => this.code = template);
    this.onChangeCallback(this.submission);
  }

  // Called on codemirror text change
  onSrcChange(src: string) {
    this.submission.src = src;
    this.onChangeCallback(this.submission);
  }

  writeValue(submission: Submission) {
    if (submission) {
      this.submission = submission;

      this.code = this.submission.src;

      let submissionLang = supportedLanguages.find(lang => lang.apiCode === this.submission.lang);
      this.language = submissionLang;
      if (this.editor) {
        this.editor.mode = submissionLang.editorMode;
      }
    }
  }

  // Registed by ngModel
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
