export class ControlAttribute {
    attributeNm: string;
    attributeVal: any
}

export class QuestionBase<T> {
    value ?: T;
    key ?: string;
    label ?: string;
    required: boolean;
    order: number;
    controlType: string;
    attributes ?: ControlAttribute[];
    classes ?: string[];
    id?: string;
    type ?: string;
    placeholder ?: string;

    constructor (options: {
        value ?: T,
        key ?: string,
        label ?: string,
        required ?: boolean,
        order ?: number,
        controlType ?: string,
        attributes ?: ControlAttribute[],
        classes ?: string[],
        id ?: string,
        type ?: string,
        placeholder ?: string
    } = {}) {
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
}