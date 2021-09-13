import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admin} from '../model/admin.model';
import {Observable} from 'rxjs';
import {RoleUrlService} from './security/role-url.service';
import {Projet} from '../model/projet.model';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private url = this.role.baseUrl + 'admin/';

    private _items: Array<Admin>;
    private _selected: Admin;
    private _selectes: Array<Admin>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService) {
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
    public edit(): Observable<Admin>{
        return this.http.put<Admin>(this.url + 'edit/', this.selected);
    }
    public findByLogin(): Observable<Admin>{
        return this.http.get<Admin>(this.url + 'login/' + this.selected.login);
    }
    get editDialog(): boolean {
        return this._editDialog;
    }
    set editDialog(value: boolean) {
        this._editDialog = value;
    }


    get items(): Array<Admin> {
        return this._items;
    }

    set items(value: Array<Admin>) {
        this._items = value;
    }

    get selected(): Admin {
        if (this._selected == null) {
            this._selected = new Admin();
        }
        return this._selected;
    }

    set selected(value: Admin) {
        this._selected = value;
    }

    get selectes(): Array<Admin> {
        return this._selectes;
    }

    set selectes(value: Array<Admin>) {
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
