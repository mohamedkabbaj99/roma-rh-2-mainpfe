import { Component, OnInit } from '@angular/core';
import {ProjetSatistique} from '../admin-search-bar-projet/admin-search-bar-projet.component';
import {StatistiquesService} from '../../../../controller/service/statistiques.service';
import {TacheVo} from '../../../../controller/model/tache-vo.model';

@Component({
  selector: 'app-admin-table-statistiques-projet',
  templateUrl: './admin-table-statistiques-projet.component.html',
  styleUrls: ['./admin-table-statistiques-projet.component.scss']
})
export class AdminTableStatistiquesProjetComponent implements OnInit {

  constructor(private statistiqueClientService: StatistiquesService) { }

  ngOnInit(): void {
  }

  get items(): Map<number, Array<TacheVo>> {
    return this.statistiqueClientService.items;
  }

  get projetStatistiques(): Array<ProjetSatistique> {
    // @ts-ignore
    return this.statistiqueClientService.projetStatistiques;
  }
}
