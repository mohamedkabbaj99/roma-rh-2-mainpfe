import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategorieGroupeTache} from '../model/categorie-groupe-tache.model';
import {RoleUrlService} from "./security/role-url.service";


@Injectable({
  providedIn: 'root'
})
export class CategorieGroupeTacheService {

  private url = this.role.baseUrl + 'categorie-groupe-tache/';
  private _selected: CategorieGroupeTache;
  private _items: Array<CategorieGroupeTache>;
  private _selectes: Array<CategorieGroupeTache>;
  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _submitted: boolean;

  constructor(private http: HttpClient, private role: RoleUrlService) {
  }

  public findAll(): Observable<Array<CategorieGroupeTache>> {
    return this.http.get<Array<CategorieGroupeTache>>(this.url);
  }

  public save(): Observable<CategorieGroupeTache> {
    return this.http.post<CategorieGroupeTache>(this.url, this.selected);
  }

  public edit(): Observable<CategorieGroupeTache> {
    return this.http.put<CategorieGroupeTache>(this.url, this.selected);
  }

  public deleteByCode(): Observable<number> {
    return this.http.delete<number>(this.url + 'code/' + this.selected.code);
  }



  public deleteMultipleByCode(): Observable<number> {
    return this.http.post<number>(this.url + 'delete-multiple', this.selectes);
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

  public deleteIndexById(id: number) {
    this.items.splice(this.findIndexById(id), 1);
  }

  public deleteMultipleIndexById() {
    for (const item of this.selectes) {
      this.deleteIndexById(item.id);
    }
  }
  get selectes(): Array<CategorieGroupeTache> {
    return this._selectes;
  }

  set selectes(value: Array<CategorieGroupeTache>) {
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

  get selected(): CategorieGroupeTache {
    if (this._selected == null){
      this._selected = new CategorieGroupeTache();
    }
    return this._selected;
  }

  set selected(value: CategorieGroupeTache) {
    this._selected = value;
  }

  get items(): Array<CategorieGroupeTache> {
    return this._items;
  }

  set items(value: Array<CategorieGroupeTache>) {
    this._items = value;
  }
}
