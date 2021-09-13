import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChefEquipe} from '../model/chef-equipe.model';
import {environment} from '../../../environments/environment';
import {RoleUrlService} from './security/role-url.service';

@Injectable({
    providedIn: 'root'
})
export class ChefEquipeService {
    private url = this.role.baseUrl + 'chefEquipe/';


    private _items: Array<ChefEquipe>;
    private _selected: ChefEquipe;
    private _selectes: Array<ChefEquipe>;
    private _createDialog: boolean;
    private _editDialog: boolean;
    private _viewDialog: boolean;
    private _submitted: boolean;

    constructor(private http: HttpClient, private role: RoleUrlService) {
    }

    get selectes(): Array<ChefEquipe> {
        return this._selectes;
    }

    set selectes(value: Array<ChefEquipe>) {
        this._selectes = value;
    }

    get items(): Array<ChefEquipe> {
        return this._items;
    }

    set items(value: Array<ChefEquipe>) {
        this._items = value;
    }

    get selected(): ChefEquipe {
        if (this._selected == null) {
            this._selected = new ChefEquipe();
        }
        return this._selected;
    }

    set selected(value: ChefEquipe) {
        this._selected = value;
    }
}
