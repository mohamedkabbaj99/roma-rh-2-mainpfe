import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';
import {ClientService} from '../../../../../controller/service/client.service';
import {Entreprise} from '../../../../../controller/model/entreprise.model';
import {EntrepriseVo} from '../../../../../controller/model/entreprise-vo.model';

@Component({
  selector: 'app-admin-entreprise-list',
  templateUrl: './admin-entreprise-list.component.html',
  styleUrls: ['./admin-entreprise-list.component.scss']
})
export class AdminEntrepriseListComponent implements OnInit {
  cols: any[];
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
              private serviceEntreprise: EntrepriseService, private serviceClient: ClientService) { }

  ngOnInit(): void {
    this.initCol();
    this.serviceEntreprise.findAll().subscribe(data => this.items = data);
  }

  public delete(selected: Entreprise) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Vous voulez vraiment supprimer ' + selected.code + '?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.serviceEntreprise.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Entreprise();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Entreprise supprimée',
            life: 3000
          });
        });
      }
    });
  }


  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Vous voulez vraiment supprimer ces entreprises?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.serviceEntreprise.deleteMultipleByCode().subscribe(data => {
          this.serviceEntreprise.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Entreprises supprimées',
            life: 3000
          });
        });
      }
    });
  }


  findItems(selected: Entreprise) {
    this.selected = {...selected};
    this.serviceClient.findByEntrepriseCode(selected.code).subscribe(
        data => {
          this.serviceClient.items = data;
        }
    );
  }
  public openCreate() {
    this.selected = new Entreprise();
    this.submitted = false;
    this.createDialog = true;
  }
  public  findByCriteria(){
    this.serviceEntreprise.findByCriteria().subscribe(
        data=>{
          this.items = data ;
        }
    );
  }
  public edit(entreprise: Entreprise) {
    this.selected = {...entreprise};
    this.editDialog = true;
  }

  public view(entreprise: Entreprise) {
    this.selected = {...entreprise};
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      {field: 'code', header: 'Code'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'action', header: 'Actions'},
    ];
  }

  get selected(): Entreprise {
    return this.serviceEntreprise.selected;
  }

  set selected(value: Entreprise) {
    this.serviceEntreprise.selected = value;
  }

  get items(): Array<Entreprise> {
    return this.serviceEntreprise.items;
  }

  set items(value: Array<Entreprise>) {
    this.serviceEntreprise.items = value;
  }

  get submitted(): boolean {
    return this.serviceEntreprise.submitted;
  }

  set submitted(value: boolean) {
    this.serviceEntreprise.submitted = value;
  }

  get createDialog(): boolean {
    return this.serviceEntreprise.createDialog;
  }

  set createDialog(value: boolean) {
    this.serviceEntreprise.createDialog = value;
  }

  get editDialog(): boolean {
    return this.serviceEntreprise.editDialog;
  }

  set editDialog(value: boolean) {
    this.serviceEntreprise.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.serviceEntreprise.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.serviceEntreprise.viewDialog = value;
  }

  get selectes(): Array<Entreprise> {
    return this.serviceEntreprise.selectes;
  }

  set selectes(value: Array<Entreprise>) {
    this.serviceEntreprise.selectes = value;
  }


  get entrepriseVo(): EntrepriseVo{
    return  this.serviceEntreprise.entrepriseVo;
  }
  set entrepriseVo(value: EntrepriseVo){
    this.serviceEntreprise.entrepriseVo;
  }

}
