import { Component, OnInit, Optional, Inject } from '@angular/core';

import {
  LocalStorageService,
  ConfigOptionsService,
  ConstantsServiceService,
  RandomString,
} from '../../../core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorage: LocalStorageService,
    @Optional() private configOptions: ConfigOptionsService,
    @Optional() private constantsService: ConstantsServiceService,
    @Inject(RandomString) private randomString: string) { }

  ngOnInit() {
    console.log(this.randomString);
  }

}
