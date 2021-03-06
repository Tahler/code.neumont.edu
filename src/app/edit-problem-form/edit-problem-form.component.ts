import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Problem } from '../shared/models/problem';
import { TestCase } from '../shared/models/test-case';

@Component({
  selector: 'app-edit-problem-form',
  templateUrl: './edit-problem-form.component.html',
  styleUrls: ['./edit-problem-form.component.css']
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
