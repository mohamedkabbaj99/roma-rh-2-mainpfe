import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Budget} from '../model/budget.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BudgetVo} from '../model/budget-vo.model';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class BudgetService {
    private url = this.role.baseUrl + 'budget/';
    // tslint:disable-next-line:variable-name
    private _items: Array<Budget>;
    private _selected: Budget;
    private _selectes: Array<Budget>;
    private _editDialog: boolean;

    private _createDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    private _budgetVo: BudgetVo;


    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    findAll(): Observable<Array<Budget>> {
        console.log(this.items);
        return this.http.get<Array<Budget>>(this.url);
    }

    findByEtatBudgetLibelle(): Observable<Array<Budget>> {
        return this.http.get<Array<Budget>>(this.url + 'etat-libelle/' + this.selected.etatBudget);
    }

    save(): Observable<Budget> {
        return this.http.post<Budget>(this.url, this.budgetVo);
    }

    edit(): Observable<Budget> {
        console.log(this.selected);
        return this.http.post<Budget>(this.url + 'edit/', this.selected);
    }

    search(): Observable<Array<Budget>> {
        return this.http.post<Array<Budget>>(this.url + 'search/', this.budgetVo);
    }


    get budgetVo(): BudgetVo {
        if (this._budgetVo == null) {
            this._budgetVo = new BudgetVo();
        }
        return this._budgetVo;
    }

    set budgetVo(value: BudgetVo) {
        this._budgetVo = value;
    }

    public findByCode(): Observable<Budget> {
        return this.http.get<Budget>(this.url + 'code/' + this.selected.code);
    }

    deleteByCode(): Observable<number> {
        return this.http.delete<number>(this.url + 'delete/' + this.selected.code);
    }

    deleteMultipleByCode(): Observable<number> {
        console.log(this.selectes);
        return this.http.post<number>(this.url + 'delete/', this.selectes);
    }

    get items(): Array<Budget> {
        if (this._items == null) {
            this._items = new Array<Budget>();
        }
        return this._items;
    }

    set items(value: Array<Budget>) {
        this._items = value;
    }

    get selected(): Budget {
        if (this._selected == null) {
            this._selected = new Budget();
        }
        return this._selected;
    }

    set selected(value: Budget) {
        if (this._selected == null) {
            this._selected = new Budget();
        }
        this._selected = value;
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

    get selectes(): Array<Budget> {
        if (this._selectes == null) {
            this._selectes = new Array<Budget>();
        }
        return this._selectes;
    }

    set selectes(value: Array<Budget>) {
        this._selectes = value;
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

    get createDialog(): boolean {
        return this._createDialog;
    }

    set createDialog(value: boolean) {
        this._createDialog = value;
    }
}
