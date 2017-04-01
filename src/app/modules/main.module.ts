import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ImgUrlComponent} from '../components/img-url/img-url.component'
import {ImgTitleComponent} from '../components/img-title/img-title.component'
import {ImgConfigsComponent} from '../components/img-configs/img-configs.component'

import {MainComponent} from '../components/main/main.component'
import {NavigationModule} from "./navigation.module";
import {FooterModule} from "./footer.module";
import {TopNavBarModule} from "./top-nav-bar.module";

import {ImgTitleModule} from './img-title.module'

/*
const routes: Routes = [
  {
    path: 'main/imgUrl',
    component: ImgUrlComponent
  },
  {
    path: 'main/imgTitle',
    component: ImgTitleComponent
  },
  {
    path: 'main/imgConfigs',
    component: ImgConfigsComponent
  }
];
*/





@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MainComponent],
  exports:[MainComponent]
})
export class MainModule { }
