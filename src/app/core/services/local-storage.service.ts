import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private storage = window.localStorage;

  constructor() { }

  setItem(key: string, value: object | string): void {
    const stringifiedValue = typeof value === 'object' ? JSON.stringify(value) : value;
    this.storage.setItem(key, stringifiedValue);
  }

  getItem(key: string): string {
    return this.getItem(key);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
