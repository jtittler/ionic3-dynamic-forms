var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SmfTextboxQuestion } from "../../components/smf-textbox-question/smf-textbox-question";
/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var QuestionsProvider = (function () {
    function QuestionsProvider() {
    }
    QuestionsProvider.prototype.testQuestions = function () {
        var questions = [
            new SmfTextboxQuestion({
                key: 'firstName',
                label: 'First Name',
                value: '',
                required: true,
                order: 1
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    return QuestionsProvider;
}());
QuestionsProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], QuestionsProvider);
export { QuestionsProvider };
//# sourceMappingURL=questions.js.map