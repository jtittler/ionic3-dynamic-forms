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
import { QuestionControlService } from '../question-base/question-control.service';
/**
 * Generated class for the DynamicFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnChanges = function () {
        this.formGroup = this.qcs.toFormGroup(this.questions || []);
        this.payLoad = '';
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.formGroup.value, null, 4);
    };
    return DynamicFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], DynamicFormComponent.prototype, "questions", void 0);
DynamicFormComponent = __decorate([
    Component({
        selector: 'dynamic-form',
        templateUrl: require('dynamic-form.html'),
        providers: [QuestionControlService]
    }),
    __metadata("design:paramtypes", [QuestionControlService])
], DynamicFormComponent);
export { DynamicFormComponent };
//# sourceMappingURL=dynamic-form.js.map