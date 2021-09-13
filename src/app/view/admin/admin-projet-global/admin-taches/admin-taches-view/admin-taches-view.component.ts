import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../../../controller/service/tache.service';
import {MessageService} from 'primeng/api';
import {Tache} from '../../../../../controller/model/tache.model';

@Component({
  selector: 'app-admin-taches-view',
  templateUrl: './admin-taches-view.component.html',
  styleUrls: ['./admin-taches-view.component.scss']
})
export class AdminTachesViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: TacheService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Tache {
    return this.service.selected;
  }

  set selected(value: Tache) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}

