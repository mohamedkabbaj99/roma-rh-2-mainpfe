import { Component, OnInit } from '@angular/core';
import {UserMessageService} from "../../../../controller/service/user-message.service";
import {EtatMessageService} from "../../../../controller/service/etat-message.service";
import {MessageVo} from "../../../../controller/model/message-vo.model";
import {EtatMessage} from "../../../../controller/model/etat-message.model";
import {Message} from "../../../../controller/model/message.model";

@Component({
  selector: 'app-admin-message-search',
  templateUrl: './admin-message-search.component.html',
  styleUrls: ['./admin-message-search.component.scss']
})
export class AdminMessageSearchComponent implements OnInit {

  constructor(private messageService: UserMessageService,
              private etatMessageService: EtatMessageService) { }

  ngOnInit(): void {
    this.etatMessageService.findAll().subscribe(data => this.itemsEtatMessage = data);
  }


  public search() {
    this.messageService.searchmessage().subscribe(
        data => {
          this.items = data;

        }
    );
  }


  get messageVo(): MessageVo {
    return this.messageService.messageVO;
  }

  get itemsEtatMessage(): Array<EtatMessage> {
    return this.etatMessageService.items;
  }


  set itemsEtatMessage(value: Array<EtatMessage>) {
    this.etatMessageService.items = value;
  }


  get selected(): MessageVo{
    return this.messageService.messageVO;
  }
  set selected(value: MessageVo) {
    this.messageService.messageVO = value;
  }

  get items(): Array<Message> {
    return this.messageService.items;
  }

  set items(value: Array<Message>) {
    this.messageService.items = value;
  }



}
