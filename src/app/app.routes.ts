import {Routes} from "@angular/router";

import {MainComponent} from './components/main/main.component'


import {LoginComponent} from './components/login/login.component'
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component'




export const ROUTES:Routes = [
    // Main redirect
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    // App views
    {path: 'main', component: MainComponent},
    {path: 'login', component: LoginComponent},
    // Handle all other routes
    {path: '**',    component: NotFoundPageComponent }
];
