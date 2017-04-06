import {Injectable} from '@angular/core';
import  {HttpService} from './http.service'


@Injectable()
export class ImgConfigService {

    constructor(public HttpService: HttpService) {


    }


    getValidAllConfig() {

        return this.HttpService.httpGet('/configs/getValidAll');


    }


    getBaseKeyWord() {

        return this.HttpService.httpGet('/baseKeyWord/getValidAll');


    }

    addConfig({webName, config}) {


        return this.HttpService.httpPost('/configs/addConfig', {webName, config});


    }

    settingIsUse(id: number, isUse: number) {


        return this.HttpService.httpPost('/configs/settingIsUse', {id, isUse});

    }

    searchWebName(webName: string) {

        return this.HttpService.httpGet('/configs/searchWebName/' + webName);

    }

    configDetail(id:number) {

        return this.HttpService.httpGet(`/configs/configDetail/${id}`);

    }


    updateConfig({id,webName, config}){

        return this.HttpService.httpPost('/configs/updateConfig', {id,webName, config});


    }

    deleteConfig(id: number){

        return this.HttpService.httpGet(`/configs/deleteConfig/${id}`);


    }

    getValidAllTitle(limit=0){

        return this.HttpService.httpGet(`/titles/getAllTitle/${limit}`);


    }


    getTitleDetail(id){

        return this.HttpService.httpGet(`/titles/getTitleDetail/${id}`);


    }




  searchTitle(title: string) {

    return this.HttpService.httpGet('/titles/searchTitle/' + title);

  }
}
