var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from '../question-base/question-base';
export var SmfDropdownStrValQuestion = (function (_super) {
    __extends(SmfDropdownStrValQuestion, _super);
    function SmfDropdownStrValQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown-str';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
    }
    return SmfDropdownStrValQuestion;
}(QuestionBase));
//# sourceMappingURL=smf-dropdown-stringval-question.js.map