import {Injectable} from '@angular/core';
import {CollaborateurVo} from '../model/collaborateur-vo.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class SuiviService {

    private url = this.role.baseUrl + 'tache/';


    private _selected: CollaborateurVo;
    private _items: Array<CollaborateurVo>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    get selected(): CollaborateurVo {
        if (this._selected == null) {
            this._selected = new CollaborateurVo();
        }
        return this._selected;
    }

    set selected(value: CollaborateurVo) {
        this._selected = value;
    }

    get items(): Array<CollaborateurVo> {
        if (this._items == null) {
            this._items = new Array<CollaborateurVo>();
        }
        return this._items;
    }

    set items(value: Array<CollaborateurVo>) {
        this._items = value;
    }

    public suivreCollaborateurs(): Observable<Array<CollaborateurVo>> {
        console.log(this.url + 'suivreCollaborateurs');
        return this.http.post<Array<CollaborateurVo>>(this.url + 'suivreCollaborateurs', this.selected);
    }

}
