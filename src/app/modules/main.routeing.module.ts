/**
 * Created by zhoucaiguang on 2017/4/1.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from '../components/main/main.component'
import {ImgUrlComponent} from '../components/img-url/img-url.component'
import {ImgTitleComponent} from '../components/img-title/img-title.component'
import {ImgConfigsComponent} from '../components/img-configs/img-configs.component'

// import {NavigationModule} from "./navigation.module";
// import {FooterModule} from "./footer.module";
// import {TopNavBarModule} from "./top-nav-bar.module";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'imgUrl', component: ImgUrlComponent },
          { path: 'imgTitle', component: ImgTitleComponent },
          { path: 'imgConfigs', component: ImgConfigsComponent }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
