import {Injectable} from '@angular/core';
import {DemandeConge} from '../model/demande-conge.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DemandeCongeVo} from '../model/demande-conge-vo.model';
import {Collaborateur} from '../model/collaborateur.model';
import {CollaborateurService} from './collaborateur.service';
import {ChefAgenceService} from './chef-agence.service';
import {ChefAgence} from '../model/chef-agence.model';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class DemandeCongeService {
    private url = this.role.baseUrl + 'conge/';
    private _items: Array<DemandeConge>;
    private _selected: DemandeConge;
    private _selectes: Array<DemandeConge>;
    private _demandeCongeVo: DemandeCongeVo;

    get demandeCongeVo(): DemandeCongeVo {
        if (this._demandeCongeVo == null) {
            this._demandeCongeVo = new DemandeCongeVo();
        }
        return this._demandeCongeVo;
    }

    set demandeCongeVo(value: DemandeCongeVo) {
        this._demandeCongeVo = value;
    }

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _editDialogAll: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService,
                private serviceCollaborateur: CollaborateurService,
                private serviceChefAgence: ChefAgenceService) {
    }

    public findAll(): Observable<Array<DemandeConge>> {
        return this.http.get<Array<DemandeConge>>(this.url);
    }

    public findDemandCongeOfCollaborateur(): Observable<Array<DemandeConge>> {
        return this.http.get<Array<DemandeConge>>(this.url + 'codec/' + this.serviceCollaborateur.selected.code);
    }

    public findDemandeCongeOfChefAgence(): Observable<Array<DemandeConge>> {
        return this.http.get<Array<DemandeConge>>(this.url + 'codechef/' + this.selectedChefAgence.code);
    }

    public findByCriteria(): Observable<Array<DemandeConge>> {
        return this.http.post<Array<DemandeConge>>(this.url + 'findByCriteriaConge', this.demandeCongeVo);
    }

    public save(): Observable<DemandeConge> {
        return this.http.post<DemandeConge>(this.url, this.selected);
    }

    public edit(): Observable<DemandeConge> {
        return this.http.put<DemandeConge>(this.url, this.selected);
    }

    public editAll(): Observable<DemandeConge> {
        return this.http.put<DemandeConge>(this.url + 'all', this.selected);
    }

    public deleteByCode(): Observable<number> {
        return this.http.delete<number>(this.url + 'code/' + this.selected.code);
    }

    public searchDemandeConge(): Observable<Array<DemandeConge>> {
        return this.http.post<Array<DemandeConge>>(this.url + 'search-demande-conge', this.demandeCongeVo);
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

    get items(): Array<DemandeConge> {
        return this._items;
    }

    set items(value: Array<DemandeConge>) {
        this._items = value;
    }

    get selected(): DemandeConge {
        return this._selected;
    }

    set selected(value: DemandeConge) {
        this._selected = value;
    }

    get selectes(): Array<DemandeConge> {
        return this._selectes;
    }

    set selectes(value: Array<DemandeConge>) {
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

    get selectedC(): Collaborateur {
        return this.serviceCollaborateur.selected;
    }

    get selectedChefAgence(): ChefAgence {
        return this.serviceChefAgence.selected;
    }

    set selectedChefAgence(value: ChefAgence) {
        this.serviceChefAgence.selected = value;
    }

    get selectedCollaborateur(): Collaborateur {
        return this.serviceCollaborateur.selected;
    }

    set selectedCollaborateur(value: Collaborateur) {
        this.serviceCollaborateur.selected = value;
    }

    get editDialogAll(): boolean {
        return this._editDialogAll;
    }

    set editDialogAll(value: boolean) {
        this._editDialogAll = value;
    }
}
