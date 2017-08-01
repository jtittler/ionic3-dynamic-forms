import { QuestionBase } from '../question-base/question-base';

export class SmfDropdownStrValQuestion extends QuestionBase<string> {
    controlType = 'dropdown-str';
    options: {key: string, value: string} [] = [];

    constructor (options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}