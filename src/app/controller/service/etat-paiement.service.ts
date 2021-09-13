import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EtatPaiement} from '../model/etat-paiement.model';
import {environment} from '../../../environments/environment';
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class EtatPaiementService {
    private url = this.role.baseUrl + 'etatPaiement/';
    private _items: Array<EtatPaiement>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<EtatPaiement>> {
        return this.http.get<Array<EtatPaiement>>(this.url);
    }

    get items(): Array<EtatPaiement> {
        return this._items;
    }

    set items(value: Array<EtatPaiement>) {
        this._items = value;
    }
}
