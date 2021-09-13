import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TacheVo} from '../model/tache-vo.model';
import {Observable} from 'rxjs';
import {ProjetSatistique} from '../model/projet-satistique.model';
import {ClientSatistique} from '../../view/chef-agence/statistiques-client/search-bar/search-bar.component';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class StatistiquesService {

    private url = this.role.baseUrl + 'tache/';
    private _items: Map<number, Array<TacheVo>>;
    private _selected: TacheVo;
    private _clientStatistiques: Array<ClientSatistique>;
    private _projetStatistiques: Array<ProjetSatistique>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }


    get items(): Map<number, Array<TacheVo>> {
        return this._items;
    }

    set items(value: Map<number, Array<TacheVo>>) {
        this._items = value;
    }

    get selected(): TacheVo {
        if (this._selected == null) {
            this._selected = new TacheVo();
        }
        return this._selected;
    }

    set selected(value: TacheVo) {
        this._selected = value;
    }


    get clientStatistiques(): Array<ClientSatistique> {
        return this._clientStatistiques;
    }

    set clientStatistiques(value: Array<ClientSatistique>) {
        this._clientStatistiques = value;
    }


    get projetStatistiques(): Array<ProjetSatistique> {
        return this._projetStatistiques;
    }

    set projetStatistiques(value: Array<ProjetSatistique>) {
        this._projetStatistiques = value;
    }

    calcStatistique(): Observable<Array<TacheVo>> {
        return this.http.post<Array<TacheVo>>(this.url + 'calcStatistique/',
            this.selected);
    }
}
