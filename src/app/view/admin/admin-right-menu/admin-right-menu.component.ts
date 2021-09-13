import { Component} from '@angular/core';
import {AdminMainComponent} from '../admin-main/admin-main.component';

@Component({
  selector: 'app-admin-right-menu',
  templateUrl: './admin-right-menu.component.html',
})
export class AdminRightMenuComponent{

  statusActive = true;

  messagesActive: boolean;

  constructor(public appMain: AdminMainComponent) {
  }

  messagesClick() {
    this.statusActive = false;
    this.messagesActive = true;
  }

  statusClick() {
    this.statusActive = true;
    this.messagesActive = false;
  }

}
