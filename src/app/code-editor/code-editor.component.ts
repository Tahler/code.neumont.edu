import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { CodeMirrorComponent } from './code-mirror';
import { LanguageDropdownComponent } from './language-dropdown';
import { SubmissionTemplateService } from './submission-template.service';
import { Language, Submission } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-code-editor',
  templateUrl: 'code-editor.component.html',
  styleUrls: ['code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  @ViewChild('codeMirror') codeMirror: CodeMirrorComponent;
  @ViewChild('langDropdown') langDropdown: LanguageDropdownComponent;

  lang: Language;

  submission: Submission;
  @Output() submissionChange = new EventEmitter();

  constructor(private templateService: SubmissionTemplateService) { }

  ngOnInit() {
    if (this.submission) {
      this.onSubmissionInit();
    } else {
      this.templateService
          .getDefaultSubmission()
          .take(1)
          .subscribe(submission => {
            this.submission = submission;
            this.onSubmissionInit();
          });
    }
  }

  onSubmissionInit() {
    // Initial setup
    this.codeMirror.src = this.submission.src;
    this.langDropdown.lang = this.submission.lang;
    this.submissionChange.emit(this.submission);
  }

  // Called on codemirror text change
  onSrcChange(src: string) {
    this.submission.src = src;
    this.submissionChange.emit(this.submission);
  }

  // Called on language dropdown select
  onLangChange(newLang: Language) {
    this.lang = newLang;
    this.submission.lang = newLang.apiCode;
    this.loadTemplate(newLang.apiCode);
  }

  loadTemplate(langCode: string) {
    this.templateService
        .getTemplate(langCode)
        .take(1)
        .subscribe(template => this.codeMirror.src = template);
  }
}
