import { InjectionToken } from '@angular/core';

export const RandomString = new InjectionToken<string>('RandomString');

function generate(n): string {
  if (!n || n < 0) {
    console.error('Value need be larger then "0"');
    return;
  }
  let result = '';
  for (let i = 0; i < n; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * 56 + 65));
  }
  return result;
}

export function generatorServiceFactory(n: number) {
  return () => {
    return generate(n);
  };
}

