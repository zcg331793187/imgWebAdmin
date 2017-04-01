import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImgConfigAddComponent} from '../../components/img-config-add/img-config-add.component'
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [ImgConfigAddComponent]
})
export class ImgConfigAddModule { }
