import { Component, OnInit } from '@angular/core';
import {ProjetEquipe} from '../../../../../controller/model/projet-equipe.model';
import {ProjetEquipeService} from '../../../../../controller/service/projet-equipe.service';
import {Projet} from '../../../../../controller/model/projet.model';
import {EquipeService} from '../../../../../controller/service/equipe.service';
import {Equipe} from '../../../../../controller/model/equipe.model';
import {ProjetService} from '../../../../../controller/service/projet.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-admin-projet-equipe-create-list',
  templateUrl: './admin-projet-equipe-create-list.component.html',
  styleUrls: ['./admin-projet-equipe-create-list.component.scss']
})
export class AdminProjetEquipeCreateListComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService,
              private projetService: ProjetService,
              private equipeService: EquipeService,
              private service: ProjetEquipeService) {
  }

  ngOnInit(): void {
    this.initCol();
    this.equipeService.findAll().subscribe(data => this.itemsEquipes = data);
  }

  private initCol() {
    this.cols = [
      {field: 'Libelle', header: 'Libelle'}
    ];
  }

  set itemsEquipes(value: Array<Equipe>) {
    this.equipeService.items = value;
  }

  get itemsEquipes(): Array<Equipe> {
    return this.equipeService.items;
  }

  get selected(): ProjetEquipe {
    return this.service.selected;
  }

  set selected(value: ProjetEquipe) {
    this.service.selected = value;
  }

  get selectedProjet(): Projet {
    return this.projetService.selected;
  }

  set selectedProjet(value: Projet) {
    this.projetService.selected = value;
  }

  get items(): Array<ProjetEquipe> {
    return this.projetService.selected.projetEquipes;
  }

  set items(value: Array<ProjetEquipe>) {
    this.projetService.selected.projetEquipes = value;
  }

  get selectes(): Array<ProjetEquipe> {
    return this.service.selectes;
  }

  set selectes(value: Array<ProjetEquipe>) {
    this.service.selectes = value;
  }

// tslint:disable-next-line:typedef
  ajouerProjetEquipe() {
    // this.selected.id = this.selectedProjet.projetEquipes.length;
    this.selectedProjet.projetEquipes.push(this.cloneProjetEquipe(this.selected));
  }

  // tslint:disable-next-line:typedef
  private cloneProjetEquipe(projetEquipe: ProjetEquipe) {
    const myClone = new ProjetEquipe();
    myClone.equipe = projetEquipe.equipe;
    return myClone;
  }

  // tslint:disable-next-line:typedef
  public delete(index: number) {
    this.selectedProjet.projetEquipes.splice(index, 1);
  }
}

