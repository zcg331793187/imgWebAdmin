import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgUrlComponent} from '../../components/img/img-url/img-url.component'
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ImgUrlComponent],
  exports:[ImgUrlComponent]
})
export class ImgUrlModule { }
