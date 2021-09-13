import {Injectable} from '@angular/core';
import {Collaborateur} from '../model/collaborateur.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RoleUrlService} from './security/role-url.service';
import {ChefAgenceService} from './chef-agence.service';
import {TokenStorageService} from './security/token-storage.service';

@Injectable({
    providedIn: 'root'
})
export class CollaborateurService {
    private url: string = this.role.baseUrl + 'collaborateur/';

    private _items: Array<Collaborateur>;
    private _selected: Collaborateur;
    private _selectes: Array<Collaborateur>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService,
                private chefAgenceService: ChefAgenceService) {
    }

    public findCollaboratorsOfChefAgence(): Observable<Array<Collaborateur>> {
        return this.http.get<Array<Collaborateur>>(this.url + 'codec/' + this.chefAgenceService.selected.code);
    }

    get selectes(): Array<Collaborateur> {
        return this._selectes;
    }

    set selectes(value: Array<Collaborateur>) {
        this._selectes = value;
    }

    get items(): Array<Collaborateur> {
        if (this._items == null) {
            this._items = new Array<Collaborateur>();
        }
        return this._items;
    }

    set items(value: Array<Collaborateur>) {
        this._items = value;
    }

    get selected(): Collaborateur {
        if (this._selected == null) {
            this._selected = new Collaborateur();
        }
        return this._selected;
    }

    set selected(value: Collaborateur) {
        this._selected = value;
    }

    public findAll(): Observable<Array<Collaborateur>> {
        return this.http.get<Array<Collaborateur>>(this.url);
    }

    public findCollaborateurs(login: string): Observable<Array<Collaborateur>> {
        return this.http.get<Array<Collaborateur>>(this.url + 'findCollaborateurs/' + login);
    }

    public findByLogin(login: string): Observable<Collaborateur> {
        return this.http.get<Collaborateur>(this.url + 'login/' + login);
    }

    public save(): Observable<Collaborateur> {
        return this.http.post<Collaborateur>(this.url, this.selected);
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

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }

}
