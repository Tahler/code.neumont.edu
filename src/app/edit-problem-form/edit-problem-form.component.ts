import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { Problem, TestCase } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-edit-problem-form',
  templateUrl: 'edit-problem-form.component.html',
  styleUrls: ['edit-problem-form.component.css'],
  directives: [
    FORM_DIRECTIVES,
    REACTIVE_FORM_DIRECTIVES,
  ]
})
export class EditProblemFormComponent {
  @Input() problem: Problem;
  @Input() testCases: TestCase[];

  @Output() finish = new EventEmitter();

  addTestCase(): void {
    this.testCases.push(new TestCase());
  }

  removeTestCase(index: number) {
    // TODO: confirm deletion
    // TODO: bug in angular? try adding a test case, deleting the first then adding again
    this.testCases.splice(index, 1);
  }

  send() {
    this.removeEmptyHints();
    this.finish.emit({ problem: this.problem, testCases: this.testCases });
  }

  private removeEmptyHints() {
    this.testCases.forEach(testCase => {
      if (testCase.hint && testCase.hint.trim() === '') {
        delete testCase.hint;
      }
    });
  }
}
