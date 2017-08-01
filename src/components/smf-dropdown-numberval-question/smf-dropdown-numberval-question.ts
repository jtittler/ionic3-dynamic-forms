import { QuestionBase } from '../question-base/question-base';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown-num';
    options: {key: string, value: number} [] = [];

    constructor (options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}