import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MinorComponent} from '../../components/minor/minor.component'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MinorComponent],
  exports:[MinorComponent]
})
export class MinorModule { }
