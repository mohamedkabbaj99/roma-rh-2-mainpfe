import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TypePaiement} from '../model/type-paiement.model';
import {Observable} from 'rxjs';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class TypePaiementService {
    private url = this.role.baseUrl + 'typePaiement/';
    private _items: Array<TypePaiement>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<TypePaiement>> {
        return this.http.get<Array<TypePaiement>>(this.url);
    }

    get items(): Array<TypePaiement> {
        if (this._items == null){
            this._items = new Array<TypePaiement>();
        }
        return this._items;
    }

    set items(value: Array<TypePaiement>) {
        this._items = value;
    }
}
