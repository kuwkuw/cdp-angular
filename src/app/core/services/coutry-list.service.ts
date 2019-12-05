import { InjectionToken } from '@angular/core';

export interface CountryList {
    countries: Array<string>;
}

export const CountryListValue = { countries: ['Ukraine', 'Armenia', 'Belarus', 'Hungary', 'Kazakhstan', 'Poland', 'Russia'] };

export const CONUTRY_LIST = new InjectionToken<CountryList>('CountryList');
