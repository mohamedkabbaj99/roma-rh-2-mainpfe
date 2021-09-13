import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EtatGroupeTache} from '../model/etat-groupe-tache.model';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class EtatGroupeTacheService {
    private url = this.role.baseUrl + 'etatGroupeTache/';
    private _items: Array<EtatGroupeTache>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<EtatGroupeTache>> {
        return this.http.get<Array<EtatGroupeTache>>(this.url);
    }

    get items(): Array<EtatGroupeTache> {
        return this._items;
    }

    set items(value: Array<EtatGroupeTache>) {
        this._items = value;
    }
}
