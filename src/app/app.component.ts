import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: true}) titleRef: ElementRef;

   private title = 'shop';

  ngAfterViewInit() {
    (this.titleRef.nativeElement as HTMLElement).innerText = this.title;
  }
}
