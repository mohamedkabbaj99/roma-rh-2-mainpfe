import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoleUrlService} from "./security/role-url.service";
import {EtatMessage} from "../model/etat-message.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtatMessageService {
  private url = this.role.baseUrl + 'etat-message/';
  private _items: Array<EtatMessage>;
  private _selected: EtatMessage;
  private _selectes: Array<EtatMessage>;

  constructor(private http: HttpClient, private role: RoleUrlService) { }

  public findAll(): Observable<Array<EtatMessage>> {
    return this.http.get<Array<EtatMessage>>(this.url);
  }


  get items(): Array<EtatMessage> {
    return this._items;
  }

  set items(value: Array<EtatMessage>) {
    this._items = value;
  }

  get selected(): EtatMessage {
    return this._selected;
  }

  set selected(value: EtatMessage) {
    this._selected = value;
  }

  get selectes(): Array<EtatMessage> {
    return this._selectes;
  }

  set selectes(value: Array<EtatMessage>) {
    this._selectes = value;
  }
}


