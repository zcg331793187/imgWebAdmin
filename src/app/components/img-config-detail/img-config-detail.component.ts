import { Component, OnInit } from '@angular/core';
import {ImgConfigService} from '../../services/img-config.service'
import  {HttpService } from '../../services/http.service'
import {ActivatedRoute,Params,Router} from '@angular/router';
import { Location }     from '@angular/common';

@Component({
  selector: 'views-img-config-detail',
  templateUrl: './img-config-detail.component.html',
  // styleUrls: ['./img-config-detail.component.css']
  providers:[ImgConfigService,HttpService],
})
export class ImgConfigDetailComponent implements OnInit {

  data:Object = {};
  id:number;
  constructor(
      private ImgConfigService:ImgConfigService,
           private aRoute: ActivatedRoute,
           private location: Location
  )
  {



   this.aRoute.params.subscribe(params=>{

      this.id = params['id'];

    });
    this.ImgConfigService.configDetail(this.id).subscribe((res:any)=>{

      res = res.json();

      res.config = JSON.parse(res.config);



      res.config = this.handleConfig(res.config);

      this.data = res;
      console.log(this.data);
    });

  }


  handleConfig(data){
    let config = [];

    for (let i in data){


      config.push({key:[i],value:JSON.stringify(data[i])});
    }


    return config;
  }

  ngOnInit() {
  }

}
