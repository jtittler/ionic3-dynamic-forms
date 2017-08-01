import { TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form';
import { SmfQuestionComponent } from '../smf-question/smf-question';
describe('Component: DynamicFormComponent', function () {
    var component;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [DynamicFormComponent, SmfQuestionComponent],
            imports: [ReactiveFormsModule]
        });
        var fixture = TestBed.createComponent(DynamicFormComponent);
        component = fixture.componentInstance;
    });
    it('should have a defined component', function () {
        expect(component).toBeDefined();
    });
    it('should create a `FormGroup`', function () {
        component.ngOnChanges();
        expect(component.formGroup instanceof FormGroup).toBe(true);
    });
    it('should create a `FormControl` for each question', function () {
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
    it('should set the `payload` to a stringified version of our form values', function () {
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
        expect(component.payLoad).toEqual(JSON.stringify({ text: 'julie', email: 'julie@myemail.com' }, null, 4));
    });
});
//# sourceMappingURL=dynamic-form.spec.js.map