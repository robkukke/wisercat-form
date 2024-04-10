import { Component, Input } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
  selector: 'wisercat-form-message',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() text?: string;
  @Input() type?: string = 'info';
}
