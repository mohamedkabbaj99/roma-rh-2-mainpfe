import { Component, OnInit } from '@angular/core';
import {MessageDetailService} from "../../../../controller/service/message-detail.service";
import {MessageDetail} from "../../../../controller/model/message-detail.model";

@Component({
  selector: 'app-admin-message-detail-view',
  templateUrl: './admin-message-detail-view.component.html',
  styleUrls: ['./admin-message-detail-view.component.scss']
})
export class AdminMessageDetailViewComponent implements OnInit {

  constructor(private  messagedetailService : MessageDetailService) { }

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

  get selected(): MessageDetail {
    return this.messagedetailService.selected;
  }

  set selected(value: MessageDetail) {
    this.messagedetailService.selected = value;
  }
  get viewDialog(): boolean {
    return this.messagedetailService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.messagedetailService.viewDialog = value;
  }

}
