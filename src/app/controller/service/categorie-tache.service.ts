import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategorieTache} from '../model/categorie-tache.model';
import {CategorieGroupeTache} from '../model/categorie-groupe-tache.model';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class CategorieTacheService {
    private url = this.role.baseUrl + 'categorie-tache/';
    private _items: Array<CategorieTache>;
    private _selected: CategorieTache;
    private _selectes: Array<CategorieTache>;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public save(): Observable<CategorieTache> {
        return this.http.post<CategorieTache>(this.url, this.selected);
    }

    public edit(): Observable<CategorieTache> {
        return this.http.put<CategorieTache>(this.url, this.selected);
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

    get selected(): CategorieTache {
        return this._selected;
    }

    set selected(value: CategorieTache) {
        this._selected = value;
    }

    get selectes(): Array<CategorieTache> {
        return this._selectes;
    }

    set selectes(value: Array<CategorieTache>) {
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

    public findAll(): Observable<Array<CategorieTache>> {
        return this.http.get<Array<CategorieTache>>(this.url);
    }

    get items(): Array<CategorieTache> {
        if (this._items == null) {
            this._items = new Array<CategorieTache>();
        }
        return this._items;
    }

    set items(value: Array<CategorieTache>) {
        this._items = value;
    }

    public findByCategorieGroupeTacheCode(c: CategorieGroupeTache) {
        console.log('lien -->' + this.url + 'codec/' + c.code);
        return this.http.get<Array<CategorieTache>>(this.url + 'codec/' + c.code);
    }
}

