import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ChefAgence} from '../model/chef-agence.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class ChefAgenceService {

    private url = this.role.baseUrl + 'chef-agence/';

    private _items: Array<ChefAgence>;
    private _selected: ChefAgence;
    private _selectes: Array<ChefAgence>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public save(): Observable<ChefAgence> {
        return this.http.post<ChefAgence>(this.url, this.selected);
    }

    public findAllChefAgence(): Observable<Array<ChefAgence>> {
        return this.http.get<Array<ChefAgence>>(this.url);
    }

    public chefAgenceConnection(): Observable<ChefAgence> {
        return this.http.post<ChefAgence>(this.url + 'connectionchef', this.selected);
    }

     findByLogin(login: string): Observable<ChefAgence> {
        return this.http.get<ChefAgence>(this.url + 'login/' + login);
    }

    get items(): Array<ChefAgence> {
        return this._items;
    }


    set items(value: Array<ChefAgence>) {
        this._items = value;
    }

    get selected(): ChefAgence {
        if (this._selected == null) {
            this._selected = new ChefAgence();
        }
        return this._selected;
    }

    set selected(value: ChefAgence) {
        this._selected = value;
    }

    get selectes(): Array<ChefAgence> {
        return this._selectes;
    }

    set selectes(value: Array<ChefAgence>) {
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
