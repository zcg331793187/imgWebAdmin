import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import  {HttpService} from '../../services/http.service'
import  {LocalStorageService} from '../../services/local-storage.service'
import {Router} from '@angular/router';

declare var toastr:any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers:[UserService,HttpService,LocalStorageService]
})

export class LoginComponent implements OnInit {

  userName;
  password;
  constructor(
    private router: Router,
    private UserService:UserService,
    private LocalStorageService:LocalStorageService
  ) {


    this.UserService.isLogin().subscribe(res=>
      {
        if(res['token']){

          this.router.navigate(["/main"]);
          // this.router.navigateByUrl();
        }

      }
    );





  }

  ngOnInit() {



    // toastr.success('Responsive Admin Theme', 'Welcome to INSPINIA');


  }


  login(){

    let obj = {userName:this.userName,password:this.password};


    this.UserService.login(obj).subscribe(res=>{
        if(res['token']){


          toastr.success('登陆成功');
          this.LocalStorageService.setObject('userInfo',res);
          this.UserService.isLogin().subscribe(res=>
            {
              if(res['token']){

                this.router.navigate(["/main"]);
                // this.router.navigateByUrl();
              }

            }
          );
        }else{
          toastr.error('登陆失败');
        }


    });



  }


}
