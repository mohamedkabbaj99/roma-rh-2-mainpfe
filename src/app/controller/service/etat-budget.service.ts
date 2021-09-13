import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EtatBudget} from "../model/etat-budget.model";
import {RoleUrlService} from "./security/role-url.service";

@Injectable({
    providedIn: 'root'
})
export class EtatBudgetService {
    private url = this.role.baseUrl + 'etatBudget/';
    private _items: Array<EtatBudget>;
    private _selected: EtatBudget;
    private _selectes: Array<EtatBudget>;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    findAll(): Observable<Array<EtatBudget>> {
        return this.http.get<Array<EtatBudget>>(this.url);
    }

    get selected(): EtatBudget {
        if (this._selected == null) {
            this._selected = new EtatBudget();
        }
        return this._selected;
    }

    set selected(value: EtatBudget) {
        this._selected = value;
    }

    get items(): Array<EtatBudget> {
        return this._items;
    }

    set items(value: Array<EtatBudget>) {
        this._items = value;
    }

    get selectes(): Array<EtatBudget> {
        return this._selectes;
    }

    set selectes(value: Array<EtatBudget>) {
        this._selectes = value;
    }
}
