import {Injectable} from '@angular/core';
import {Paiement} from '../model/paiement.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class PaiementService {

    private url = this.role.baseUrl + 'paiement/';
    private _items: Array<Paiement>;
    private _selected: Paiement;
    private _selectes: Array<Paiement>;
    private _totalNonPaye: number;

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<Paiement>> {
        return this.http.get<Array<Paiement>>(this.url);
    }

    public save(): Observable<Paiement> {
        return this.http.post<Paiement>(this.url, this.selected);
    }

    public edit(): Observable<Paiement> {
        return this.http.put<Paiement>(this.url, this.selected);
    }

    public findByFactureCode(code: string): Observable<Array<Paiement>> {
        return this.http.get<Array<Paiement>>(this.url + 'codeFacture/' + code);
    }

    public deleteByReference(): Observable<number> {
        return this.http.delete<number>(this.url + 'reference/' + this.selected.reference);
    }

    public deleteMultipleByCode(): Observable<number> {
        return this.http.post<number>(this.url + 'delete-multiple-by-code', this.selectes);
    }

    public calcTotalNonPaye(): Observable<number> {
        return this.http.post<number>(this.url + 'calcTotalNonPaye', this.selected);
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

    get items(): Array<Paiement> {
        return this._items;
    }

    set items(value: Array<Paiement>) {
        this._items = value;
    }

    get selected(): Paiement {
        if (this._selected == null) {
            this._selected = new Paiement();
        }
        return this._selected;
    }

    set selected(value: Paiement) {
        this._selected = value;
    }

    get selectes(): Array<Paiement> {
        return this._selectes;
    }

    set selectes(value: Array<Paiement>) {
        this._selectes = value;
    }

    get totalNonPaye(): number {
        return this._totalNonPaye;
    }

    set totalNonPaye(value: number) {
        this._totalNonPaye = value;
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
}
