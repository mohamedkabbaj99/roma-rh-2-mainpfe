import { Component, OnInit } from '@angular/core';
import {MessageDetail} from "../../../../controller/model/message-detail.model";
import {UserMessageService} from "../../../../controller/service/user-message.service";
import {TokenStorageService} from "../../../../controller/service/security/token-storage.service";
import {MessageService} from "primeng/api";
import {MessageDetailService} from "../../../../controller/service/message-detail.service";
import {User} from "../../../../controller/model/user.model";
import {EtatMessage} from "../../../../controller/model/etat-message.model";
import {Message} from "../../../../controller/model/message.model";

@Component({
  selector: 'app-admin-message-create',
  templateUrl: './admin-message-create.component.html',
  styleUrls: ['./admin-message-create.component.scss']
})
export class AdminMessageCreateComponent implements OnInit {

  distinataires: Array<string>;
  messageDetail: MessageDetail;

  constructor(private messageUserService: UserMessageService,
              private token: TokenStorageService,
              private messageService: MessageService,
              private messageDetailService: MessageDetailService) {
  }

  ngOnInit(): void {

  }

  convertToMessageDetail(data: string[]) {
    for (let item of data) {
      this.messageDetail = new MessageDetail();
      this.messageDetail.destinataire = new User();
      this.messageDetail.destinataire.login = item;
      //fz
      this.messageDetail.loginDestinataire = item;
      this.selected.messageDetails.push({...this.messageDetail});

    }
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }


  public save() {
    this.submitted = true;
    this.convertToMessageDetail(this.distinataires);
    this.selected.etatMessage = new EtatMessage();
    this.selected.etatMessage.code = 'e1';
    if (this.selected.objet.trim()) {
      this.selected.source.login = this.token.getUser().login;
      //console.log(this.selected);
      this.messageUserService.save().subscribe(data => {
        console.log(data);
        if (data == null) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Message non envoyé',
          });
        } else {
          this.items.push({...data});
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Message  envoyé',
            life: 3000
          });
        }
      });
      this.createDialog = false;
      this.selected = new Message();
    }
  }

  get selected(): Message {
    return this.messageUserService.selected;
  }

  set selected(value: Message) {
    this.messageUserService.selected = value;
  }


  get createDialog(): boolean {
    return this.messageUserService.createDialog;
  }

  set createDialog(value: boolean) {
    this.messageUserService.createDialog = value;
  }

  get submitted(): boolean {
    return this.messageUserService.submitted;
  }

  set submitted(value: boolean) {
    this.messageUserService.submitted = value;
  }


  get items(): Array<Message> {
    return this.messageUserService.items;
  }

  set items(value: Array<Message>) {
    this.messageUserService.items = value;
  }

  get selectedMessageDetail(): MessageDetail {
    return this.messageDetailService.selected;
  }

  set selectedMessageDetail(value: MessageDetail) {
    this.messageDetailService.selected = value;
  }

}
