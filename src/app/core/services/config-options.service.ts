import { Injectable } from '@angular/core';

import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config: Config;

  constructor() { }

  setConfig(config: Config): void {
    this.config = Object.assign(config);
  }
  addConfig(key: string | object, value): void {
    if (typeof key === 'object') {
      this.config = Object.assign(this.config, key);
    } else {
      this.config = Object.assign(this.config, { [key]: value });
    }
  }

  getConfig(key: string): Config | string {
    return key ? this.config[key] : this.config;
  }
}
