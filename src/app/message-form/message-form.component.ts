import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { FieldComponent } from "../commons/components/form/field/field.component";
import { ButtonComponent } from "../commons/components/button/button.component";
import { CustomValidatorsUtil } from "../commons/utils/custom-validators/custom-validators.util";
import { MessageComponent } from "../commons/components/form/message/message.component";
import { SubmissionsService } from "../commons/services/submissions.service";
import { ISubmission } from "../commons/interfaces/submission";

@Component({
  selector: 'wisercat-form-message-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FieldComponent,
    ButtonComponent,
    MessageComponent
  ],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss'
})
export class MessageFormComponent {
  messageForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZõäöüÕÄÖÜ \-]*')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZõäöüÕÄÖÜ \-]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    workExperience: new FormControl('', [Validators.required, CustomValidatorsUtil.forbiddenMonthsValidator(1)]),
  });
  text?: string = '';
  type?: string = 'info';
  submissionsService = inject(SubmissionsService);

  onSubmit() {
    if (this.messageForm.invalid) {
      this.text = 'Form is invalid!';
      this.type = 'error';
      this.messageForm.markAllAsTouched();
    }

    if (this.messageForm.valid) {
      this.text = 'Form submitted successfully!';
      this.type = 'success';
      this.submissionsService.addToSubmissions(this.messageForm.value as ISubmission);
      this.messageForm.reset();
    }
  }

  onReset() {
    this.text = 'Form cleared!';
    this.type = 'info';
  }

  clearMessage() {
    this.text = '';
    this.type = 'info';
  }
}
