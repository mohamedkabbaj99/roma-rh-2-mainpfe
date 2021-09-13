import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Equipe} from '../model/equipe.model';

import {EquipeVO} from '../model/equipe-vo.model';
import {ChefAgenceService} from './chef-agence.service';
import {RoleUrlService} from './security/role-url.service';
import {EtatEquipeService} from './etat-equipe.service';

@Injectable({
    providedIn: 'root'
})
export class EquipeService {
    private url = this.role.baseUrl + 'equipe/';
    private _items: Array<Equipe>;
    private _selected: Equipe;
    private _selectes: Array<Equipe>;
    private _equipeVO: EquipeVO;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService,
                private chefAgenceService: ChefAgenceService) {
    }

    public findAll(): Observable<Array<Equipe>> {
        return this.http.get<Array<Equipe>>(this.url);
    }

    public findByCode(): Observable<Equipe> {
        return this.http.get<Equipe>(this.url + 'code/' + this.selected.code);
    }

    public findByResponsableCode(code: string): Observable<Array<Equipe>> {
        return this.http.get<Array<Equipe>> (this.url + 'collaborateur/code/' + code);
    }

    public findByResponsable(id: number): Observable<Array<Equipe>> {
        return this.http.get<Array<Equipe>> (this.url + 'collaborateur/id/' + id);
    }

    public findByEtatEquipe(): Observable<Array<Equipe>> {
        return this.http.get<Array<Equipe>>(this.url + 'etatEquipeCode/' + this.selected.etatEquipe.code);
    }
    public findByAgenceChefgence(): Observable<Array<Equipe>>{
        console.log(this.url + 'agenceChefAgenceCode/' + this.chefAgenceService.selected.code);
        return this.http.get<Array<Equipe>>(this.url + 'agenceChefAgenceCode/' + this.chefAgenceService.selected.code);
    }
    findEquipesByEtatId(etatEquipeId: number): Observable<Array<Equipe>>{
        return this.http.get<Array<Equipe>>(this.url + 'etatEquipeId/' + etatEquipeId );
    }
    findByCollab(code: string): Observable<Array<Equipe>>{
        return this.http.get<Array<Equipe>>(this.url + 'findByCollab/' + code);
    }

    public save(): Observable<Equipe> {
        return this.http.post<Equipe>(this.url, this.selected);
    }

    public search(): Observable<Array<Equipe>> {
        return this.http.post<Array<Equipe>>(this.url + 'search', this.equipeVO);
    }

    public edit(): Observable<Equipe> {
        return this.http.put<Equipe>(this.url + 'update' , this.selected);
    }

    public deleteById(): Observable<number> {
        return this.http.delete<number>(this.url + 'id/' + this.selected.id);
    }

    public deleteByCode(): Observable<number> {
        return this.http.delete<number>(this.url + 'code/' + this.selected.code);
    }

    public deleteMultipleByCode(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-code', this.selectes);
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

    public deleteMultipleIndexById() {
        for (const item of this.selectes) {
            this.deleteIndexById(item.id);
        }
    }

    get items(): Array<Equipe> {
        return this._items;
    }

    set items(value: Array<Equipe>) {
        this._items = value;
    }

    get selected(): Equipe {
        if (this._selected == null){
            this._selected = new Equipe();
        }
        return this._selected;
    }

    set selected(value: Equipe) {
        this._selected = value;
    }

    get selectes(): Array<Equipe> {
        return this._selectes;
    }

    set selectes(value: Array<Equipe>) {
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

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get viewDialog(): boolean {
        return this._viewDialog;
    }

    set viewDialog(value: boolean) {
        this._viewDialog = value;
    }

    get equipeVO(): EquipeVO {
        if (this._equipeVO == null) {
            this._equipeVO = new EquipeVO();
        }
        return this._equipeVO;
    }

    set equipeVO(value: EquipeVO) {
        this._equipeVO = value;
    }

}
