import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ConstantsServiceService } from './core';

import { SpinnerService } from './widgets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: true }) titleRef: ElementRef;

  constructor(
    public spinnerService: SpinnerService,
    private constantsServiceService: ConstantsServiceService) {}

  ngAfterViewInit() {
    (this.titleRef.nativeElement as HTMLElement).innerText = this.constantsServiceService.title;
  }
}
