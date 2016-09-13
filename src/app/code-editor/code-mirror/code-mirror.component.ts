import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';

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
  styleUrls: ['code-mirror.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CodeMirrorComponent implements OnInit {
  @ViewChild('textarea') textarea: ElementRef;
  // The CodeMirror editor
  editor: Editor;

  @Input() autofocus: boolean = false;

  private prematurelySetMode: string = '';
  @Input() set mode(mode: string) {
    if (this.editor) {
      this.editor.setOption('mode', mode);
    } else {
      this.prematurelySetMode = mode;
    }
  }
  get mode(): string {
    return this.editor
        ? this.editor.getOption('mode')
        : null;
  }

  private prematurelySetSrc: string = '';
  @Input() set src(src: string) {
    if (this.editor) {
      let actualValue = src || '';
      this.editor.setValue(actualValue);
      this.srcChange.emit(actualValue);
    } else {
      this.prematurelySetSrc = src;
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

    this.editor.setValue(this.prematurelySetSrc);
    this.prematurelySetSrc = null;
    this.editor.setOption('mode', this.prematurelySetMode);
    this.prematurelySetMode = null;

    this.editor.on('change', editor => {
      // User is typing...
      this.srcChange.emit(editor.getValue());
    });
  }
}
