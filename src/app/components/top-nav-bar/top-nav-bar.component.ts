import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../app.helpers';

import * as jQuery from 'jquery';

@Component({
  selector: 'views-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
})
export class TopNavBarComponent implements OnInit {

  constructor() {


  }






  ngOnInit() {
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

}
