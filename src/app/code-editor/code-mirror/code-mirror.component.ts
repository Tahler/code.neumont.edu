import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';

import { fromTextArea, Editor, EditorConfiguration } from 'codemirror';

import { Language } from '../../shared';

// TODO: lazy load
import 'codemirror/addon/mode/simple';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/rust/rust';

@Component({
  moduleId: module.id,
  selector: 'app-code-mirror',
  templateUrl: 'code-mirror.component.html',
  styleUrls: ['code-mirror.component.css']
})
export class CodeMirrorComponent implements OnInit {
  @ViewChild('textarea') textarea: ElementRef;
  // The CodeMirror editor
  editor: Editor;

  @Input() autofocus: boolean = false;

  private initialMode = '';
  @Input() set mode(mode: string) {
    if (this.editor) {
      this.editor.setOption('mode', mode);
    } else {
      this.initialMode = mode;
    }
  }

  private initialSrc = '';
  @Input() set src(src: string) {
    let actualValue = src || '';
    if (this.editor) {
      this.editor.setValue(actualValue);
      this.srcChange.emit(actualValue);
    } else {
      this.initialSrc = actualValue;
    }
  }
  @Output() srcChange = new EventEmitter();

  ngOnInit() {
    let config: EditorConfiguration = {
      autofocus: this.autofocus,
      indentWithTabs: false,
      tabSize: 2,
      lineNumbers: true,
      lineWrapping: true
    };

    this.editor = fromTextArea(this.textarea.nativeElement, config);

    this.editor.setOption('mode', this.initialMode);
    this.initialMode = null;
    this.editor.setValue(this.initialSrc);
    this.initialSrc = null;

    this.editor.on('change', editor => {
      // User is typing...
      this.srcChange.emit(editor.getValue());
    });
  }
}
