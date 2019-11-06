import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private storage = window.localStorage;

  constructor() { }

  setItem(key: string, value: object | boolean): void {
    try {
      return this.storage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Saving to localStorage failed', e);
    }
  }

  getItem(key: string): any {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (e) {
      console.error('Load to localStorage failed', e);
    }
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
