import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../controller/model/entreprise.model';

@Component({
  selector: 'app-admin-entreprise-view',
  templateUrl: './admin-entreprise-view.component.html',
  styleUrls: ['./admin-entreprise-view.component.scss']
})
export class AdminEntrepriseViewComponent implements OnInit {

  constructor(private messageService: MessageService, private serviceEntreprise: EntrepriseService) { }

  ngOnInit(): void {
  }


  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Entreprise {
    return this.serviceEntreprise.selected;
  }

  set selected(value: Entreprise) {
    this.serviceEntreprise.selected = value;
  }

  get viewDialog(): boolean {
    return this.serviceEntreprise.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.serviceEntreprise.viewDialog = value;
  }
}
