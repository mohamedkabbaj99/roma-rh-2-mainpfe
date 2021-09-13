import {Component, OnInit} from '@angular/core';
import {Projet} from '../../../../../controller/model/projet.model';
import {ClientService} from '../../../../../controller/service/client.service';
import {Etatprojet} from '../../../../../controller/model/etatprojet.model';
import {CollaborateurService} from '../../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../../controller/model/collaborateur.model';
import {Client} from '../../../../../controller/model/client.model';
import {ProjetService} from '../../../../../controller/service/projet.service';
import {MessageService} from 'primeng/api';
import {EtatProjetService} from '../../../../../controller/service/etat-projet.service';
import {AgenceService} from '../../../../../controller/service/agence.service';
import {Agence} from '../../../../../controller/model/agence.model';
import {LotService} from '../../../../../controller/service/lot.service';

@Component({
    selector: 'app-admin-projet-create',
    templateUrl: './admin-projet-create.component.html',
    styleUrls: ['./admin-projet-create.component.scss']
})
export class AdminProjetCreateComponent implements OnInit {

    constructor(private messageService: MessageService,
                private projetService: ProjetService,
                private etatProjetService: EtatProjetService,
                private collaborateurService: CollaborateurService,
                private clientService: ClientService,
                private agenceService: AgenceService,
                private lotService: LotService,
                private service: ProjetService) {
    }

    get selected(): Projet {
        return this.service.selected;
    }

    set selected(value: Projet) {
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

    get items(): Array<Projet> {
        return this.service.items;
    }

    set items(value: Array<Projet>) {
        this.service.items = value;
    }

    get itemsCollaborateurs(): Array<Collaborateur> {
        return this.collaborateurService.items;
    }

    set itemsCollaborateurs(value: Array<Collaborateur>) {
        this.collaborateurService.items = value;
    }

    get itemsClients(): Array<Client> {
        return this.clientService.items;
    }

    set itemsClients(value: Array<Client>) {
        this.clientService.items = value;
    }

    get itemsEtatProjet(): Array<Etatprojet> {
        return this.etatProjetService.items;
    }

    set itemsEtatProjet(value: Array<Etatprojet>) {
        this.etatProjetService.items = value;
    }

    get itemsAgences(): Array<Agence> {
        return this.agenceService.items;
    }

    set itemsAgences(value: Array<Agence>) {
        this.agenceService.items = value;
    }

    get lotsplit(): string {
        return this._lotsplit;
    }

    set lotsplit(value: string) {
        this._lotsplit = value;
    }

    // tslint:disable-next-line:variable-name
    _lotsplit: string;
    // tslint:disable-next-line:variable-name
    private _lotsplits: Array<string>;

    get lotsplits(): Array<string> {
        if (this._lotsplits == null) {
            this._lotsplits = new Array<string>();
        }
        return this._lotsplits;
    }

    set lotsplits(value: Array<string>) {
        this._lotsplits = value;
    }

    ngOnInit(): void {
        this.service.selected = null;
        this.agenceService.findAllAgences().subscribe(data => this.itemsAgences = data);
        this.clientService.findAll().subscribe(data => this.itemsClients = data);
        this.etatProjetService.findAll().subscribe(data => this.itemsEtatProjet = data);
        this.collaborateurService.findAll().subscribe(data => this.itemsCollaborateurs = data);
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }

    public save() {
        this.submitted = true;
        if (this.selected.code.trim()) {
            this.service.save().subscribe(data => {
                this.items.push({...data});
                if (this.lotsplit != null) {
                    this.lotsplits = this.lotsplit.split(',', 3);
                    // tslint:disable-next-line:prefer-for-of
                    for (let i = 0; i < this.lotsplits.length; i++) {
                        this.lotService.selected.code = this.lotsplits[i];
                        this.lotService.selected.libelle = this.lotsplits[i];
                        this.lotService.selected.projet = data;
                        this.lotService.save().subscribe(dat => this.lotService.items.push({...dat}));
                    }
                }
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Projet Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new Projet();
        }
    }
}
