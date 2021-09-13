import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../../controller/service/client.service';
import {MessageService} from 'primeng/api';
import {Client} from '../../../../../controller/model/client.model';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../controller/model/entreprise.model';

@Component({
  selector: 'app-admin-client-edit',
  templateUrl: './admin-client-edit.component.html',
  styleUrls: ['./admin-client-edit.component.scss']
})
export class AdminClientEditComponent implements OnInit {

  constructor(private clientService: ClientService,
              private messageService: MessageService,
              private serviceEntreprise: EntrepriseService) {
  }

  ngOnInit(): void {
    this.serviceEntreprise.findAll().subscribe(data => this.itemsEntreprise = data);

  }


  public edit() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      if (this.selected.id) {
        this.items[this.clientService.findIndexById(this.selected.id)] = this.selected;
        this.clientService.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Client mis à jour',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Client();
    }
  }

  public hideEditDialog() {
    this.editDialog = false;
  }

  get selected(): Client {
    return this.clientService.selected;
  }

  set selected(value: Client) {
    this.clientService.selected = value;
  }

  get editDialog(): boolean {
    return this.clientService.editDialog;
  }

  set editDialog(value: boolean) {
    this.clientService.editDialog = value;
  }

  get submitted(): boolean {
    return this.clientService.submitted;
  }

  set submitted(value: boolean) {
    this.clientService.submitted = value;
  }

  get items(): Array<Client> {
    return this.clientService.items;
  }

  set items(value: Array<Client>) {
    this.clientService.items = value;
  }
  get itemsEntreprise(): Array<Entreprise> {
    return this.serviceEntreprise.items;
  }

  set itemsEntreprise(value: Array<Entreprise>) {
    this.serviceEntreprise.items = value;
  }
}
