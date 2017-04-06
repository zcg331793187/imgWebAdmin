
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {


  @Input() count: number;
  @Input() limits: number;
  @Input() offset: number;
  @Input() public url:string;
  public page:number;
  public list:Object[];
  right;
  left;
  @Input('count') set changeCount(val: any) {

   this.page  = Math.round(Number(val/this.offset));
   this.list =  this.handelPage();
    this.handelLeftAndRight();

  }
  @Input('limits') set changeLimits(val: any) {

    this.limits  = Math.round(val);
    this.list =  this.handelPage();
    this.handelLeftAndRight();
  }


  constructor() { }



  ngOnInit() {
    //组件初始化完成之后，panelTitle才会有值
    // console.log(this.count);
    // console.log(this.limits);





  }


  handelPage(){

    let pages = [];
    let now = Number(this.limits);


    let active = null;
    for (let limit=0;limit<this.page;limit++){

        if(limit==now){
          active = true;
        }else{
          active = false;
        }


      pages.push({limit,active,url:this.url+limit});
    }




    return pages;
  }


  handelLeftAndRight(){

    let now = Number(this.limits);
    if(now>0){
      this.left =(this.url)+(now-1);

    }else{
      this.left = (this.url)+0;
    }


    if(now<this.page){
      this.right= (this.url)+(now+1);

    }else{
      this.right= (this.url)+this.page;
    }


    console.log('now:',now,'right',this.right);


  }

}
