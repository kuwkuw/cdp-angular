import { Component, OnInit, Optional } from '@angular/core';

import {
  LocalStorageService,
  ConfigOptionsService,
  ConstantsServiceService,
  GeneratorService,
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
    @Optional() private generator: GeneratorService) { }

  ngOnInit() {
    console.log(this.generator.generate());
  }

}
