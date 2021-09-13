import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../../app.component';
import {AdminMainComponent} from '../admin-main/admin-main.component';
import {AdminService} from '../../../controller/service/admin.service';
import {Admin} from '../../../controller/model/admin.model';
import {TokenStorageService} from '../../../controller/service/security/token-storage.service';
import {RoleUrlService} from '../../../controller/service/security/role-url.service';

@Component({
    selector: 'app-admin-top-bar',
    templateUrl: './admin-top-bar.component.html'
})
export class AdminTopBarComponent implements OnInit {
    constructor(public app: AppComponent, public appMain: AdminMainComponent,
                private service: AdminService, private tokenStorageService: TokenStorageService, private role: RoleUrlService) {
    }

    ngOnInit(): void {
        console.log(this.tokenStorageService.getUser());
        this.role.urlGlobal();
        this.selected = this.tokenStorageService.getUser();
    }


    get selected(): Admin {
        return this.service.selected;
    }

    set selected(value: Admin) {
        this.service.selected = value;
    }

    public logOut(){
        this.tokenStorageService.signOut();
    }
}
