import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { QuestionBase } from "../../components/question-base/question-base";
import { SmfTextboxQuestion } from "../../components/smf-textbox-question/smf-textbox-question";

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuestionsProvider {

  constructor() {
    
  }

  testQuestions(): QuestionBase<any>[] {
    
            let questions: QuestionBase<any>[] = [
                new SmfTextboxQuestion({
                    key: 'firstName',
                    label: 'First Name',
                    value: '',
                    required: true,
                    order: 1
                }),
            ];
    
            return questions.sort((a,b) => a.order - b.order);
        }
}
