import { Component, OnInit } from '@angular/core';

import {ImgConfigService} from '../../services/img-config.service'


import  {HttpService } from '../../services/http.service'

@Component({
  selector: 'views-img-config-add',
  templateUrl: './img-config-add.component.html',
    providers: [ImgConfigService,HttpService]//注意注入
  // styleUrls: ['./img-config-add.component.css']
})




export class ImgConfigAddComponent implements OnInit {

  constructor(private ImgConfigService:ImgConfigService) {

  }
  baseKeyWord;
  webName:string;

  ngOnInit() {


      this.ImgConfigService.getBaseKeyWord().subscribe(baseKeyWord =>{
        baseKeyWord = baseKeyWord.json();
        this.baseKeyWord = baseKeyWord
      }
  );

  }


  add(){


      let config = {};

      this.baseKeyWord.forEach(item=> {

              try{
                  if(item['value']){
                      config[item['keyName']] = eval('(' + item['value'] + ')');

                  }

              }catch (e){
                  config[item['keyName']] =item['value'];
                  console.log('解析错误，字符串请用引号包含');
                  // return;
              }
          }
      );


      // console.log(config);

      // console.log(this.baseKeyWord);
      // console.log(this.webName);




      console.log(config);
      this.ImgConfigService.addConfig({webName:this.webName,config}).subscribe(res=>{
        res = res.json();
          console.log(res);
      });


  }


}
