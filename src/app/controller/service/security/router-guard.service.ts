import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {TokenStorageService} from "./token-storage.service";
import {MessageService} from "primeng/api";
import {RoleUrlService} from "./role-url.service";

@Injectable({
    providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

    constructor(private router: Router, private tokenStorage: TokenStorageService,
                private message: MessageService, private role: RoleUrlService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.tokenStorage.getUser()) {
            this.role.urlGlobal();
            return true;
        }else{
            this.router.navigateByUrl('/');
            return false;
        }
    }


}
