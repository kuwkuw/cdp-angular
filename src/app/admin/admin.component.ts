import { Component, OnInit } from '@angular/core';

import { AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent } from './components';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  static components = [AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent];

  constructor() { }

  ngOnInit() {
  }

}
