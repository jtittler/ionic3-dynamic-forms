var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from '../question-base/question-base';
/**
 * Represents an ion-input element, (standard textbox). Different types are supported.
 * See the Ionic Documentation for options for ion-input components.
 *
 * @export
 * @class SmfTextboxQuestion
 * @extends {QuestionBase<string>}
 */
export var SmfTextboxQuestion = (function (_super) {
    __extends(SmfTextboxQuestion, _super);
    function SmfTextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return SmfTextboxQuestion;
}(QuestionBase));
//# sourceMappingURL=smf-textbox-question.js.map