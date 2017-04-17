import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgTitleComponent} from '../../components/img/img-title/img-title.component'
import {RouterModule} from "@angular/router";
import { FormsModule }   from '@angular/forms';
import {PageModule} from '../common/page.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PageModule,
  ],
  declarations: [ImgTitleComponent],
  exports:[ImgTitleComponent]
})
export class ImgTitleModule { }