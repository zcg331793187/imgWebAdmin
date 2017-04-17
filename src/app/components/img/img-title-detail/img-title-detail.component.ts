import { Component, OnInit } from '@angular/core';

import {ImgConfigService} from '../../../services/img-config.service'
import  {HttpService } from '../../../services/http.service'
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Location }     from '@angular/common';

@Component({
  selector: 'views-img-title-detail',
  templateUrl: './img-title-detail.component.html',
  providers:[ImgConfigService,HttpService],
  // styleUrls: ['./img-title-detail.component.css']
})
export class ImgTitleDetailComponent implements OnInit {

  id;
  imgs;
  apiImgProxy:string = 'http://api.chowgiftking.com:3003/imgProxy/id/';
  constructor(
      private ImgConfigService:ImgConfigService,
      private aRoute: ActivatedRoute,
      private location: Location
  ) {

    this.aRoute.params.subscribe(params => {

      this.id = params['id'];

    });


    this.ImgConfigService.getTitleDetail(this.id).subscribe(res=>{

      // res = res.json();
      console.log(res);
      this.imgs = res;
    });


  }

  ngOnInit() {
  }

}
