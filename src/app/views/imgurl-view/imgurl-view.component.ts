import { Component } from '@angular/core';

import {Language} from './Language';
// require('../Language.js');

@Component({
    selector: 'imgurlView',
    templateUrl: 'imgurl-view.template.html',
})
export class imgurlViewComponent {

    constructor(){
        console.log(Language);
        console.log('loginViewComponent');
    }
}