import { NgModule } from '@angular/core';

import {BrowserModule} from "@angular/platform-browser";
import {TopNavBarComponent} from "../../components/common/top-nav-bar/top-nav-bar.component";


@NgModule({
  declarations: [TopNavBarComponent],
  imports     : [BrowserModule],
  exports     : [TopNavBarComponent],
})
export class TopNavBarModule { }
