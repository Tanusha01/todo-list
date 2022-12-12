import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function titleValidator(nameRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const tempTitle = nameRegex.test(control.value);
    return !tempTitle ? {title: {value: control.value} } : null;
  }
}