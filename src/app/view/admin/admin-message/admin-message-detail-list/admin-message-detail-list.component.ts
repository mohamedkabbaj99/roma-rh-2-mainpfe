import { Component, OnInit } from '@angular/core';
import {MessageDetailService} from "../../../../controller/service/message-detail.service";
import {MessageDetail} from "../../../../controller/model/message-detail.model";

@Component({
  selector: 'app-admin-message-detail-list',
  templateUrl: './admin-message-detail-list.component.html',
  styleUrls: ['./admin-message-detail-list.component.scss']
})
export class AdminMessageDetailListComponent implements OnInit {

  cols: any[];
  constructor(private  messagedetailService : MessageDetailService) { }

  ngOnInit(): void {
    this.initCol();
    this.messagedetailService.findMessagedetailsOfUser().subscribe(data => this.items = data);
  }
  public openCreate() {
    this.selected = new MessageDetail();
    this.submitted = false;
    this.createDialog = true;
  }
  public view(messagedetail: MessageDetail) {
    this.selected = {...messagedetail};
    this.messagedetailService.read();
    this.viewDialog = true;
  }

  get selected(): MessageDetail {
    return this.messagedetailService.selected;
  }

  set selected(value: MessageDetail) {
    this.messagedetailService.selected = value;
  }

  get items(): Array<MessageDetail> {
    return this.messagedetailService.items;
  }

  set items(value: Array<MessageDetail>) {
    this.messagedetailService.items = value;
  }

  get submitted(): boolean {
    return this.messagedetailService.submitted;
  }

  set submitted(value: boolean) {
    this.messagedetailService.submitted = value;
  }
  get createDialog(): boolean {
    return this.messagedetailService.createDialog;
  }

  set createDialog(value: boolean) {
    this.messagedetailService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.messagedetailService.editDialog;
  }

  set editDialog(value: boolean) {
    this.messagedetailService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.messagedetailService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.messagedetailService.viewDialog = value;
  }

  get selectes(): Array<MessageDetail> {
    return this.messagedetailService.selectes;
  }

  set selectes(value: Array<MessageDetail>) {
    this.messagedetailService.selectes = value;
  }

  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'dateDepart', header: 'Date départ'},
      {field: 'dateFin', header: 'Date fin'},
      {field: 'etatDemandeConfeLibelle', header: 'Etat Demande'},
      {field: 'msgColl', header: 'Votre massage'},
      {field: 'action', header: 'Actions '},
    ];
  }

}
