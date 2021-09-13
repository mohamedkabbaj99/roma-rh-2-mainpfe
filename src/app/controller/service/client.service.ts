import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleUrlService} from "./security/role-url.service";
import {ClientVo} from '../model/client-vo.model';


@Injectable({
    providedIn: 'root'
})
export class ClientService {
    private url = this.role.baseUrl + 'client/';
    private _items: Array<Client>;
    private _selected: Client;
    private _selectes: Array<Client>;
    private _clientVo: ClientVo;


    get clientVo(): ClientVo {
        if(this._clientVo == null){
            this._clientVo = new ClientVo();
        }
        return this._clientVo;
    }

    set clientVo(value: ClientVo) {
        this._clientVo = value;
    }

    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    public findAll(): Observable<Array<Client>> {
        return this.http.get<Array<Client>>(this.url);
    }

    public save(): Observable<Client> {
        return this.http.post<Client>(this.url, this.selected);
    }

    public edit(): Observable<Client> {
        return this.http.put<Client>(this.url, this.selected);
    }

    public findByEntrepriseCode(code: string): Observable<Array<Client>> {
        return this.http.get<Array<Client>>(this.url + 'code/' + code);
    }
    public serach(): Observable<Array<Client>>{
        return this.http.post<Array<Client>>(this.url + 'search', this.clientVo);
    }

    public deleteByCode(): Observable<number> {
        return this.http.delete<number>(this.url + 'code/' + this.selected.code);
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

    get items(): Array<Client> {
        return this._items;
    }

    set items(value: Array<Client>) {
        this._items = value;
    }

    get selected(): Client {
        return this._selected;
    }

    set selected(value: Client) {
        this._selected = value;
    }

    get selectes(): Array<Client> {
        return this._selectes;
    }

    set selectes(value: Array<Client>) {
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
}
