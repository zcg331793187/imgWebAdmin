import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {imgconfigsViewComponent} from "./imgconfigs-view.component";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [imgconfigsViewComponent],
    imports     : [BrowserModule,RouterModule],
})

export class imgconfigsViewModule {

    constructor(){
        console.log('imgconfigsViewModule');
    }


}