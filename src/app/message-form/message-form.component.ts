import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FieldComponent } from "../commons/components/form/field/field.component";
import { ButtonComponent } from "../commons/components/button/button.component";

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
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    workExperience: new FormControl(''),
  });

  onSubmit() {
    console.log(this.messageForm.value);
  }
}
