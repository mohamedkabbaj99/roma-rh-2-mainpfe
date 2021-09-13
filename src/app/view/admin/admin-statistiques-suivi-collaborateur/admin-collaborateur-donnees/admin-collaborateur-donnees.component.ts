import {Component, OnInit} from '@angular/core';
import {SuiviService} from '../../../../controller/service/suivi.service';
import {CollaborateurVo} from '../../../../controller/model/collaborateur-vo.model';


@Component({
    selector: 'app-admin-collaborateur-donnees',
    templateUrl: './admin-collaborateur-donnees.component.html',
    styleUrls: ['./admin-collaborateur-donnees.component.scss']
})
export class AdminCollaborateurDonneesComponent implements OnInit {

    cols: any[];

    constructor(private service: SuiviService) {
    }

    ngOnInit(): void {
        this.initCol();
    }

    get selected(): CollaborateurVo {
        return this.service.selected;
    }

    get items(): Array<CollaborateurVo> {
        return this.service.items;
    }

    private initCol() {
        this.cols = [
            {field: 'nom', header: 'Collaborateur'},
            {field: 'jourOuvr', header: 'Total des Jours Ouvrable'},
            {field: 'jourTrava', header: 'Total des Jours Travaillé'},
            {field: 'jourConge', header: 'Total des Jours Congé '},
            {field: 'joueRest', header: 'Jour Restant'}
        ];
    }

}
