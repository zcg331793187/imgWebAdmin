import {Injectable} from '@angular/core';

import {
    Http,
    Response,
    RequestOptions,
    Headers
} from '@angular/http';

// import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class HttpService {

    private api = 'http://localhost:3003';
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http:Http) {

    }







    httpGet(uri, data?, configs?) {


        if(configs){
            this.headers = configs;
        }


        return this.http.get(this.api+uri,this.headers);
        // return this.http.get(this.api+uri,this.headers);
    }

    httpPost(uri,data,configs?){


        if(configs){
            this.headers = configs;
        }
        // this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let body = JSON.stringify(
            data
        );

        return this.http.post(this.api+uri,body);

    }



    httpDelete(uri,configs?){


        return this.http.delete(this.api+uri,configs);

    }



}
