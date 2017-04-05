import { Component, OnInit } from '@angular/core';
declare var toastr:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {



    toastr.success('Responsive Admin Theme', 'Welcome to INSPINIA');


  }

}
