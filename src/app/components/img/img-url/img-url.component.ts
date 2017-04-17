import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'views-img-url',
  templateUrl: './img-url.component.html',
  // styleUrls: ['./img-url.component.css']
})
export class ImgUrlComponent implements OnInit {

  public textStream:Subject<string> = new Subject<string>();
  public textSt:string;

  constructor() {


  }

  ngOnInit() {
    console.log('ngOnInit');
    this.text();
  }


  async text(){

    // this.textStream.map

    // this.textStream.next(this.textSt);

    console.log( this.textStream.observers);
    console.log('开始');


    let s= await this.load();
    console.log('结束');

  }

  async load(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{


        console.log('两秒后执行');
        resolve([])
      },2000);


    });

  }




}
