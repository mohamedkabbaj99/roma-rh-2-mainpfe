import {Component, OnInit} from '@angular/core';
import {Lot} from '../../../../../controller/model/lot.model';
import {EtatLotService} from '../../../../../controller/service/etat-lot.service';
import {EtatLot} from '../../../../../controller/model/etat-lot.model';
import {LotService} from '../../../../../controller/service/lot.service';
import {CollaborateurService} from '../../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../../controller/model/collaborateur.model';
import {ProjetService} from '../../../../../controller/service/projet.service';
import {MessageService} from 'primeng/api';
import {GroupeTacheService} from '../../../../../controller/service/groupe-tache.service';

@Component({
    selector: 'app-admin-lot-create',
    templateUrl: './admin-lot-create.component.html',
    styleUrls: ['./admin-lot-create.component.scss']
})
export class AdminLotCreateComponent implements OnInit {

    constructor(private messageService: MessageService,
                private service: LotService,
                private collaborateurService: CollaborateurService,
                private etatLotService: EtatLotService,
                private groupeTacheService: GroupeTacheService,
                private projetService: ProjetService) {
    }

    checked: boolean;

    ngOnInit(): void {
        this.collaborateurService.findAll().subscribe(data => this.itemsCollaborateurs = data);
        this.etatLotService.findAll().subscribe(data => this.itemsetatlots = data);
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            this.selected.projet = this.projetService.selected;
            this.groupeTacheService.selected.code = this.selected.code;
            this.groupeTacheService.selected.libelle = this.selected.libelle;
            this.service.save().subscribe(data => {
                console.log('ha data' + data);
                this.items.push({...data});
                if (this.checked === true) {
                    this.groupeTacheService.selected.lot = data;
                    this.groupeTacheService.save().subscribe(dat => this.groupeTacheService.items.push({...dat}));
                }
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Lot Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Lot();
        }
    }

    get selected(): Lot {
        return this.service.selected;
    }

    set selected(value: Lot) {
        this.service.selected = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get submitted(): boolean {
        return this.service.submitted;
    }

    set submitted(value: boolean) {
        this.service.submitted = value;
    }

    get items(): Array<Lot> {
        return this.service.items;
    }

    set items(value: Array<Lot>) {
        this.service.items = value;
    }

    get itemsCollaborateurs(): Array<Collaborateur> {
        return this.collaborateurService.items;
    }

    set itemsCollaborateurs(value: Array<Collaborateur>) {
        this.collaborateurService.items = value;
    }

    get itemsetatlots(): Array<EtatLot> {
        return this.etatLotService.items;
    }

    set itemsetatlots(value: Array<EtatLot>) {
        this.etatLotService.items = value;
    }

}
