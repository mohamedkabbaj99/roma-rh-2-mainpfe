import { Component, OnInit } from '@angular/core';
import {ProjetEquipeService} from '../../../../../controller/service/projet-equipe.service';
import {Projet} from '../../../../../controller/model/projet.model';
import {ProjetService} from '../../../../../controller/service/projet.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-admin-projet-view',
  templateUrl: './admin-projet-view.component.html',
  styleUrls: ['./admin-projet-view.component.scss']
})
export class AdminProjetViewComponent implements OnInit {

  constructor(private messageService: MessageService,
              private serviceItems: ProjetEquipeService,
              private service: ProjetService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.serviceItems.items = null;
    this.viewDialog = false;
  }

  get selected(): Projet {
    return this.service.selected;
  }

  set selected(value: Projet) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  findItems(selected: Projet) {
    this.serviceItems.findByProjetCode(selected.code).subscribe(
        data => {
          this.serviceItems.items = data;
        }
    );
  }


}


