import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl, FormControl
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-validations-explicit',
  templateUrl: './demo-form-validations-explicit.component.html',
  styleUrls: ['./demo-form-validations-explicit.component.css']
})
export class DemoFormValidationsExplicitComponent implements OnInit {

  myForm: FormGroup;
  // sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required],
      'foo': ['', Validators.compose([Validators.required, fooValidator])],
    });

    // this.sku = this.myForm.controls['sku'];

    this.myForm.get('sku').valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit(): void {

  }

}

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */
function fooValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}
