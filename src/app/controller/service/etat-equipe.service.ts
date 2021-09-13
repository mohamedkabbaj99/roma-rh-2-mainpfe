import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {EtatEquipe} from '../model/etat-equipe.model';
import {Observable} from 'rxjs';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class EtatEquipeService {
    private url = this.role.baseUrl + 'etatequipe/';
    private _items: Array<EtatEquipe>;
    private _selected: EtatEquipe;
    private _selectes: Array<EtatEquipe>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<EtatEquipe>> {
        return this.http.get<Array<EtatEquipe>>(this.url);
    }

    get selectes(): Array<EtatEquipe> {
        return this._selectes;
    }

    set selectes(value: Array<EtatEquipe>) {
        this._selectes = value;
    }

    get items(): Array<EtatEquipe> {
        if (this._items == null){
            this._items = new Array<EtatEquipe>();
        }
        return this._items;
    }

    set items(value: Array<EtatEquipe>) {
        this._items = value;
    }

    get selected(): EtatEquipe {
        return this._selected;
    }

    set selected(value: EtatEquipe) {
        this._selected = value;
    }
}
