import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

import { AppSettings } from '../models/app-settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private defaultSettings: AppSettings = {
    productUrl: 'http://localhost:3000/products',
    orderUrl: 'http://localhost:3000/orders'
  };

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) { }

  getSettings() {
    const settings: AppSettings = this.localStorage.getItem('app-settings');
    if (settings) {
      return new Observable<AppSettings>(observer => {
        observer.next(settings);
      });
    }

    return this.http.get<AppSettings>('/assets/app-settings.json')
      .pipe(
        retry(2),
        tap(settingsFromServer => this.localStorage.setItem('app-settings', settingsFromServer)),
        catchError((err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
          } else {
            return new Observable<AppSettings>(observer => {
              this.localStorage.setItem('app-settings', this.defaultSettings);
              observer.next(this.defaultSettings);
            });
          }
        })
      );
  }
}
