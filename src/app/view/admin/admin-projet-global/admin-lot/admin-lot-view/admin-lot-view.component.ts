import { Component, OnInit } from '@angular/core';
import {Lot} from '../../../../../controller/model/lot.model';
import {LotService} from '../../../../../controller/service/lot.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-admin-lot-view',
  templateUrl: './admin-lot-view.component.html',
  styleUrls: ['./admin-lot-view.component.scss']
})
export class AdminLotViewComponent implements OnInit {

  constructor(private messageService: MessageService, private service: LotService) { }

  ngOnInit(): void {
  }
  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Lot {
    return this.service.selected;
  }

  set selected(value: Lot) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
