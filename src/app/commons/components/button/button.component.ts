import { Component, Input } from '@angular/core';

@Component({
  selector: 'wisercat-form-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() class: string = '';
  @Input() text: string = '';
  @Input() type: string = '';
}
