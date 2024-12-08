import { Component, Input } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrl: './form-errors.component.scss'
})
export class FormErrorsComponent {
  @Input() field!: FormControl | NgModel;
  @Input() show = false;
}
