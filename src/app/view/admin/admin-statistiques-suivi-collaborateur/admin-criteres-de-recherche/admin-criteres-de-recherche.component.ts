import {Component, OnInit} from '@angular/core';
import {CollaborateurVo} from '../../../../controller/model/collaborateur-vo.model';
import {SuiviService} from '../../../../controller/service/suivi.service';


@Component({
    selector: 'app-admin-criteres-de-recherche',
    templateUrl: './admin-criteres-de-recherche.component.html',
    styleUrls: ['./admin-criteres-de-recherche.component.scss']
})
export class AdminCriteresDeRechercheComponent implements OnInit {

    constructor(private service: SuiviService) {
    }

    ngOnInit(): void {
    }

    get selected(): CollaborateurVo {
        return this.service.selected;
    }

    get items(): Array<CollaborateurVo> {
        return this.service.items;
    }

    set items(value: Array<CollaborateurVo>) {
        this.service.items = value;
    }

    suivreCollaborateurs() {
        this.service.suivreCollaborateurs().subscribe(data => this.items = data);
    }

}
