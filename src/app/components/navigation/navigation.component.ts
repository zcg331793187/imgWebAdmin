import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'views-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {



  ngOnInit() {
  }

  constructor(private router: Router) {}

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }


}
