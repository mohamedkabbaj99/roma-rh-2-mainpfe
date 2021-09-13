import {Component, OnInit} from '@angular/core';

import {ClientSatistique} from '../admin-search-bar/admin-search-bar.component';
import {StatistiquesService} from '../../../../controller/service/statistiques.service';
import {TacheVo} from '../../../../controller/model/tache-vo.model';
import {FactureService} from '../../../../controller/service/facture.service';
import {Facture} from '../../../../controller/model/facture.model';


@Component({
  selector: 'app-admin-statistiques-client-table',
  templateUrl: './admin-statistiques-client-table.component.html',
  styleUrls: ['./admin-statistiques-client-table.component.scss']
})
export class AdminStatistiquesClientTableComponent implements OnInit {

  constructor(private statistiqueClientService: StatistiquesService,
              private factureService: FactureService) { }

  get items(): Map<number, Array<TacheVo>> {
    return this.statistiqueClientService.items;
  }

  get clientStatistiques(): Array<ClientSatistique> {
    return this.statistiqueClientService.clientStatistiques;
  }

  get selected(): Facture {
    return this.factureService.selected;
  }

  set selected(value: Facture) {
    this.factureService.selected = value;
  }

  get submitted(): boolean {
    return this.factureService.submitted;
  }

  set submitted(value: boolean) {
    this.factureService.submitted = value;
  }

  get createDialog(): boolean {
    return this.factureService.createDialog;
  }

  set createDialog(value: boolean) {
    this.factureService.createDialog = value;
  }

  ngOnInit(): void {
  }

  public openCreate(client: ClientSatistique) {
    this.selected = new Facture();
    this.selected.totalHeursCalcules = client.totalHeure;
    this.selected.montantCalcule = client.totalPeriode;
    this.selected.client = client.client;
    this.submitted = false;
    this.createDialog = true;
  }
}
