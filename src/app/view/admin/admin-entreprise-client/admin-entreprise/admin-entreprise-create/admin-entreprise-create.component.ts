import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../controller/model/entreprise.model';

@Component({
  selector: 'app-admin-entreprise-create',
  templateUrl: './admin-entreprise-create.component.html',
  styleUrls: ['./admin-entreprise-create.component.scss']
})
export class AdminEntrepriseCreateComponent implements OnInit {

  constructor(private messageService: MessageService, private serviceEntreprise: EntrepriseService) { }

  ngOnInit(): void {
  }

  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      this.serviceEntreprise.save().subscribe(data => {
        if(data == null){
          this.messageService.add({
            severity: 'error',
            summary: 'Error Message',
            detail: 'Entreprise non enregistrée',
          });
        }else{
          this.items.push({...data});
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Entreprise enregistrée',
            life: 3000
          });
        }

      });
      this.createDialog = false;
      this.selected = new Entreprise();
    }
  }

  get selected(): Entreprise {
    return this.serviceEntreprise.selected;
  }

  set selected(value: Entreprise) {
    this.serviceEntreprise.selected = value;
  }

  get createDialog(): boolean {
    return this.serviceEntreprise.createDialog;
  }

  set createDialog(value: boolean) {
    this.serviceEntreprise.createDialog = value;
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
