import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ImgTitleDetailComponent} from "../../components/img-title-detail/img-title-detail.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ImgTitleDetailComponent],
  exports: [ImgTitleDetailComponent]
})
export class ImgTitleDetailModule { }
