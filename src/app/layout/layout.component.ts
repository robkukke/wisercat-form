import { Component } from '@angular/core';
import { MessageFormComponent } from "../message-form/message-form.component";

@Component({
  selector: 'wisercat-form-layout',
  standalone: true,
  imports: [
    MessageFormComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
