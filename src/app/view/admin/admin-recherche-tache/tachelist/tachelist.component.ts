import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../../controller/service/tache.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Tache} from '../../../../controller/model/tache.model';
import {TacheVo} from '../../../../controller/model/tache-vo.model';

@Component({
  selector: 'app-tachelist',
  templateUrl: './tachelist.component.html',
  styleUrls: ['./tachelist.component.scss']
})
export class TachelistComponent implements OnInit {

  cols: any[];
  constructor(private service: TacheService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.initCol();
  }
  private initCol() {
    this.cols = [
      {field: 'membreEquipe', header: 'MembreEquipe'},
      {field: 'dateDemarrageEffective', header: 'DateDemarrageEffective'},
      {field: 'periode', header: 'Periode'},
      {field: 'libelle', header: 'Libelle'},
      {field: 'groupeTache', header: 'GroupeTache'},
      {field: 'categorieTache', header: 'CategorieTache'}
    ];
  }
  public delete(selected: Tache) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'Voulez vous vraiment supprimer la tache -' + selected.libelle + '?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key: 'tache',
      accept: () => {
        this.service.deleteByCode().subscribe(data => {
          console.log(data);
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Tache();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Tache supprimée',
            life: 3000
          });
        });
      }
    });
  }
  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected taches?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByCode().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Taches Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public openCreate() {
    this.selected = new Tache();
    this.submitted = false;
    this.createDialog = true;
  }
  public edit(tache: Tache) {
    this.selected = {...tache};
    this.editDialog = true;
  }
  get selected(): Tache {
    return this.service.selected;
  }
  set selected(value: Tache){
    this.service.selected = value;
  }
  get selectes(): Array<Tache>{
    return this.service.selectes;
  }
  set selectes(value: Array<Tache>) {
    this.service.selectes = value;
  }
  get items(): Array<Tache>{
    return this.service.items;
  }
  set items(value: Array<Tache>) {
    this.service.items = value;
  }
  get tacheVo(): TacheVo{
    return this.service.tacheVo;
  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

}
