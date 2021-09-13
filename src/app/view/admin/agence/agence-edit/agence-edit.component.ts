import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {AgenceService} from '../../../../controller/service/agence.service';
import {ChefAgenceService} from '../../../../controller/service/chef-agence.service';
import {EtatAgenceService} from '../../../../controller/service/etat-agence.service';
import {EtatAgence} from '../../../../controller/model/etat-agence.model';
import {Agence} from '../../../../controller/model/agence.model';
import {ChefAgence} from '../../../../controller/model/chef-agence.model';

@Component({
  selector: 'app-agence-edit',
  templateUrl: './agence-edit.component.html',
  styleUrls: ['./agence-edit.component.scss']
})
export class AgenceEditComponent implements OnInit {

  constructor(private messageService: MessageService,
              private agenceService: AgenceService,
              private chefAgenceService: ChefAgenceService,
              private  etatAgenceService: EtatAgenceService) { }

  ngOnInit(): void {
    this.chefAgenceService.findAllChefAgence().subscribe(data => this.itemsChef = data);
    this.etatAgenceService.findAllEtatAgence().subscribe(data => this.itemsEtat = data);
  }


  public edit() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      if (this.selected.id) {
        this.items[this.agenceService.findIndexById(this.selected.id)] = this.selected;
        this.agenceService.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Agence mis à jour',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Agence();
    }
  }

  public hideEditDialog() {
    this.editDialog = false;
  }
  get itemsChef(): Array<ChefAgence> {
    return this.chefAgenceService.items;
  }

  set itemsChef(value: Array<ChefAgence>) {
    this.chefAgenceService.items = value;
  }
  get editDialog(): boolean {
    return this.agenceService.editDialog;
  }

  set editDialog(value: boolean) {
    this.agenceService.editDialog = value;
  }
  get selected(): Agence {
    return this.agenceService.selected;
  }

  set selected(value: Agence) {
    this.agenceService.selected = value;
  }

  get createDialog(): boolean {
    return this.agenceService.createDialog;
  }

  set createDialog(value: boolean) {
    this.agenceService.createDialog = value;
  }

  get selectes(): Array<Agence> {
    return this.agenceService.selectes;
  }

  set selectes(value: Array<Agence>) {
    this.agenceService.selectes = value;
  }
  get submitted(): boolean {
    return this.agenceService.submitted;
  }

  set submitted(value: boolean) {
    this.agenceService.submitted = value;
  }

  get items(): Array<Agence> {
    return this.agenceService.items;
  }

  set items(value: Array<Agence>) {
    this.agenceService.items = value;
  }
  get itemsEtat(): Array<EtatAgence> {
    return this.etatAgenceService.items;
  }

  set itemsEtat(value: Array<EtatAgence>) {
    this.etatAgenceService.items = value;
  }

}
