import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


import  {HttpService} from '../../services/http.service'
import {ImgConfigService} from '../../services/img-config.service'


@Component({
    selector: 'views-img-configs',
    templateUrl: './img-configs.component.html',
    providers: [ImgConfigService, HttpService]//注意注入

    // styleUrls: ['./img-configs.component.css']
})

export class ImgConfigsComponent implements OnInit {



    data: string[] = [];
    webName:string = '';

    ngOnInit() {


    }

    constructor(private ImgConfigService: ImgConfigService, private router: Router) {


        this.ImgConfigService.getValidAllConfig().subscribe(res => {
            this.data = res;

        });

    }


    open(index,id) {




        this.ImgConfigService.settingIsUse(id,1).subscribe(res => {

            if(res[0]==1){
                this.data[index]['isUse'] = 1;
            }else{
                console.log('setting error');
            }


        });


    }

    close(index,id) {



        this.ImgConfigService.settingIsUse(id,0).subscribe(res => {



            if(res[0]==1){
                this.data[index]['isUse'] = 0;
            }else{
                console.log('setting error');
            }


        });

    }


    refresh(){

        this.ImgConfigService.getValidAllConfig().subscribe(res => {
            this.data = res;

        });

    }


    deleteConfig(index,id){
        this.ImgConfigService.deleteConfig(id).subscribe(res=>{
            if(res){
                this.data.splice(index,1);
            }

        });

    }



    search(){


        console.log(  this.webName);


        this.ImgConfigService.searchWebName(this.webName).subscribe(res=>{
            console.log(res);
            this.data = res;
        })
    }
}