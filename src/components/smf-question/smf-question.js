var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base/question-base';
var SmfQuestionComponent = (function () {
    function SmfQuestionComponent() {
    }
    Object.defineProperty(SmfQuestionComponent.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.question.id].valid;
        },
        enumerable: true,
        configurable: true
    });
    return SmfQuestionComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", QuestionBase)
], SmfQuestionComponent.prototype, "question", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], SmfQuestionComponent.prototype, "form", void 0);
SmfQuestionComponent = __decorate([
    Component({
        selector: 'smf-question',
        templateUrl: require('./smf-question.html')
    }),
    __metadata("design:paramtypes", [])
], SmfQuestionComponent);
export { SmfQuestionComponent };
//# sourceMappingURL=smf-question.js.map