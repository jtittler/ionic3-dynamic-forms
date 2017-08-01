import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../question-base/question-base';
import { SmfQuestionComponent } from './smf-question';

describe('Component: SmfQuestionComponent', () => {
    let component: SmfQuestionComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SmfQuestionComponent],
            imports: [ReactiveFormsModule]
        });

        const fixture = TestBed.createComponent(SmfQuestionComponent);
        component = fixture.componentInstance;
    });

    it('should return true if the form control is valid', () => {
        const formControl = new FormControl('test');
        const formGroup = new FormGroup({ pizza: formControl});

        component.question = new QuestionBase<string>({
            controlType: 'textbox',
            id: 'pizza',
            label: 'pizza!',
            required: false
        });

        component.form = formGroup;
        expect(component.isValid).toBe(true);
    });
});