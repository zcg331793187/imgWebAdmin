/**
 * Created by zhoucaiguang on 2017/4/1.
 */

import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from '../components/main/main.component'
import {ImgUrlComponent} from '../components/img/img-url/img-url.component'
import {ImgTitleComponent} from '../components/img/img-title/img-title.component'
import {ImgConfigsComponent} from '../components/img/img-configs/img-configs.component'
import {ImgTitleDetailComponent} from '../components/img/img-title-detail/img-title-detail.component'
import {ImgConfigAddComponent} from '../components/img/img-config-add/img-config-add.component'
import {ImgConfigEditComponent} from "../components/img/img-config-edit/img-config-edit.component";
import {ImgConfigDetailComponent} from '../components/img/img-config-detail/img-config-detail.component'
import {AuthGuardService} from '../services/auth-guard.service'



const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        children: [
          {path: 'imgUrl', component: ImgUrlComponent},
          {path: 'imgTitle', component: ImgTitleComponent},
          {path: 'imgTitle/:limit', component: ImgTitleComponent},
          {path: 'imgConfigs', component: ImgConfigsComponent},
          {path: 'imgConfigAdd', component: ImgConfigAddComponent},
          {path: 'imgConfigEdit/:id', component: ImgConfigEditComponent},
          {path: 'imgTitleDetail/:id', component: ImgTitleDetailComponent},
          {path: 'imgConfigDetail/:id', component: ImgConfigDetailComponent},

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
export class MainRoutingModule {
}
