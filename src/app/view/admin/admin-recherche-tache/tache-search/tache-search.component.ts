import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../controller/service/client.service';
import {ProjetService} from '../../../../controller/service/projet.service';
import {LotService} from '../../../../controller/service/lot.service';
import {TacheService} from '../../../../controller/service/tache.service';
import {MembreEquipeService} from '../../../../controller/service/membre-equipe.service';
import {EquipeService} from '../../../../controller/service/equipe.service';
import {Client} from '../../../../controller/model/client.model';
import {Projet} from '../../../../controller/model/projet.model';
import {Lot} from '../../../../controller/model/lot.model';
import {Equipe} from '../../../../controller/model/equipe.model';
import {MembreEquipe} from '../../../../controller/model/membre-equipe';
import {TacheVo} from '../../../../controller/model/tache-vo.model';

@Component({
  selector: 'app-tache-search',
  templateUrl: './tache-search.component.html',
  styleUrls: ['./tache-search.component.scss']
})
export class TacheSearchComponent implements OnInit {

  constructor(private clientService: ClientService,
              private projectService: ProjetService,
              private lotService: LotService,
              private tacheService: TacheService,
              private membreEquipeService: MembreEquipeService,
              private equipeService: EquipeService) {
  }


  ngOnInit(): void {
    this.clientService.findAll().subscribe(
        data => {
          this.clientService.items = data;
        }
    );
    this.equipeService.findAll().subscribe(
        data => {
          this.equipeService.items = data;
        }
    );
    this.projectService.findAll().subscribe(
        data => {
            this.projectService.items = data;
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

  get equipes(): Array<Equipe> {
    return this.equipeService.items;
  }

  get membreEquipes(): Array<MembreEquipe> {
    return this.membreEquipeService.items;
  }

  get selected(): TacheVo {
    return this.tacheService.tacheVo;
  }

  set selected(value: TacheVo) {
    this.tacheService.tacheVo = value;
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

  search() {
    this.tacheService.search().subscribe(
        data => {
          console.log(this.tacheService.items);
          this.tacheService.items = data;
          console.log(data);
        }
    );
  }

}
