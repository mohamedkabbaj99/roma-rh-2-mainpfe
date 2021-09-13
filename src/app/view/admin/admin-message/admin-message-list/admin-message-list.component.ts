import { Component, OnInit } from '@angular/core';
import {UserMessageService} from "../../../../controller/service/user-message.service";
import {MessageDetailService} from "../../../../controller/service/message-detail.service";
import {Message} from "../../../../controller/model/message.model";

@Component({
  selector: 'app-admin-message-list',
  templateUrl: './admin-message-list.component.html',
  styleUrls: ['./admin-message-list.component.scss']
})
export class AdminMessageListComponent implements OnInit {

  cols: any[];
  constructor(private  messageService: UserMessageService ,private  messagedetailService : MessageDetailService ) { }

  ngOnInit(): void {
    this.initCol();
    this.messageService.findMessagesOfUser().subscribe(data => this.items = data);
  }

  public openCreate() {
    this.selected = new Message();
    this.submitted = false;
    this.createDialog = true;
  }
  public view(message: Message) {
    this.selected = {...message};
    this.findItems(message);
    this.viewDialog = true;
  }

  findItems(selected: Message) {
    this.selected = {...selected};
    this.messagedetailService.findByMessagesId(selected).subscribe(
        data => {
          console.log(data);
          this.messagedetailService.items = data;
        }
    );
  }


  get selected(): Message {
    return this.messageService.selected;
  }

  set selected(value: Message) {
    this.messageService.selected = value;
  }

  get items(): Array<Message> {
    return this.messageService.items;
  }

  set items(value: Array<Message>) {
    this.messageService.items = value;
  }

  get submitted(): boolean {
    return this.messageService.submitted;
  }

  set submitted(value: boolean) {
    this.messageService.submitted = value;
  }

  get createDialog(): boolean {
    return this.messageService.createDialog;
  }

  set createDialog(value: boolean) {
    this.messageService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.messageService.editDialog;
  }

  set editDialog(value: boolean) {
    this.messageService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.messageService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.messageService.viewDialog = value;
  }

  get selectes(): Array<Message> {
    return this.messageService.selectes;
  }

  set selectes(value: Array<Message>) {
    this.messageService.selectes = value;
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
