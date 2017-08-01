import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { QuestionBase } from '../question-base/question-base';
import { QuestionControlService } from '../question-base/question-control.service';

/**
 * Generated class for the DynamicFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.html',
  providers: [ QuestionControlService]
})
export class DynamicFormComponent implements OnChanges {

  @Input() questions: QuestionBase<any>[];
  
  formGroup: FormGroup;
  payLoad: string = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnChanges() {
    this.formGroup = this.qcs.toFormGroup(this.questions || []);
    this.payLoad = '';
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.formGroup.value, null, 4);
  }

}
