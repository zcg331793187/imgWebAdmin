import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';

import {MainComponent} from '../components/main/main.component'
import {NavigationModule} from "./navigation.module";
import {FooterModule} from "./footer.module";
import {TopNavBarModule} from "./top-nav-bar.module";
import {MainRoutingModule} from './main.routeing.module'






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
  exports: [MainComponent]
})
export class MainModule {
}
