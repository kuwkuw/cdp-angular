import { AbstractControl } from '@angular/forms';

export class CustomValidators {
    static customNameIsNotOleh(c: AbstractControl): { [key: string]: boolean } | null {
        if (c.value !== undefined && (typeof c.value === 'string' && c.value.toLocaleLowerCase() === 'oleh')) {
            return {
                customNameIsNotOleh: true
            };
        }
        return null;
    }
}
