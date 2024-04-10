import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidatorsUtil {
  static forbiddenMonthsValidator(decimalLimit: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control || control.value === null || control.value === undefined || control.value === '') {
        return null;
      }

      const value = Number(control.value.replace(',', '.'));
      const decimalPart = (value.toString().split('.')[1] || '').length;

      if (isNaN(value)) return {'notANumber': true};
      if (value < 1) return {'lessThanOne': true};
      if (decimalPart > decimalLimit) return {'tooManyDecimals': true};
      return null;
    };
  }
}
