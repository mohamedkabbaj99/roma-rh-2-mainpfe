import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Etatprojet} from '../model/etatprojet.model';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class EtatProjetService {

    private url = this.role.baseUrl + 'etatprojet/';
    private _selected: Etatprojet;
    private _items: Array<Etatprojet>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<Etatprojet>> {
        return this.http.get<Array<Etatprojet>>(this.url);
    }

    get items(): Array<Etatprojet> {
        return this._items;
    }

    set items(value: Array<Etatprojet>) {
        this._items = value;
    }

    get selected(): Etatprojet {
        return this._selected;
    }

    set selected(value: Etatprojet) {
        this._selected = value;
    }
}
