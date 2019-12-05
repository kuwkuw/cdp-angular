import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Directive({
  selector: '[appCustomEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomEmailValidatorDirective,
    multi: true
  }]

})
export class CustomEmailValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: boolean }  {
    if (control.value !== undefined && control.value === 'oleh.kushch@gmail.com') {
      return {
        customEmailValidator: true
      };
    }
    return null;
  }

  constructor() { }

}
