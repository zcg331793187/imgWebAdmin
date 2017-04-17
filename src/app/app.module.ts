import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms';

import {RouterModule} from "@angular/router";
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ROUTES} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


// App views

import {MainModule} from './modules/main.module'
import {ImgConfigDetailModule} from './modules/img/img-config-detail.module'
import {ImgConfigEditModule} from './modules/img/img-config-edit.module'
import {ImgTitleModule} from './modules/img/img-title.module'
import {ImgConfigsModule} from './modules/img/img-configs.module'
import {ImgUrlModule} from './modules/img/img-url.module'
import {MinorModule} from './modules/minor.module'
import {ImgConfigAddModule} from './modules/img/img-config-add.module'


//App directive


// App modules/components
import {NavigationModule} from "./modules/common/navigation.module";
import {FooterModule} from "./modules/common/footer.module";
import {TopNavBarModule} from "./modules/common/top-nav-bar.module";
import {ImgTitleDetailModule} from './modules/img/img-title-detail.module';


import {LoginModule} from './modules/login.module'
import {NotFoundPageModule} from './modules/common/not-found-page.module';
import { PageModule } from './modules/common/page.module'






//test

@NgModule({
  declarations: [
    AppComponent,
    //App directive
  ],
  imports: [

    // Angular modules
    BrowserModule,
    HttpModule,
    FormsModule,
    // Views
    MainModule,
    MinorModule,
    ImgUrlModule,
    ImgTitleModule,
    ImgConfigsModule,
    ImgConfigDetailModule,
    ImgConfigEditModule,
    ImgConfigAddModule,
    ImgTitleDetailModule,
    LoginModule,
    NotFoundPageModule,
    PageModule,



    // Modules
    NavigationModule,
    FooterModule,
    TopNavBarModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule {
}
