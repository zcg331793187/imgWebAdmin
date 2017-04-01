import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {imgtitleViewComponent} from "./imgtitle-view.component";

@NgModule({
    declarations: [imgtitleViewComponent],
    imports     : [BrowserModule],
})

export class imgtitleViewModule {

    constructor(){
       console.log('imgtitleViewModule');
    }

}