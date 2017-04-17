import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


import  {HttpService} from '../../../services/http.service'
import {ImgConfigService} from '../../../services/img-config.service'
declare var toastr:any;


@Component({
    selector: 'views-img-configs',
    templateUrl: 'img-configs.component.html',
    providers: [ImgConfigService, HttpService]//注意注入

    // styleUrls: ['./img-configs.component.css']
})

export class ImgConfigsComponent implements OnInit {



    data:any= [];
    webName:string = '';

    ngOnInit() {


    }

    constructor(private ImgConfigService: ImgConfigService, private router: Router) {



        this.ImgConfigService.getValidAllConfig().subscribe(res => {

          // res.json();
            this.data = res;

        });

    }


    open(index,id) {




        this.ImgConfigService.settingIsUse(id,1).subscribe(res => {
            // res = res.json();
            if(res[0]==1){
              toastr.success('开启配置项成功！');
                this.data[index]['isUse'] = 1;
            }else{
              toastr.success('开启配置项失败！');

              console.log('setting error');
            }


        });


    }

    close(index,id) {



        this.ImgConfigService.settingIsUse(id,0).subscribe(res => {

        // res = res.json();

            if(res[0]==1){
              toastr.success('关闭配置项成功！');

              this.data[index]['isUse'] = 0;
            }else{
              toastr.error('关闭配置项失败');
            }


        });

    }


    refresh(){

        this.ImgConfigService.getValidAllConfig().subscribe(res => {
          // res =res.json();
            this.data = res;

        });

    }


    deleteConfig(index,id){
        this.ImgConfigService.deleteConfig(id).subscribe(res=>{
          // res = res.json();
            if(res){
              toastr.success('删除配置项成功！');

              this.data.splice(index,1);
            }else{
              toastr.error('删除配置项失败！');

            }

        });

    }



    search(){


      if(!this.webName){
        toastr.error('关键词不能为空');
        return;
      }

        this.ImgConfigService.searchWebName(this.webName).subscribe(res=>{
          // res = res.json();
          //   console.log(res);
            this.data = res;
        })
    }
}
