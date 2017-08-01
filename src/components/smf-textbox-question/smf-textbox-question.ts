import { QuestionBase } from '../question-base/question-base';

/**
 * Represents an ion-input element, (standard textbox). Different types are supported.
 * See the Ionic Documentation for options for ion-input components.
 * 
 * @export
 * @class SmfTextboxQuestion
 * @extends {QuestionBase<string>}
 */
export class SmfTextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}