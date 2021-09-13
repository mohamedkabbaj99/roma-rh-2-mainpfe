import { Injectable } from '@angular/core';
import {Admin} from '../model/admin.model';
import {HttpClient} from '@angular/common/http';
import {RoleUrlService} from './security/role-url.service';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {TokenStorageService} from './security/token-storage.service';
import {DemandeConge} from '../model/demande-conge.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = this.role.baseUrl + 'user/';

  private _items: Array<User>;
  private _selected: User;
  private _selectes: User[];
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient, private role: RoleUrlService,
              private token: TokenStorageService) {
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
  public edit(): Observable<User>{
    return this.http.put<User>(this.url + 'edit/', this.selected);
  }
  public block(id: number): Observable<number>{
    return  this.http.get<number>(this.url + 'block/id/' + id);
  }
  public deblock(id: number): Observable<number>{
    return  this.http.get<number>(this.url + 'deblock/idi/' + id);
  }
  public reset(id: number): Observable<number>{
    return  this.http.get<number>(this.url + 'reset/ide/' + id);
  }
  public findByLogin(): Observable<User>{
    return this.http.get<User>(this.url + 'login/' + this.selected.login);
  }
  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }


  get items(): Array<User> {
    return this._items;
  }

  set items(value: Array<User>) {
    this._items = value;
  }

  get selected(): User {
    if (this._selected == null) {
      this._selected = new Admin();
    }
    return this._selected;
  }

  set selected(value: User) {
    this._selected = value;
  }

  get selectes(): Array<User> {
    if (this._selectes  == null){
      this._selectes = new Array<User>();
    }
    return this._selectes;
  }

  set selectes(value: Array<User>) {
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
}
