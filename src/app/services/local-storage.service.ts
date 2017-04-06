import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  public localStorage:any;


  constructor() {
    if (!localStorage) {
      throw new Error('浏览器不支持 Local Storage');
    }
    this.localStorage = localStorage;
  }

  public set(key:string, value:string):string {
    this.localStorage[key] = value;

    return this.localStorage[key];
  }

  public get(key:string):string {
    return this.localStorage[key] || null;
  }

  public setObject(key:string, value:any):Object {
    this.localStorage[key] = JSON.stringify(value);

    return this.localStorage[key];
  }

  public getObject(key:string):any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public remove(key:string):any {
    this.localStorage.removeItem(key);
  }
}
