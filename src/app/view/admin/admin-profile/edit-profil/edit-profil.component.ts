import { Component, OnInit } from '@angular/core';
import {User} from '../../../../controller/model/user.model';
import {UserService} from '../../../../controller/service/user.service';
import {MessageService} from 'primeng/api';
import {TokenStorageService} from '../../../../controller/service/security/token-storage.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {

  constructor(private service: UserService,
              private messageService: MessageService,
              private token: TokenStorageService) { }

  ngOnInit(): void {
    this.selected = new User();
    this.selected.nom = this.token.getUser().nom;
    this.selected.id = this.token.getUser().id;
    this.selected.login = this.token.getUser().login;
    this.selected.prenom = this.token.getUser().prenom;
    this.selected.phone = this.token.getUser().phone;
  }
  public edit() {
    this.submitted = true;
    if (this.selected.id) {
        this.service.edit().subscribe(data => {
          this.selected = data;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Modification enregistrée',
            life: 3000
          });
        });
      }
    this.editDialog = false;
  }
  public hideEditDialog() {
    this.editDialog = false;
  }
  get items(): Array<User> {
    return this.service.items;
  }

  set items(value: Array<User>) {
    this.service.items = value;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  public openCreate() {
    this.selected = new User();
    this.submitted = false;
    this.createDialog = true;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get selected(): User {
    return this.service.selected;
  }

  set selected(value: User) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }


}
