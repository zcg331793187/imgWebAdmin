import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';

import {MainComponent} from '../components/main/main.component'
import {NavigationModule} from "./navigation.module";
import {FooterModule} from "./footer.module";
import {TopNavBarModule} from "./top-nav-bar.module";
import {MainRoutingModule} from './main.routeing.module'

import {AuthGuardService} from '../services/auth-guard.service'
import {UserService} from '../services/user.service'
import {HttpService} from '../services/http.service'
import {LocalStorageService} from '../services/local-storage.service'



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    FooterModule,
    TopNavBarModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
  ],
  exports: [MainComponent],
  providers:[AuthGuardService,UserService,HttpService,LocalStorageService]
})
export class MainModule {
}
