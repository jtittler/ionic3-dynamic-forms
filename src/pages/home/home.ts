import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsProvider } from '../../providers/questions/questions';
import { QuestionBase } from '../../components/question-base/question-base';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [QuestionsProvider]
})
export class HomePage {

  questions: QuestionBase<any>[];
  
  constructor(public navCtrl: NavController, service: QuestionsProvider) {
    this.questions = service.testQuestions();
  }

}
