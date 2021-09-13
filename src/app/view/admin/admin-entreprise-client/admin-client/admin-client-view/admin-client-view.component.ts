import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../../../controller/service/client.service';
import {Client} from '../../../../../controller/model/client.model';
import {Entreprise} from '../../../../../controller/model/entreprise.model';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';

@Component({
  selector: 'app-admin--client-view',
  templateUrl: './admin-client-view.component.html',
  styleUrls: ['./admin-client-view.component.scss']
})
export class AdminClientViewComponent implements OnInit {

  constructor(private  clientService: ClientService,
              private serviceEntreprise: EntrepriseService) { }

  ngOnInit(): void {
  }
  get itemsEntreprise(): Array<Entreprise> {
    return this.serviceEntreprise.items;
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }


  get selected(): Client {
    return this.clientService.selected;
  }

  set selected(value: Client) {
    this.clientService.selected = value;
  }

  get viewDialog(): boolean {
    return this.clientService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.clientService.viewDialog = value;
  }


}
