import {
    TestBed,
    ComponentFixture,
    async,
    inject
} from '@angular/core/testing';

import {
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';

import {
    Component
} from '@angular/core';

import { DynamicFormComponent } from './dynamic-form';
import { SmfQuestionComponent } from '../smf-question/smf-question';

describe('Component: DynamicFormComponent', () => {
    let component: DynamicFormComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFormComponent, SmfQuestionComponent],
            imports: [ReactiveFormsModule]
        });
    
        const fixture = TestBed.createComponent(DynamicFormComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('should create a `FormGroup`', () => {
        component.ngOnChanges();
        expect(component.formGroup instanceof FormGroup).toBe(true);
    });

    it('should create a `FormControl` for each question', () => {
        component.questions = [
            {
                controlType: 'textbox',
                id: 'text',
                label: 'text',
                required: false,
                value: '',
                order: 1
            },
            {
                controlType: 'textbox',
                id: 'email',
                label: 'email',
                required: true,
                type: 'email',
                value: '',
                order: 2
            }
        ];
        
        component.ngOnChanges();
        expect(Object.keys(component.formGroup.controls)).toEqual([
            'text', 'email'
        ]);
    });

    it('should set the `payload` to a stringified version of our form values', () => {
        component.questions = [
            {
                controlType: 'textbox',
                id: 'text',
                label: 'text',
                required: false,
                value: '',
                order: 1
            },
            {
                controlType: 'textbox',
                id: 'email',
                label: 'email',
                required: true,
                type: 'email',
                value: '',
                order: 2
            }
        ];
        component.ngOnChanges();

        component.formGroup.controls['text'].setValue('julie');
        component.formGroup.controls['email'].setValue('julie@myemail.com');
        component.onSubmit();

        expect(component.payLoad).toEqual(JSON.stringify({text: 'julie', email: 'julie@myemail.com'}, null, 4));
    });
});

