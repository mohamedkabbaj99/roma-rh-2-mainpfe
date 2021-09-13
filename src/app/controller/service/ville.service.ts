import { Injectable } from '@angular/core';
import {Ville} from '../model/ville.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private url = this.role.baseUrl + 'ville/';
  private _items: Array<Ville>;
  private _selected: Ville;
  private _selectes: Array<Ville>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient, private role: RoleUrlService) { }

   public findAllVilles(): Observable<Array<Ville>>{
    return  this.http.get<Array<Ville>>(this.url);
   }

  get items(): Array<Ville> {
    return this._items;
  }

  set items(value: Array<Ville>) {
    this._items = value;
  }

  get selected(): Ville {
    return this._selected;
  }

  set selected(value: Ville) {
    this._selected = value;
  }

  get selectes(): Array<Ville> {
    return this._selectes;
  }

  set selectes(value: Array<Ville>) {
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
