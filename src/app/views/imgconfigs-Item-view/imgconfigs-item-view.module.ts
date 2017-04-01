import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {imgconfigsitemViewComponent} from "./imgconfigs-item-view.component";

@NgModule({
    declarations: [imgconfigsitemViewComponent],
    imports     : [BrowserModule],
})

export class imgconfigsitemViewModule {

    constructor(){
       console.log('imgconfigsitemViewModule');
    }

}