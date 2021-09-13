import { Component, OnInit } from '@angular/core';
import {Projet} from '../../../../../controller/model/projet.model';
import {EquipeService} from '../../../../../controller/service/equipe.service';
import {ClientService} from '../../../../../controller/service/client.service';
import {Etatprojet} from '../../../../../controller/model/etatprojet.model';
import {Equipe} from '../../../../../controller/model/equipe.model';
import {CollaborateurService} from '../../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../../controller/model/collaborateur.model';
import {Client} from '../../../../../controller/model/client.model';
import {ProjetService} from '../../../../../controller/service/projet.service';
import {MessageService} from 'primeng/api';
import {EtatProjetService} from '../../../../../controller/service/etat-projet.service';
import {AgenceService} from '../../../../../controller/service/agence.service';
import {Agence} from '../../../../../controller/model/agence.model';

@Component({
  selector: 'app-admin-projet-edit',
  templateUrl: './admin-projet-edit.component.html',
  styleUrls: ['./admin-projet-edit.component.scss']
})
export class AdminProjetEditComponent implements OnInit {

  constructor(private messageService: MessageService,
              private projetService: ProjetService,
              private etatProjetService: EtatProjetService,
              private collaborateurService: CollaborateurService,
              private agenceService: AgenceService,
              private clientService: ClientService,
              private service: ProjetService) {
  }

  ngOnInit(): void {
    this.service.selected = null;
    this.clientService.findAll().subscribe(data => this.itemsClients = data);
    this.agenceService.findAllAgences().subscribe(data => this.itemsAgences = data);
    this.etatProjetService.findAll().subscribe(data => this.itemsEtatProjet = data);
    this.collaborateurService.findAll().subscribe(data => this.itemsCollaborateurs = data);
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
            detail: 'Projet Updated',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Projet();
    }
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
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
  get itemsAgences(): Array<Agence> {
    return this.agenceService.items;
  }

  set itemsAgences(value: Array<Agence>) {
    this.agenceService.items = value;
  }

  get itemsEtatProjet(): Array<Etatprojet> {
    return this.etatProjetService.items;
  }

  set itemsEtatProjet(value: Array<Etatprojet>) {
    this.etatProjetService.items = value;
  }


}
