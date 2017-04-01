import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {loginViewComponent} from "./login-view.component";

@NgModule({
    declarations: [loginViewComponent],
    imports     : [BrowserModule],
})

export class LoginViewModule {

    constructor(){
       console.log('LoginViewModule');
    }

}