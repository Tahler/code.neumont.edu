import { Pipe, PipeTransform } from '@angular/core';

import { supportedLanguagesByCode } from '../models/supported-languages';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {
  transform(code: string): string {
    return supportedLanguagesByCode[code];
  }
}
