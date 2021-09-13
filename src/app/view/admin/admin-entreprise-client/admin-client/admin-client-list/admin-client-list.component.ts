import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../../../controller/service/client.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EntrepriseService} from '../../../../../controller/service/entreprise.service';
import {Entreprise} from '../../../../../controller/model/entreprise.model';
import {Client} from '../../../../../controller/model/client.model';
import {ClientVo} from '../../../../../controller/model/client-vo.model';

@Component({
    selector: 'app-admin-client-list',
    templateUrl: './admin-client-list.component.html',
    styleUrls: ['./admin-client-list.component.scss']
})
export class AdminClientListComponent implements OnInit {
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private serviceClient: ClientService,
                private serviceEntreprise: EntrepriseService) {
    }

    ngOnInit(): void {
        this.initCol();
    }


    public delete(selected: Client) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'vous voulez vraiment supprimer ' + selected.code + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.serviceClient.deleteByCode().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new Client();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Client supprimé',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: ' vous voulez vraiment supprimer ces Clients?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.serviceClient.deleteMultipleByCode().subscribe(data => {
                    this.serviceClient.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Clients supprimées',
                        life: 3000
                    });
                });
            }
        });
    }

    public openCreate() {
        this.selected = new Client();
        this.submitted = false;
        this.createDialog = true;
        //this.serviceClient.selected.entreprise = this.serviceEntreprise.selected;
    }

    public search() {
        this.serviceClient.serach().subscribe(
            data => {
                this.items = data;
            }
        );
    }

    public edit(entreprise: Client) {
        this.selected = {...entreprise};
        this.editDialog = true;
    }

    public view(entreprise: Client) {
        this.selected = {...entreprise};
        this.viewDialog = true;
    }

    private initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'code', header: 'Code'},
            {field: 'action', header: 'Actions'}
        ];
    }

    get selected(): Client {
        return this.serviceClient.selected;
    }

    set selected(value: Client) {
        this.serviceClient.selected = value;
    }

    get items(): Array<Client> {
        return this.serviceClient.items;
    }

    set items(value: Array<Client>) {
        this.serviceClient.items = value;
    }

    get submitted(): boolean {
        return this.serviceClient.submitted;
    }

    set submitted(value: boolean) {
        this.serviceClient.submitted = value;
    }

    get createDialog(): boolean {
        return this.serviceClient.createDialog;
    }

    set createDialog(value: boolean) {
        this.serviceClient.createDialog = value;
    }

    get editDialog(): boolean {
        return this.serviceClient.editDialog;
    }

    set editDialog(value: boolean) {
        this.serviceClient.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.serviceClient.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.serviceClient.viewDialog = value;
    }

    get selectes(): Array<Client> {
        return this.serviceClient.selectes;
    }

    set selectes(value: Array<Client>) {
        this.serviceClient.selectes = value;
    }
    get clientVo(): ClientVo {
        return this.serviceClient.clientVo;
    }

    set clientVo(value: ClientVo) {
        this.serviceClient.clientVo = value;
    }

}
