import { Component, OnInit } from '@angular/core';
import {UserMessageService} from "../../../../controller/service/user-message.service";
import {MessageDetailService} from "../../../../controller/service/message-detail.service";
import {MessageDetail} from "../../../../controller/model/message-detail.model";
import {Message} from "../../../../controller/model/message.model";

@Component({
  selector: 'app-admin-message-view',
  templateUrl: './admin-message-view.component.html',
  styleUrls: ['./admin-message-view.component.scss']
})
export class AdminMessageViewComponent implements OnInit {

  cols: any[];


  constructor(private messageService : UserMessageService , private  messagedetailService : MessageDetailService) { }

  ngOnInit(): void {

  }



  public hideViewDialog() {
    this.viewDialog = false;
  }

  get items(): Array<MessageDetail> {
    return this.messagedetailService.items;
  }

  set items(value: Array<MessageDetail>) {
    this.messagedetailService.items = value;
  }
  get selectes(): Array<MessageDetail> {
    return this.messagedetailService.selectes;
  }

  set selectes(value: Array<MessageDetail>) {
    this.messagedetailService.selectes = value;
  }

  get selected(): Message {
    return this.messageService.selected;
  }

  set selected(value: Message) {
    this.messageService.selected = value;
  }

  get viewDialog(): boolean {
    return this.messageService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.messageService.viewDialog = value;
  }


}
