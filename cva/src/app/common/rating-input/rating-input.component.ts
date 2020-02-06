// tslint:disable: component-selector
import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rating-input',
  template: `
    <span
      class="star"
      *ngFor="let starred of stars; let i = index"
      (click)="onTouched(); rate(i + (starred ? (value > i + 1 ? 1 : 0) : 1))">
      <ng-container *ngIf="starred; else noStar">
        <i class="fa fa-star filled"></i>
      </ng-container>
      <ng-template #noStar>
        <i class="fa fa-star no-filled"></i>
      </ng-template>
    </span>
  `,
  styleUrls: ['./rating-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingInputComponent),
      multi: true
    }
  ]
})
export class RatingInputComponent implements ControlValueAccessor {

  stars: boolean[] = Array(5).fill(false);

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  // Function to call when the rating changes.
  onChange = (rating: number) => { };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(rating: number): void {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value);
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
