import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {imgurlViewComponent} from "./imgurl-view.component";


@NgModule({
    declarations: [imgurlViewComponent],
    imports     : [BrowserModule],
})

export class imgurlViewModule {

    constructor(){
       console.log('imgurlViewModule');
    }

}