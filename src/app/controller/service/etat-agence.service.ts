import {Injectable} from '@angular/core';
import {EtatAgence} from '../model/etat-agence.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class EtatAgenceService {
    private url = this.role.baseUrl + 'etat-agence/';
    private _items: Array<EtatAgence>;
    private _selected: EtatAgence;
    private _selectes: Array<EtatAgence>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private  http: HttpClient, private role: RoleUrlService) {
    }

    public findAllEtatAgence(): Observable<Array<EtatAgence>> {
        return this.http.get<Array<EtatAgence>>(this.url);
    }

    get items(): Array<EtatAgence> {
        return this._items;
    }

    set items(value: Array<EtatAgence>) {
        this._items = value;
    }

    get selected(): EtatAgence {
        return this._selected;
    }

    set selected(value: EtatAgence) {
        this._selected = value;
    }

    get selectes(): Array<EtatAgence> {
        return this._selectes;
    }

    set selectes(value: Array<EtatAgence>) {
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
