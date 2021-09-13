import { Component, OnInit } from '@angular/core';
import {PeriodeService} from '../../../../../controller/service/periode.service';
import {MembreEquipeService} from '../../../../../controller/service/membre-equipe.service';
import {CategorieTacheService} from '../../../../../controller/service/categorie-tache.service';
import {CategorieTache} from '../../../../../controller/model/categorie-tache.model';
import {Periode} from '../../../../../controller/model/periode.model';
import {EtatTache} from '../../../../../controller/model/etat-tache.model';
import {TacheService} from '../../../../../controller/service/tache.service';
import {EtatTacheService} from '../../../../../controller/service/etat-tache.service';
import {GroupeTacheService} from '../../../../../controller/service/groupe-tache.service';
import {MembreEquipe} from '../../../../../controller/model/membre-equipe';
import {MessageService} from 'primeng/api';
import {Tache} from '../../../../../controller/model/tache.model';

@Component({
  selector: 'app-admin-taches-edit',
  templateUrl: './admin-taches-edit.component.html',
  styleUrls: ['./admin-taches-edit.component.scss']
})
export class AdminTachesEditComponent implements OnInit {
  constructor(private messageService: MessageService,
              private service: TacheService,
              private periodeService: PeriodeService,
              private categorieTacheService: CategorieTacheService,
              private membreEquipeService: MembreEquipeService,
              private etatTacheService: EtatTacheService,
              private groupeTacheService: GroupeTacheService) {
  }

  ngOnInit(): void {
    this.etatTacheService.findAll().subscribe(data => this.itemsEtats = data);
    this.periodeService.findAll().subscribe(data => this.itemsPeriodes = data);
  }

  public hideEditDialog() {
    this.editDialog = false;
  }

  public edit() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      if (this.selected.id) {
        this.items[this.service.findIndexById(this.selected.id)] = this.selected;
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Commande Updated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Tache();
    }
  }

  get itemsMembres(): Array<MembreEquipe> {
    return this.membreEquipeService.items;
  }

  set itemsMembres(value: Array<MembreEquipe>) {
    this.membreEquipeService.items = value;
  }

  get selected(): Tache {
    return this.service.selected;
  }

  set selected(value: Tache) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<Tache> {
    return this.service.items;
  }

  set items(value: Array<Tache>) {
    this.service.items = value;
  }

  get itemsPeriodes(): Array<Periode> {
    return this.periodeService.items;
  }

  set itemsPeriodes(value: Array<Periode>) {
    this.periodeService.items = value;
  }

  get itemsCategories(): Array<CategorieTache> {
    return this.categorieTacheService.items;
  }

  set itemsCategories(value: Array<CategorieTache>) {
    this.categorieTacheService.items = value;
  }

  get itemsEtats(): Array<EtatTache> {
    return this.etatTacheService.items;
  }

  set itemsEtats(value: Array<EtatTache>) {
    this.etatTacheService.items = value;
  }
}

