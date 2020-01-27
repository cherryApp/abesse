import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

/** Export validation function for use to reactive forms too. */
export const rangeValidatorFn: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const min = control.get('minPrice');
  const max = control.get('maxPrice');

  if (!min || !max) {
    return null;
  }

  return max.value <= min.value ? {rangeError: true} : null;
};

@Directive({
  selector: '[appRangeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: RangeValidatorDirective,
    multi: true
  }],
})
export class RangeValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return rangeValidatorFn(control);
  }

}
