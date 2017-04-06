import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service'

@Injectable()
export class AuthGuardService implements CanActivate {
  	constructor
    (
  		private router: Router,
      public UserService:UserService


    ) {

  	}

  	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  		//这里可以调用真实的服务进行验证
      if(!this.UserService.autoLogin()){


        this.router.navigate(["/login"]);
      }


       return true;
  	}
}
