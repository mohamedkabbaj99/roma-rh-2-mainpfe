import { Component, OnInit } from '@angular/core';
import {ProjetEquipe} from '../../../../../controller/model/projet-equipe.model';
import {ProjetEquipeService} from '../../../../../controller/service/projet-equipe.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-admin-projet-equipe-view-list',
  templateUrl: './admin-projet-equipe-view-list.component.html',
  styleUrls: ['./admin-projet-equipe-view-list.component.scss']
})
export class AdminProjetEquipeViewListComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private service: ProjetEquipeService) {
  }

  ngOnInit(): void {
    this.initCol();
  }

  private initCol() {
    this.cols = [
      {field: 'libelle', header: 'Libelle'}
    ];
  }

  get selected(): ProjetEquipe {
    return this.service.selected;
  }

  set selected(value: ProjetEquipe) {
    this.service.selected = value;
  }

  get items(): Array<ProjetEquipe> {
    return this.service.items;
  }

  set items(value: Array<ProjetEquipe>) {
    this.service.items = value;
  }


  get selectes(): Array<ProjetEquipe> {
    return this.service.selectes;
  }

  set selectes(value: Array<ProjetEquipe>) {
    this.service.selectes = value;
  }

}
