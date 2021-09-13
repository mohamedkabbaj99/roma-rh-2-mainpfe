import { Component, OnInit } from '@angular/core';
import {GroupeTache} from '../../../../../controller/model/groupe-tache.model';
import {GroupeTacheService} from '../../../../../controller/service/groupe-tache.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-admin-groupe-tache-view',
  templateUrl: './admin-groupe-tache-view.component.html',
  styleUrls: ['./admin-groupe-tache-view.component.scss']
})
export class AdminGroupeTacheViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: GroupeTacheService) {
  }

  ngOnInit(): void {
  }

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): GroupeTache {
    return this.service.selected;
  }

  set selected(value: GroupeTache) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
