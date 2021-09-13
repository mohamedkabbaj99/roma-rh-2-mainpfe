import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {TacheService} from '../../../../controller/service/tache.service';
import {PeriodeService} from '../../../../controller/service/periode.service';
import {CategorieTacheService} from '../../../../controller/service/categorie-tache.service';
import {EtatTacheService} from '../../../../controller/service/etat-tache.service';
import {MembreEquipeService} from '../../../../controller/service/membre-equipe.service';
import {Tache} from '../../../../controller/model/tache.model';
import {Periode} from '../../../../controller/model/periode.model';
import {CategorieTache} from '../../../../controller/model/categorie-tache.model';
import {EtatTache} from '../../../../controller/model/etat-tache.model';
import {MembreEquipe} from '../../../../controller/model/membre-equipe';
import {GroupeTache} from '../../../../controller/model/groupe-tache.model';
import {GroupeTacheService} from '../../../../controller/service/groupe-tache.service';

@Component({
  selector: 'app-edite-tache',
  templateUrl: './edite-tache.component.html',
  styleUrls: ['./edite-tache.component.scss']
})
export class EditeTacheComponent implements OnInit {
  constructor(private messageService: MessageService,
              private service: TacheService,
              private periodeService: PeriodeService,
              private categorieTacheService: CategorieTacheService,
              private etatTacheService: EtatTacheService,
              private membreEquipeService: MembreEquipeService,
              private groupeTacheService: GroupeTacheService) {
  }

  ngOnInit(): void {
    this.periodeService.findAll().subscribe(data => this.itemsPeriodes = data);
    this.membreEquipeService.findAll().subscribe(data => this.membreEquipeService.items = data);
    this.groupeTacheService.findAll().subscribe(data => this.groupeTacheService.items = data);
    this.categorieTacheService.findAll().subscribe(data => this.categorieTacheService.items = data);
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
            detail: 'Tache éditée',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Tache();
    }
  }

  selectMembre() {
    this.selected.membreEquipe = this.itemsMembres[this.findSelectedMember(
        this.selected.membreEquipe.id)];
    console.log(this.selected);
  }

  public findSelectedMember(id: number): number {
    return this.membreEquipeService.findIndexById(id);
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
  get groupesTache(): Array<GroupeTache>{
    return this.groupeTacheService.items;
  }
  set groupesTache(value: Array<GroupeTache>) {
    this.groupeTacheService.items = value;
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

  get itemsMembres(): Array<MembreEquipe> {
    return this.membreEquipeService.items;
  }


}
