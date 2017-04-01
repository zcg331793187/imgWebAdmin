import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgTitleComponent} from '../components/img-title/img-title.component'
import {RouterModule} from "@angular/router";
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [ImgTitleComponent],
  exports:[ImgTitleComponent]
})
export class ImgTitleModule { }
