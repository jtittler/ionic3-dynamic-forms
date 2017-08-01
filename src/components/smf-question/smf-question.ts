import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base/question-base';

@Component({
  selector: 'smf-question',
  templateUrl: './smf-question.html'
})
export class SmfQuestionComponent {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  
  get isValid() {
    return this.form.controls[this.question.id].valid;
  }
}
