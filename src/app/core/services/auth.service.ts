import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

const authStoreKey = 'isLoggedIn';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  get isLoggedIn() {
    return this.localStorageService.getItem(authStoreKey);
  }

  constructor(private localStorageService: LocalStorageService) { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.localStorageService.setItem(authStoreKey, val))
    );
  }

  logout(): void {
    this.localStorageService.removeItem(authStoreKey);
  }
}
