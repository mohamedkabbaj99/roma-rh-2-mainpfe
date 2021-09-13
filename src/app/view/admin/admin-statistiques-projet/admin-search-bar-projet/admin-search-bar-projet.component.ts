import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../../controller/service/client.service';
import {ProjetService} from '../../../../controller/service/projet.service';
import {LotService} from '../../../../controller/service/lot.service';
import {MembreEquipeService} from '../../../../controller/service/membre-equipe.service';
import {EquipeService} from '../../../../controller/service/equipe.service';
import {StatistiquesService} from '../../../../controller/service/statistiques.service';
import {Client} from '../../../../controller/model/client.model';
import {Projet} from '../../../../controller/model/projet.model';
import {Lot} from '../../../../controller/model/lot.model';
import {Equipe} from '../../../../controller/model/equipe.model';
import {MembreEquipe} from '../../../../controller/model/membre-equipe';
import {TacheVo} from '../../../../controller/model/tache-vo.model';
import {ChefAgenceService} from "../../../../controller/service/chef-agence.service";
import {ProjetEquipeService} from '../../../../controller/service/projet-equipe.service';
import {ProjetEquipe} from '../../../../controller/model/projet-equipe.model';


@Component({
    selector: 'app-admin-search-bar-projet',
    templateUrl: './admin-search-bar-projet.component.html',
    styleUrls: ['./admin-search-bar-projet.component.scss']
})
export class AdminSearchBarProjetComponent implements OnInit {

    get projetStatistiques(): Array<ProjetSatistique> {
        // @ts-ignore
        return this.statistiquesService.projetStatistiques;
    }

    set projetStatistiques(value: Array<ProjetSatistique>) {
        this.statistiquesService.projetStatistiques = value;
    }

    constructor(private clientService: ClientService,
                private projectService: ProjetService,
                private lotService: LotService,
                private membreEquipeService: MembreEquipeService,
                private projetEquipeService: ProjetEquipeService,
                private statistiquesService: StatistiquesService,
                private chefAgenceService: ChefAgenceService) {
    }


    ngOnInit(): void {
        this.selected.chefAgenceId = this.chefAgenceService.selected.id;
        this.clientService.findAll().subscribe(
            data => {
                this.clientService.items = data;
            }
        );
    }

    get clients(): Array<Client> {
        return this.clientService.items;
    }

    get projects(): Array<Projet> {
        return this.projectService.items;
    }

    get lots(): Array<Lot> {
        return this.lotService.items;
    }

    get projetEquipes(): Array<ProjetEquipe> {
        return this.projetEquipeService.items;
    }
    findEquipes(projetId: number) {
        this.projetEquipeService.findByProjetId(projetId).subscribe(data => this.projetEquipeService.items = data);
    }

    get membreEquipes(): Array<MembreEquipe> {
        return this.membreEquipeService.items;
    }

    get selected(): TacheVo {
        return this.statistiquesService.selected;
    }

    set selected(value: TacheVo) {
        this.statistiquesService.selected = value;
    }

    public loadProject() {
        console.log('load' + this.selected.clientId);
        this.projectService.findByClientId(this.selected.clientId).subscribe(
            data => {
                this.projectService.items = data;
            }
        );
    }

    public loadLots() {
        this.lotService.findByProjetId(this.selected.projetId).subscribe(
            data => {
                this.lotService.items = data;
            }
        );
    }

    public loadMembreEquipe() {
        this.selected.membreEquipeId = null;
        this.membreEquipeService.findByEquipeId(this.selected.equipeId).subscribe(
            data => {
                console.log(data);
                this.membreEquipeService.items = data;
                console.log(this.membreEquipeService.items);
            }
        );
    }

    public findSelectedMember(id: number): number {
        return this.membreEquipeService.findIndexById(id);
    }

    calcStatistique() {
        this.projetStatistiques = new Array<ProjetSatistique>();
        this.statistiquesService.calcStatistique().subscribe(
            data => {
                this.statistiquesService.items = this.group(data);
                console.log(this.statistiquesService.items);
                console.log('ha ana');
                console.log(this.statistiquesService.items.keys());
            }
        );
    }


    public group(list: Array<TacheVo>) {
        const map = new Map<number, Array<TacheVo>>();
        list.forEach((item) => {
            const key = item.lot.projet.client.id;
            const collection = map.get(key);
            if (!collection) {
                const projetStati = new ProjetSatistique();
                projetStati.id = key;
                projetStati.projet = item.lot.projet;
                projetStati.totalHeure += item.totalHeure;
                projetStati.totalPeriode += item.totalPeriode;
                this.projetStatistiques.push(projetStati);
                map.set(key, [item]);
            } else {
                this.projetStatistiques[this.findIndexById(key)].totalHeure += item.totalHeure;
                this.projetStatistiques[this.findIndexById(key)].totalPeriode += item.totalPeriode;
                collection.push(item);
            }
        });
        return map;
    }

    public findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.projetStatistiques.length; i++) {
            if (this.projetStatistiques[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

}

export class ProjetSatistique {
    id: number;
    projet: Projet;
    totalHeure: number;
    totalPeriode: number;

    constructor() {
        this.totalPeriode = 0;
        this.totalHeure = 0;
    }
}

