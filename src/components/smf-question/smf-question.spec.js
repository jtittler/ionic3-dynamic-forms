import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../question-base/question-base';
import { SmfQuestionComponent } from './smf-question';
describe('Component: SmfQuestionComponent', function () {
    var component;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [SmfQuestionComponent],
            imports: [ReactiveFormsModule]
        });
        var fixture = TestBed.createComponent(SmfQuestionComponent);
        component = fixture.componentInstance;
    });
    it('should return true if the form control is valid', function () {
        var formControl = new FormControl('test');
        var formGroup = new FormGroup({ pizza: formControl });
        component.question = new QuestionBase({
            controlType: 'textbox',
            id: 'pizza',
            label: 'pizza!',
            required: false
        });
        component.form = formGroup;
        expect(component.isValid).toBe(true);
    });
});
//# sourceMappingURL=smf-question.spec.js.map