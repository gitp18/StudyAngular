import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
    selector: '[appCompairValidator]',
    providers: [{ 
        provide: NG_VALIDATORS, 
        useExisting: CopmpairValidatorDirective,
        multi: true
    }]
})
export class CopmpairValidatorDirective implements Validator {
    @Input() appCompairValidator: string;

    validate(control: AbstractControl): {[key: string]: any} | null {
        const controlToCompaire = control.parent.get(this.appCompairValidator);
        return (controlToCompaire && controlToCompaire.value !== control.value) ? {'notEqual': true} : null;
    }
}