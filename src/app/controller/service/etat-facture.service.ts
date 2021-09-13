import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EtatFacture} from '../model/etat-facture.model';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class EtatFactureService {

    private url = this.role.baseUrl + 'etatFacture/';
    private _items: Array<EtatFacture>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<EtatFacture>> {
        return this.http.get<Array<EtatFacture>>(this.url);
    }

    get items(): Array<EtatFacture> {
        return this._items;
    }

    set items(value: Array<EtatFacture>) {
        this._items = value;
    }
}
