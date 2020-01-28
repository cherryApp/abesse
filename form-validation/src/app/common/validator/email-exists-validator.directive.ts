import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS, Validator } from '@angular/forms';
import { EmailValidatorService } from 'src/app/service/email-validator.service';
import { Observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appEmailExistsValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => EmailExistsValidatorDirective),
    multi: true
  }],
})
export class EmailExistsValidatorDirective implements Validator {

  constructor(
    private emailValidatorService: EmailValidatorService
  ) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    return this.emailValidatorService.validate(control);
  }

}
