import {Injectable} from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoleUrlService {

    constructor(private token: TokenStorageService) {
    }

    get roles(): Array<string> {
        return this.token.getUser().roles;
    }

    baseUrl = 'http://localhost:8036/maneo-rh/';

    urlGlobal() {
        if (!(-1 === this.roles.indexOf('ROLE_ADMIN'))) {
            this.baseUrl = environment.baseUrl + 'admin/';
        } else if (!(-1 === this.roles.indexOf('ROLE_CHEF_AGENCE'))) {
            this.baseUrl = environment.baseUrl + 'chef-agence/';
        } else if (!(-1 === this.roles.indexOf('ROLE_CHEF_EQUIPE'))) {
            this.baseUrl = environment.baseUrl + 'chef-equipe/';
        } else if (!(-1 === this.roles.indexOf('ROLE_COLLABORATEUR'))) {
            this.baseUrl = environment.baseUrl + 'collaborateur/';
        } else {
            this.baseUrl = environment.baseUrl + 'general/';
        }
        console.log('URL MESSAGE ROMES' + this.roles);
        console.log(this.baseUrl);
    }
}
