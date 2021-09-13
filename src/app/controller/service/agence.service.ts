import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Agence} from '../model/agence.model';
import {Projet} from '../model/projet.model';
import {RoleUrlService} from './security/role-url.service';
import {AgenceVo} from '../model/agence-vo.model';
import {DemandeConge} from '../model/demande-conge.model';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private url = this.role.baseUrl + 'agence/';
  private _items: Array<Agence>;
  private _selected: Agence;
  private _selectes: Array<Agence>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;
  private _agenceVo: AgenceVo;


  get agenceVo(): AgenceVo {
    if(this._agenceVo == null){
      this._agenceVo = new AgenceVo();
    }
    return this._agenceVo;
  }

  set agenceVo(value: AgenceVo) {
    this._agenceVo = value;
  }

  public constructor(private http: HttpClient, private role: RoleUrlService) {}


  public save(): Observable<Agence>{
    return  this.http.post<Agence>(this.url, this.selected);
  }

  public deleteByCode(): Observable<number> {
    return this.http.delete<number>(this.url + 'code/' + this.selected.code);
  }
  public findByCriteria(): Observable<Array<Agence>> {
    return this.http.post<Array<Agence>>(this.url + 'search', this.agenceVo);
  }

  public deleteMultipleByCode(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple-by-code' , this.selectes);
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

  public edit(): Observable<Agence>{
    return this.http.put<Agence>(this.url , this.selected);
  }
  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }
  public deleteMultipleIndexById() {
    for (const item of this.selectes){
      this.deleteIndexById(item.id);
    }
  }

  get items(): Array<Agence> {
    if (this._items == null){
      this._items = new Array<Agence>();
    }
    return this._items;
  }

  set items(value: Array<Agence>) {
    this._items = value;
  }

  get selected(): Agence {
    if (this._selected == null){
      this._selected = new Agence();
    }
    return this._selected;
  }

  set selected(value: Agence) {
    this._selected = value;
  }

  get selectes(): Array<Agence> {
    return this._selectes;
  }

  set selectes(value: Array<Agence>) {
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


  findAllAgences(): Observable<Array<Agence>> {
    return this.http.get<Array<Agence>>(this.url);
  }

  public findByChefAgenceCode(code: string): Observable<Agence> {
    console.log('lien -->' + this.url + 'codec/' + code);
    return this.http.get<Agence>(this.url + 'codec/' + code);
  }

}
