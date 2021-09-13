import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Agence} from '../model/agence.model';
import {StatisticVo} from '../model/statistic-vo.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private url = this.role.baseUrl + 'dashboard/';
    private _items: Array<StatisticVo>;
    private _selected: StatisticVo;
    private _selectes: Array<StatisticVo>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;


    constructor(private  http: HttpClient, private role: RoleUrlService) {
    }


    public statisticsGlobale(): Observable<StatisticVo> {
        return this.http.post<StatisticVo>(this.url, this.selected);
    }

    public statisticsTache(): Observable<StatisticVo> {
        return this.http.post<StatisticVo>(this.url + 'taches', this.selected);
    }


    get items(): Array<StatisticVo> {
        return this._items;
    }

    set items(value: Array<StatisticVo>) {
        this._items = value;
    }

    get selected(): StatisticVo {
        if (this._selected == null) {
            this._selected = new StatisticVo();
        }
        return this._selected;
    }

    set selected(value: StatisticVo) {
        this._selected = value;
    }


    get selectes(): Array<StatisticVo> {
        return this._selectes;
    }

    set selectes(value: Array<StatisticVo>) {
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
}
