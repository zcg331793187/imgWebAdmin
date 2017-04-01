import {Component, OnInit} from '@angular/core';
import  {HttpService} from '../../services/http.service'
import {ImgConfigService} from '../../services/img-config.service'
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
    selector: 'views-img-title',
    templateUrl: './img-title.component.html',
    providers: [ImgConfigService, HttpService]//注意注入

})
export class ImgTitleComponent implements OnInit {
    data;
    title;
    count:number =0;
    limit:number = 0;
    constructor(private ImgConfigService: ImgConfigService,
                private aRoute: ActivatedRoute,
                private router: Router) {

        this.aRoute.params.subscribe(params => {

            this.limit = params['limit'];

        });


        this.ImgConfigService.getValidAllTitle(this.limit).subscribe((res:any)=>{
                console.log(res);
                res = res.json();
                this.data = res.rows;
                this.count = res.count;
        });




    }


    ngOnInit() {
    }


}
