import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageComponent} from '../components/page/page.component'
import {RouterModule} from "@angular/router";
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PageComponent],
  exports:[PageComponent]
})
export class PageModule { }
