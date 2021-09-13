import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {ClientService} from '../../../../../controller/service/client.service';
import {Client} from '../../../../../controller/model/client.model';
import {Entreprise} from '../../../../../controller/model/entreprise.model';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';

@Component({
  selector: 'app-admin-client-create',
  templateUrl: './admin-client-create.component.html',
  styleUrls: ['./admin-client-create.component.scss']
})
export class AdminClientCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private serviceClient: ClientService,
              private serviceEntreprise: EntrepriseService) { }

  ngOnInit(): void {
    this.serviceEntreprise.findAll().subscribe(data => this.itemsEntreprise = data);

  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    console.log(this.selected);
    this.submitted = true;
    if (this.selected.code.trim()) {
      this.serviceClient.save().subscribe(data => {
        if(data === null){
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Client non enregistré',
          });
        }else{
          this.items.push({...data});
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Client enregistré',
            life: 3000
          });
        }
      });
      this.createDialog = false;
      this.selected = new Client();
    }
  }
  get selected(): Client {
    return this.serviceClient.selected;
  }

  set selected(value: Client) {
    this.serviceClient.selected = value;
  }

  /*get selectedEntreprise(): Entreprise {
    return this.serviceEntreprise.selected;
  }

  set selectedEntreprise(value: Entreprise) {
    this.serviceEntreprise.selected = value;
  }*/

  get createDialog(): boolean {
    return this.serviceClient.createDialog;
  }

  set createDialog(value: boolean) {
    this.serviceClient.createDialog = value;
  }

  get submitted(): boolean {
    return this.serviceClient.submitted;
  }

  set submitted(value: boolean) {
    this.serviceClient.submitted = value;
  }

  get items(): Array<Client> {
    return this.serviceClient.items;
  }
  set items(value: Array<Client>) {
    this.serviceClient.items = value;
  }

  set itemsEntreprise(value: Array<Entreprise>) {
    this.serviceEntreprise.items = value;
  }
  get itemsEntreprise(): Array<Entreprise> {
    return this.serviceEntreprise.items;
  }



}
