import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';

import {RouterModule} from "@angular/router";
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ROUTES} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';





// App views

import {MainModule} from './modules/main/main.module'
import {ImgConfigDetailModule} from './modules/img-config-detail/img-config-detail.module'
import {ImgConfigEditModule} from './modules/img-config-edit/img-config-edit.module'
import {ImgTitleModule} from './modules/img-title/img-title.module'
import {ImgConfigsModule} from './modules/img-configs/img-configs.module'
import {ImgUrlModule} from './modules/img-url/img-url.module'
import {MinorModule} from './modules/minor/minor.module'
import {ImgConfigAddModule} from './modules/img-config-add/img-config-add.module'


//App directive



// App modules/components
import {NavigationModule} from "./modules/navigation/navigation.module";
import {FooterModule} from "./modules/footer/footer.module";
import {TopNavBarModule} from "./modules/top-nav-bar/top-nav-bar.module";
import {ImgTitleDetailModule} from './modules/img-title-detail/img-title-detail.module'












//test

@NgModule({
    declarations: [
        AppComponent,
        //App directive
    ],
    imports     : [

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




        // Modules
        NavigationModule,
        FooterModule,
        TopNavBarModule,

        RouterModule.forRoot(ROUTES)
    ],
    providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap   : [AppComponent]
})

export class AppModule {}