import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { LanguageDropdownComponent } from './language-dropdown';
import { CodeMirrorComponent } from './code-mirror';
import { SubmissionTemplateService } from './submission-template.service';
import { Language, Submission } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-code-editor',
  templateUrl: 'code-editor.component.html',
  styleUrls: ['code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  private _submission: Submission;
  @Input() set submission(v: Submission) {
    if (this._submission != v) {
      this._submission = v;
      if (this.editor) {
        this.editor.src = v.src;
      }
    }
  }

  @Output() submissionChange = new EventEmitter();

  @ViewChild('editor') editor: CodeMirrorComponent;
  @ViewChild('langDropdown') langDropdown: LanguageDropdownComponent;

  constructor(private templateService: SubmissionTemplateService) { }

  ngOnInit() {
    this.templateService
        .getDefaultSubmission()
        .take(1)
        .subscribe(submission => this.submission = submission);
  }

  // Called on language dropdown select
  onLangChange(newLang: Language) {
    this._submission.lang = newLang.apiCode;
    console.log(this.editor);

    if (this.editor) {
      this.editor.mode = `text/${newLang.editorMode}`;
    }
    this.templateService
        .getTemplate(newLang.apiCode)
        .take(1)
        .subscribe(template => this.onSrcChange(template));
  }

  // Called on codemirror text change and on template load
  onSrcChange(src: string) {
    this._submission.src = src;
    this.submissionChange.emit(this._submission);
  }
}
