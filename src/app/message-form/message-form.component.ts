import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FieldComponent } from "../commons/components/form/field/field.component";
import { ButtonComponent } from "../commons/components/button/button.component";
import { CustomValidatorsUtil } from "../commons/utils/custom-validators/custom-validators.util";

@Component({
  selector: 'wisercat-form-message-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FieldComponent,
    ButtonComponent
  ],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss'
})
export class MessageFormComponent {
  messageForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZõäöüÕÄÖÜ \-]*')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZõäöüÕÄÖÜ \-]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    workExperience: new FormControl('', [Validators.required, Validators.pattern('[0-9.]*'), CustomValidatorsUtil.forbiddenMonthsValidator(1)]),
  });

  onSubmit() {
    console.log(this.messageForm.value);
    console.log(this.messageForm.status);
  }
}
