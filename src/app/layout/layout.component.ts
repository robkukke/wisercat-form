import { Component } from '@angular/core';
import { MessageFormComponent } from "../message-form/message-form.component";
import { SubmissionsListComponent } from "../submissions-list/submissions-list.component";

@Component({
  selector: 'wisercat-form-layout',
  standalone: true,
  imports: [
    MessageFormComponent,
    SubmissionsListComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
