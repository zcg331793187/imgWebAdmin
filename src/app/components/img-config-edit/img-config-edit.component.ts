import {Component, OnInit} from '@angular/core';
import {ImgConfigService} from '../../services/img-config.service'
import  {HttpService} from '../../services/http.service'
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location}     from '@angular/common';


@Component({
    selector: 'views-img-config-edit',
    templateUrl: './img-config-edit.component.html',
    providers: [ImgConfigService, HttpService],

})
export class ImgConfigEditComponent implements OnInit {


    baseKeyWord;
    data;
    webName:string;

    id: number;

    ngOnInit() {
    }


    constructor(private ImgConfigService: ImgConfigService,
                private aRoute: ActivatedRoute,
                private location: Location) {

        this.aRoute.params.subscribe(params => {

            this.id = params['id'];

        });


        Promise.all([
            this.getBaseKeyWord(), this.configDetail()
        ]).then((res:any) => {
            this.baseKeyWord = res[0];
            this.data = res[1];
            console.log(res[1]);

            this.webName = this.data.webName;
            this.handelData();
            // console.log(this.baseKeyWord);
        })


    }


    handelData() {
        this.baseKeyWord.forEach((item, index) => {


            // console.log(item);
            for (let j in  this.data.config) {
                // console.log(this.data.config[j]);


                if (item['keyName'] == j) {

                    // console.log(this.baseKeyWord[index],'||||',this.data.config[j]);
                    this.baseKeyWord[index]['value'] = JSON.stringify(this.data.config[j]);

                    // console.log(this.baseKeyWord[index]);
                }

            }


        })


    }


    getBaseKeyWord() {

        return new Promise((resolve, reject) => {

            this.ImgConfigService.getBaseKeyWord().subscribe(res => {


                if (res) {
                    resolve(res.json());
                } else {
                    reject([]);
                }
            })


        });

    }

    configDetail() {

        return new Promise((resolve, reject) => {
            this.ImgConfigService.configDetail(this.id).subscribe((res:any) => {
              res = res.json();
                if (res) {
                    res.config = JSON.parse(res.config);
                    resolve(res);
                } else {
                    reject([]);
                }

            })
        });
    }


    save() {



        let config = {};

        this.baseKeyWord.forEach(item=> {

                try{
                    if(item['value']){
                        config[item['keyName']] = eval('(' + item['value'] + ')');
                        // config[item['keyName']] = item['value'];

                    }

                }catch (e){

                    console.log('解析错误，字符串请用引号包含');
                    return;
                }
            }
        );


        console.log(config);
        console.log(this.webName);


        this.ImgConfigService.updateConfig({id:this.id,webName:this.webName,config:config}).subscribe(res=>{
          res = res.json();
            console.log(res);
        });



    }


    cancel() {

        this.location.back();


    }


}
