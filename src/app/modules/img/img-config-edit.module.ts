import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {ImgConfigEditComponent} from "../../components/img/img-config-edit/img-config-edit.component";
import {RouterModule} from "@angular/router";
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [ImgConfigEditComponent],
  exports     : [ImgConfigEditComponent],

})
export class ImgConfigEditModule { }
