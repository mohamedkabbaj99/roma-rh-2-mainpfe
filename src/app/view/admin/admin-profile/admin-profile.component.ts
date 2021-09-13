import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../controller/service/admin.service';
import {Projet} from '../../../controller/model/projet.model';
import {Admin} from '../../../controller/model/admin.model';
import {MessageService} from 'primeng/api';
import {Equipe} from '../../../controller/model/equipe.model';
import {Tache} from '../../../controller/model/tache.model';
import {User} from '../../../controller/model/user.model';
import {AuthService} from '../../../controller/service/security/auth.service';
import {TokenStorageService} from '../../../controller/service/security/token-storage.service';
import {ChangePwdVo} from '../../../controller/model/change-pwd-vo.model';
import {UserService} from '../../../controller/service/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(private service: UserService,
              private messageService: MessageService,
              private authService: AuthService,
              private token: TokenStorageService) { }

  ngOnInit(): void {
  }
  get changeVo(): ChangePwdVo {
    return this.authService.changeVo;
  }
  set changeVo(value: ChangePwdVo) {
    this.authService.changeVo = value;
  }
  changePassword(){
    this.authService.changePassword().subscribe(
        data => {
          console.log(data);
          if (data === 1){
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Mot de passe enregistré',
              life: 3000
            });
            this.changeVo = new ChangePwdVo();
            this.token.signOut();
          }else if ( data === -1){
            this.messageService.add({
              severity: 'error',
              summary: 'Error message',
              detail: 'Mot de passe incorrecte',
            });
            this.changeVo = new ChangePwdVo();
          }
        }
    );
  }
  get selected(): Admin {
    return this.service.selected;
  }
  set selected(value: Admin) {
    this.service.selected = value;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  public openEdit() {
    this.submitted = false;
    this.editDialog = true;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get items(): Array<Admin> {
    return this.service.items;
  }

  set items(value: Array<Admin>) {
    this.service.items = value;
  }
  public edit(user: Admin) {
    this.openEdit();
    this.editDialog = true;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }
}
