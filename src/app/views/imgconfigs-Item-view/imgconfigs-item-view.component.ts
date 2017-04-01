import { Component } from '@angular/core';

import {
    Http,
    Response,
    RequestOptions,
    Headers
} from '@angular/http';

@Component({
    selector: 'imgconfigsitemView',
    templateUrl: 'imgconfigs-item-view.template.html'
})

export class imgconfigsitemViewComponent {

    searchValues='';
    model:string = '';
    loading:boolean =false;
    data:Object = {};

    name:string = '';
    constructor(public http: Http){




    }


    makePost(): void {
        this.loading = true;
        this.http.post(
            'http://jsonplaceholder.typicode.com/posts',
            JSON.stringify({
                body: 'bar',
                title: 'foo',
                userId: 1
            }))
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
    setValue() { this.name = 'Nancy'; }

    serach(){



    }
    deleteConfig(){



    }





    onSearch(event:KeyboardEvent){


        this.searchValues= (<HTMLInputElement>event.target).value;

        let code =event.keyCode;

        if(code==13){

            console.log('发送请求');
            console.log(event);
        }



    }
}