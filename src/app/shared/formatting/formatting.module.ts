import { NgModule } from '@angular/core';

import { AnsiToHtmlPipe } from './ansi-to-html.pipe';
import { LangPipe } from './lang.pipe';
import { MarkdownPipe } from './markdown.pipe';
import { PrecisionPipe } from './precision.pipe';
import { SpacifyPipe } from './spacify.pipe';
import { ZeroPadPipe } from './zero-pad.pipe';

@NgModule({
  declarations: [
    AnsiToHtmlPipe,
    LangPipe,
    MarkdownPipe,
    PrecisionPipe,
    SpacifyPipe,
    ZeroPadPipe
  ],
  exports: [
    AnsiToHtmlPipe,
    LangPipe,
    MarkdownPipe,
    PrecisionPipe,
    SpacifyPipe,
    ZeroPadPipe
  ]
})
export class FormattingModule { }
