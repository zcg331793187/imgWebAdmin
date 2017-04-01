import {Routes} from "@angular/router";

import {MainComponent} from './components/main/main.component'
import {MinorComponent} from './components/minor/minor.component'
import {ImgUrlComponent} from './components/img-url/img-url.component'
import {ImgConfigsComponent} from './components/img-configs/img-configs.component'
import {ImgConfigEditComponent} from "./components/img-config-edit/img-config-edit.component";
import {ImgTitleComponent} from './components/img-title/img-title.component'
import {ImgConfigDetailComponent} from './components/img-config-detail/img-config-detail.component'
import {ImgConfigAddComponent} from './components/img-config-add/img-config-add.component'
import {ImgTitleDetailComponent} from './components/img-title-detail/img-title-detail.component'






export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'mainView', pathMatch: 'full'},

    // App views
    {path: 'main', component: MainComponent},
    // {path: 'loginView', component: loginViewComponent},
    {path: 'minor', component: MinorComponent},
    {path: 'imgUrl', component: ImgUrlComponent},
    {path: 'imgTitle', component: ImgTitleComponent},
    {path: 'imgTitle/:limit', component: ImgTitleComponent},
    {path: 'imgTitleDetail/:id', component: ImgTitleDetailComponent},
    {path: 'imgConfigs', component: ImgConfigsComponent},
    {path: 'imgConfigDetail/:id', component: ImgConfigDetailComponent},
    {path: 'imgConfigEdit/:id', component: ImgConfigEditComponent},
    {path: 'imgConfigAdd', component: ImgConfigAddComponent},

    // Handle all other routes
    {path: '**',    component: MainComponent }
];
