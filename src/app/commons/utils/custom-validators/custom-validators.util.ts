import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidatorsUtil {
  static forbiddenMonthsValidator(decimalLimit: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = Number(control.value);

      if (isNaN(value)) {
        return {'notANumber': true};
      }

      if (value < 1) {
        return {'lessThanOne': true};
      }

      const decimalPart = (value.toString().split('.')[1] || '').length;
      if (decimalPart > decimalLimit) {
        return {'tooManyDecimals': true};
      }

      return null;
    };
  }
}
