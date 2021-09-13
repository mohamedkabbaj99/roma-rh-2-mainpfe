import {Injectable} from '@angular/core';
import {EtatTache} from '../model/etat-tache.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class EtatTacheService {

    private url = this.role.baseUrl + 'etatTache/';
    private _items: Array<EtatTache>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<EtatTache>> {
        return this.http.get<Array<EtatTache>>(this.url);
    }

    get items(): Array<EtatTache> {
        return this._items;
    }

    set items(value: Array<EtatTache>) {
        this._items = value;
    }
}
