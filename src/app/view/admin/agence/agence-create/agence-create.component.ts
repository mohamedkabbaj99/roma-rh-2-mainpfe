import { Component, OnInit } from '@angular/core';
import {ChefAgenceService} from '../../../../controller/service/chef-agence.service';
import {EtatAgenceService} from '../../../../controller/service/etat-agence.service';
import {VilleService} from '../../../../controller/service/ville.service';
import {AgenceService} from '../../../../controller/service/agence.service';
import {Agence} from '../../../../controller/model/agence.model';
import {ChefAgence} from '../../../../controller/model/chef-agence.model';
import {Ville} from '../../../../controller/model/ville.model';
import {EtatAgence} from '../../../../controller/model/etat-agence.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-agence-create',
  templateUrl: './agence-create.component.html',
  styleUrls: ['./agence-create.component.scss']
})
export class AgenceCreateComponent implements OnInit {

  constructor(private chefAgenceService: ChefAgenceService,
              private etatAgenceService: EtatAgenceService,
              private villeService: VilleService,
              private agenceService: AgenceService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.selected = new Agence();
    this.chefAgenceService.findAllChefAgence().subscribe(data => this.itemsChef = data);
    this.villeService.findAllVilles().subscribe(data => this.itemsVille = data);
    this.etatAgenceService.findAllEtatAgence().subscribe(data => this.itemsEtat = data);
  }



  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public save() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      this.agenceService.save().subscribe(data => {
        console.log(data);
        if (data === null){
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Agence non enregistrée',
          });
        }else{
          this.items.push({...data});
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Agence enregistrée',
            life: 3000
          });
        }
      });
      this.createDialog = false;
      this.selected = new Agence();
    }
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

  get itemsChef(): Array<ChefAgence> {
    return this.chefAgenceService.items;
  }

  set itemsChef(value: Array<ChefAgence>) {
    this.chefAgenceService.items = value;
  }
  get itemsVille(): Array<Ville> {
    return this.villeService.items;
  }

  set itemsVille(value: Array<Ville>) {
    this.villeService.items = value;
  }
  get itemsEtat(): Array<EtatAgence> {
    return this.etatAgenceService.items;
  }

  set itemsEtat(value: Array<EtatAgence>) {
    this.etatAgenceService.items = value;
  }

}
