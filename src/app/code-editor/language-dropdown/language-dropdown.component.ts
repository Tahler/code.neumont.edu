/*
 * Based on MdInput from angular/material2
 * https://github.com/angular/material2/tree/master/src/components/input
 */

import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { supportedLanguages, Language } from '../../shared';

const noop = () => {};

const inputControlValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => LanguageDropdownComponent),
  multi: true
};

@Component({
  moduleId: module.id,
  selector: 'app-language-dropdown',
  templateUrl: 'language-dropdown.component.html',
  styleUrls: ['language-dropdown.component.css'],
  providers: [inputControlValueAccessor]
})
export class LanguageDropdownComponent implements ControlValueAccessor {
  supportedLanguages = supportedLanguages;

  currentLanguage: Language;

  selected(choice: Language) {
    this.currentLanguage = choice;
    this.onChangeCallback(this.currentLanguage);
  }

  writeValue(language: Language) {
    this.currentLanguage = language;
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
