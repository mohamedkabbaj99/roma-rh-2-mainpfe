import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getItemFromLocalStorage(item: string){
    window.localStorage.getItem(item);
  }
  setItemToLocalStorage(key: string, value: string){
    window.localStorage.setItem(key, value);
  }
  removeItemFromLocalStorage(key: string){
    window.localStorage.removeItem(key);
  }
}
