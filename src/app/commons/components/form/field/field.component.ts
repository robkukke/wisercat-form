import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { min } from "rxjs";

@Component({
  selector: 'wisercat-form-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent implements OnInit {
  constructor(private parentFormGroup: FormGroupDirective) {
  }

  formGroup!: FormGroup;
  @Input() class: string = '';
  @Input() fcn: string = '';
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';

  ngOnInit() {
    this.formGroup = this.parentFormGroup.control;
  }

  protected readonly min = min;
}
