import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    
    constructor() {}

    toFormGroup(questions: QuestionBase<any>[]): FormGroup {

        const formControls = questions.reduce(this.generateControl, {});

        return new FormGroup(formControls);
    }

    private generateControl(controls: any, question: QuestionBase<any>) {
        if (question.required) {
            controls[question.id] = new FormControl(question.value || '', Validators.required);
        }
        else {
            controls[question.id] = new FormControl(question.value || '');
        }

        return controls;
    }
}