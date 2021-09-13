import {Injectable} from '@angular/core';
import {Projet} from '../model/projet.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjetVo} from '../model/projet-vo.model';
import {RoleUrlService} from './security/role-url.service';


@Injectable({
    providedIn: 'root'
})
export class ProjetService {
    private url = this.role.baseUrl + 'projet/';
    private _items: Array<Projet>;
    private _selected: Projet;
    private _selectes: Array<Projet>;
    private _projetVo: ProjetVo;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    get selected(): Projet {
        if (this._selected == null) {
            this._selected = new Projet();
        }
        return this._selected;
    }

    set selected(value: Projet) {
        this._selected = value;
    }

    get selectes(): Array<Projet> {
        return this._selectes;
    }

    set selectes(value: Array<Projet>) {
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

    get items(): Array<Projet> {
        return this._items;
    }

    set items(value: Array<Projet>) {
        this._items = value;
    }

    get projetVo(): ProjetVo {
        if (this._projetVo == null) {
            this._projetVo = new ProjetVo();
        }
        return this._projetVo;
    }

    set projetVo(value: ProjetVo) {
        this._projetVo = value;
    }

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public search(): Observable<Array<Projet>> {
        return this.http.post<Array<Projet>>(this.url + 'search', this.projetVo);
    }

    public findAll(): Observable<Array<Projet>> {
        return this.http.get<Array<Projet>>(this.url);
    }

    public save(): Observable<Projet> {
        return this.http.post<Projet>(this.url, this.selected);
    }

    public edit(): Observable<Projet> {
        return this.http.put<Projet>(this.url, this.selected);
    }

    public findByClientId(clientId: number): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'client/id/' + clientId);
        return this.http.get<Array<Projet>>(this.url + 'client/id/' + clientId);
    }


    public findByClientIdAndAgenceChefAgenceCode(clientId: number, code: string): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'clientId/' + clientId + '/codeChefAgence/' + code);
        return this.http.get<Array<Projet>>(this.url + 'clientId/' + clientId + '/codeChefAgence/' + code);
    }

    public findByClientIdAndResponsableCode(clientId: number, code: string): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'clientId/' + clientId + '/codeResponsable/' + code);
        return this.http.get<Array<Projet>>(this.url + 'clientId/' + clientId + '/codeResponsable/' + code);
    }

    public findByAgenceChefAgenceId(chefAgenceId: number): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'chefAgenceId/' + chefAgenceId);
        return this.http.get<Array<Projet>>(this.url + 'chefAgenceId/' + chefAgenceId);
    }

    public findByAgenceChefAgenceCode(agenceCode: string): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'agence/chefAgence/code/' + agenceCode);
        return this.http.get<Array<Projet>>(this.url + 'agence/chefAgence/code/' + agenceCode);
    }

    public findByResponsableCode(code: string): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'responsable/code/' + code);
        return this.http.get<Array<Projet>>(this.url + 'responsable/code/' + code);
    }

    public deleteByCode(): Observable<number> {
        return this.http.delete<number>(this.url + 'code/' + this.selected.code);
    }

    public deleteMultipleByCode(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-code', this.selectes);
    }

    public deleteMultipleIndexById() {
        for (const item of this.selectes) {
            this.deleteIndexById(item.id);
        }
    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    public deleteIndexById(id: number) {
        this.items.splice(this.findIndexById(id), 1);
    }
}
