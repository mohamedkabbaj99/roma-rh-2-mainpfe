import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '../model/message.model';
import {Observable} from 'rxjs';

import {RoleUrlService} from './security/role-url.service';
import {TokenStorageService} from './security/token-storage.service';
import {MessageVo} from "../model/message-vo.model";

@Injectable({
    providedIn: 'root'
})
export class UserMessageService {
    private url = this.role.baseUrl + 'message/';
    private _items: Array<Message>;
    private _selected: Message;
    private _selectes: Array<Message>;
    private _messageVO: MessageVo;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    get messageVO(): MessageVo {
        if (this._messageVO == null) {
            this._messageVO = new MessageVo();
        }
        return this._messageVO;
    }
    set messageVO(value: MessageVo) {
        this._messageVO = value;
    }

    constructor(private http: HttpClient,
                private role: RoleUrlService,
                private token: TokenStorageService) {
    }

  public findMessagesOfUser(): Observable<Array<Message>> {
        return this.http.get<Array<Message>>(this.url + 'login/' + this.token.getUser().login);
    }

    public findAll(): Observable<Array<Message>> {
        return this.http.get<Array<Message>>(this.url);
    }

    public searchmessage(): Observable<Array<Message>> {
        return this.http.post<Array<Message>>(this.url + 'search', this.messageVO);
    }


    public save(): Observable<Message> {
        console.log(this.selected);
        return this.http.post<Message>(this.url, this.selected);
    }
    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    public findByEtatMessage(): Observable<Array<Message>> {
        return this.http.get<Array<Message>>(this.url + 'etatMessageCode/' + this.selected.etatMessage.code);
    }

    get items(): Array<Message> {
        return this._items;
    }

    set items(value: Array<Message>) {
        this._items = value;
    }

    get selected(): Message {
        if (this._selected == null) {
            this._selected = new Message();
        }
        return this._selected;
    }

    set selected(value: Message) {
        this._selected = value;
    }

    get selectes(): Array<Message> {
        return this._selectes;
    }

    set selectes(value: Array<Message>) {
        this._selectes = value;
    }

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }

    get editDialog(): boolean {
        return this._editDialog;
    }

    set editDialog(value: boolean) {
        this._editDialog = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }



}
