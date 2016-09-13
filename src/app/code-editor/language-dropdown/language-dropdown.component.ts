import { Component, Input, Output, EventEmitter } from '@angular/core';

import { supportedLanguages, Language } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'app-language-dropdown',
  templateUrl: 'language-dropdown.component.html',
  styleUrls: ['language-dropdown.component.css']
})
export class LanguageDropdownComponent {
  allLanguages = supportedLanguages;
  currentLanguage: Language;

  @Input() set lang(newLang: string) {
    this.currentLanguage = supportedLanguages.find(lang => lang.apiCode === newLang);
    this.langChange.emit(this.currentLanguage);
  }

  @Output() langChange = new EventEmitter();

  selected(choice: Language) {
    this.currentLanguage = choice;
    this.langChange.emit(this.currentLanguage);
  }
}
