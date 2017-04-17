import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgConfigDetailComponent} from '../../components/img/img-config-detail/img-config-detail.component'
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ImgConfigDetailComponent],
  exports     : [ImgConfigDetailComponent],
})
export class ImgConfigDetailModule { }
