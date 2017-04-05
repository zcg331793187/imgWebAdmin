import {Component} from '@angular/core';
import { correctHeight, detectBody } from './app.helpers';
declare var toastr:any;




import  * as jQuery from 'jquery';


@Component({
    selector   : 'app',
    templateUrl: 'app.template.html',
})

export class AppComponent {





    ngAfterViewInit() {



      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };



        // Run correctHeight function on load and resize window event
        jQuery(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        jQuery('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }


}
