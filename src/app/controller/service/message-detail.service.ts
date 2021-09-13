import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {MessageDetail} from '../model/message-detail.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Message} from '../model/message.model';
import {TokenStorageService} from "./security/token-storage.service";
import {CategorieGroupeTache} from "../model/categorie-groupe-tache.model";


@Injectable({
    providedIn: 'root'
})
export class MessageDetailService {
    private url = environment.baseUrl + 'message-detail/';
    private _items: Array<MessageDetail>;
    private _selected: MessageDetail;
    private _selectes: Array<MessageDetail>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private token: TokenStorageService) {
    }


    /* public findByMessagesId(): Observable<Array<MessageDetail>> {
       return this.http.get<Array<MessageDetail>>(this.url + 'messageid/' + this.selected.message.id);
     }*/

    public findByMessagesId(c: Message) {
        console.log('lien -->' + this.url + 'messageid/' + c.id);
        return this.http.get<Array<MessageDetail>>(this.url + 'messageid/' + c.id);
    }

    public findMessagedetailsOfUser(): Observable<Array<MessageDetail>> {
        return this.http.get<Array<MessageDetail>>(this.url + 'login/' + this.token.getUser().login);
    }

    public read(): Observable<MessageDetail> {
        return this.http.put<MessageDetail>(this.url, this.selected.id);
    }

    public findAll(): Observable<Array<MessageDetail>> {
        return this.http.get<Array<MessageDetail>>(this.url);
    }

    get items(): Array<MessageDetail> {
        if (this._items == null) {
            this._items = new Array<MessageDetail>();
        }
        return this._items;
    }

    set items(value: Array<MessageDetail>) {
        this._items = value;
    }

    get selected(): MessageDetail {
        return this._selected;
    }

    set selected(value: MessageDetail) {
        this._selected = value;
    }

    get selectes(): Array<MessageDetail> {
        return this._selectes;
    }

    set selectes(value: Array<MessageDetail>) {
        this._selectes = value;
    }

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
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

    get editDialog(): boolean {
        return this._editDialog;
    }

    set editDialog(value: boolean) {
        this._editDialog = value;
    }
}
