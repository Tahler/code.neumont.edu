import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { fromTextArea, Editor, EditorConfiguration } from 'codemirror';

// TODO: lazy load
import 'codemirror/addon/mode/simple';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/go/go';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/rust/rust';

const noop = () => {};

const inputControlValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CodeMirrorComponent),
  multi: true
};

const editorConfiguration: EditorConfiguration = {
  autofocus: this.autofocus,
  indentWithTabs: false,
  tabSize: 2,
  lineNumbers: true,
  lineWrapping: true
};

@Component({
  selector: 'app-code-mirror',
  templateUrl: 'code-mirror.component.html',
  styleUrls: [
    // TODO: find out how this can be restricted here only
    // '/vendor/codemirror/lib/codemirror.css',
    'code-mirror.component.css'
  ],
  providers: [inputControlValueAccessor]
})
export class CodeMirrorComponent implements OnInit, ControlValueAccessor {
  @ViewChild('textarea') textarea: ElementRef;
  editor: Editor;

  @Input() autofocus: boolean = false;

  @Input() set mode(mode: string) {
    if (this.editor) {
      this.editor.setOption('mode', mode);
    }
  }
  get mode(): string {
    return this.editor
        ? this.editor.getOption('mode')
        : null;
  }

  ngOnInit() {
    this.editor = fromTextArea(this.textarea.nativeElement, editorConfiguration);
    this.editor.on('change', editor => {
      this.onChangeCallback(editor.getValue());
      this.onTouchedCallback();
    });
  }

  writeValue(value: string) {
    if (this.editor) {
      this.editor.setValue(value || '');
    }
  }

  // Registered by ngModel
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
