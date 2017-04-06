import { Injectable } from '@angular/core';
import  {HttpService} from './http.service'
import {LocalStorageService} from './local-storage.service'
@Injectable()
export class UserService {

  constructor(public HttpService: HttpService,private LocalStorageService:LocalStorageService) {

    console.log();

  }


  public login(userInfo){



    return this.HttpService.httpPost('/admin/login', userInfo);

  }

  outLogin(){

    this.LocalStorageService.remove('userInfo');


  }

  public isLogin(){

    let userInfo =  this.LocalStorageService.getObject('userInfo');
   return this.login(userInfo);
  }

  public autoLogin():boolean{

    let userInfo = this.LocalStorageService.getObject('userInfo');
    if(userInfo['token']){

      console.log('路由守护：已登录');
      return true;

    }else{
      console.log('路由守护：未登录');
      console.log('路由守护：去登陆');
      return false;
    }


  }
}
