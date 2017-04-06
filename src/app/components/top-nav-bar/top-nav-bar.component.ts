import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../app.helpers';
import {UserService} from '../../services/user.service'
import  {HttpService} from '../../services/http.service'
import  {LocalStorageService} from '../../services/local-storage.service'
import {Router} from '@angular/router';

import * as jQuery from 'jquery';

@Component({
  selector: 'views-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  providers:[UserService,HttpService,LocalStorageService]
})
export class TopNavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private UserService:UserService,
    private LocalStorageService:LocalStorageService

  ) {


  }






  ngOnInit() {
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }


  loginOut(){

  this.LocalStorageService.remove('userInfo');


    this.router.navigate(["/login"]);


  }

}
