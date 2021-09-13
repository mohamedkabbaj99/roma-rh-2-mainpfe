import {Injectable} from '@angular/core';
import {ProjetEquipe} from '../model/projet-equipe.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleUrlService} from './security/role-url.service';
import {Projet} from '../model/projet.model';

@Injectable({
    providedIn: 'root'
})
export class ProjetEquipeService {
    get items(): Array<ProjetEquipe> {
        return this._items;
    }

    set items(value: Array<ProjetEquipe>) {
        this._items = value;
    }

    private url = this.role.baseUrl + 'projetequipe/';
    private _items: Array<ProjetEquipe>;
    private _selected: ProjetEquipe;
    private _selectes: Array<ProjetEquipe>;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    get selected(): ProjetEquipe {
        if (this._selected == null) {
            this._selected = new ProjetEquipe();
        }
        return this._selected;
    }

    set selected(value: ProjetEquipe) {
        this._selected = value;
    }

    get selectes(): Array<ProjetEquipe> {
        return this._selectes;
    }

    set selectes(value: Array<ProjetEquipe>) {
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

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<ProjetEquipe>> {
        return this.http.get<Array<ProjetEquipe>>(this.url);
    }

    public findByProjetId(id: number): Observable<Array<ProjetEquipe>> {
        return this.http.get<Array<ProjetEquipe>>(this.url + 'projet/id/' + id);
    }

    public findByProjetIdAndAgenceChefAgenceId(projetId: number, chefId: number): Observable<Array<ProjetEquipe>> {
        return this.http.get<Array<ProjetEquipe>>(this.url + 'projetId/' + projetId + '/chefAgenceId/' + chefId);
    }

    public findByProjetCode(code: string): Observable<Array<ProjetEquipe>> {
        return this.http.get<Array<ProjetEquipe>>(this.url + 'projet/code/' + code);
    }

    public deleteById(): Observable<number> {
        return this.http.delete<number>(this.url + 'id/' + this.selected.id);
    }

    public deleteMultipleByCode(): Observable<number> {
        return this.http.post<number>(this.url + 'multiples-codes', this.selectes);
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

    public save(): Observable<ProjetEquipe> {
        return this.http.post<ProjetEquipe>(this.url + 'dir/', this.selected);
    }

    public findByProjetClientIdAndEquipeResponsableCode(clientId: number, code: string): Observable<Array<ProjetEquipe>> {
        console.log('lien -->' + this.url + 'clientId/' + clientId + '/codeChefEquipe/' + code);
        return this.http.get<Array<ProjetEquipe>>(this.url + 'clientId/' + clientId + '/codeChefEquipe/' + code);
    }

    public findByEquipeResponsableCode(code: string): Observable<Array<ProjetEquipe>> {
        console.log('lien -->' + this.url + 'codeChefEquipe/' + code);
        return this.http.get<Array<ProjetEquipe>>(this.url + 'codeChefEquipe/' + code);
    }

    public findProjetsByChefEquipeId(chefEquipeId: number): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'chefEquipeId/' + chefEquipeId);
        return this.http.get<Array<Projet>>(this.url + 'chefEquipeId/' + chefEquipeId);
    }

    public findProjetsByClientIdAndChefEquipeId(clientId: number, chefEquipeId: number): Observable<Array<Projet>> {
        console.log('lien -->' + this.url + 'clientId/' + clientId + '/chefEquipeId/' + chefEquipeId);
        return this.http.get<Array<Projet>>(this.url + 'clientId/' + clientId + '/chefEquipeId/' + chefEquipeId);
    }
}
