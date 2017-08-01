export var ControlAttribute = (function () {
    function ControlAttribute() {
    }
    return ControlAttribute;
}());
export var QuestionBase = (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value || null;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = (options.order === undefined) ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.attributes = options.attributes || [];
        this.classes = options.classes || [];
        this.id = options.id || '';
        this.type = options.type || '';
        this.placeholder = options.type || '';
    }
    return QuestionBase;
}());
//# sourceMappingURL=question-base.js.map