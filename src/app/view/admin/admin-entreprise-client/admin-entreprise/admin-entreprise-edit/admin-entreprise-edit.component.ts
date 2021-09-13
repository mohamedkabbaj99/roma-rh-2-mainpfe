import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../controller/model/entreprise.model';

@Component({
  selector: 'app-admin-entreprise-edit',
  templateUrl: './admin-entreprise-edit.component.html',
  styleUrls: ['./admin-entreprise-edit.component.scss']
})
export class AdminEntrepriseEditComponent implements OnInit {

  constructor(private messageService: MessageService, private serviceEntreprise: EntrepriseService) { }

  ngOnInit(): void {
  }



  public edit() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      if (this.selected.id) {
        this.items[this.serviceEntreprise.findIndexById(this.selected.id)] = this.selected;
        this.serviceEntreprise.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Entreprise mis à jour',
            life: 3000
          });
        });
      }
      this.editDialog = false;
      this.selected = new Entreprise();
    }
  }

  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Entreprise {
    return this.serviceEntreprise.selected;
  }

  set selected(value: Entreprise) {
    this.serviceEntreprise.selected = value;
  }

  get editDialog(): boolean {
    return this.serviceEntreprise.editDialog;
  }

  set editDialog(value: boolean) {
    this.serviceEntreprise.editDialog = value;
  }

  get submitted(): boolean {
    return this.serviceEntreprise.submitted;
  }

  set submitted(value: boolean) {
    this.serviceEntreprise.submitted = value;
  }

  get items(): Array<Entreprise> {
    return this.serviceEntreprise.items;
  }

  set items(value: Array<Entreprise>) {
    this.serviceEntreprise.items = value;
  }
}
