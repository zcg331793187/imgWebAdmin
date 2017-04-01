import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { FormsModule }   from '@angular/forms';

import {ImgConfigsComponent} from '../../components/img-configs/img-configs.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [ImgConfigsComponent],
  exports:[ImgConfigsComponent]
})
export class ImgConfigsModule { }
