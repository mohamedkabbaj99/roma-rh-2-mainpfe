import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {SignupRequest} from '../../security/model/signup-request.model';
import {LoginRequest} from '../../security/model/login-request.model';
import {Collaborateur} from '../../model/collaborateur.model';
import {UserService} from '../user.service';
import {ChangePwdVo} from '../../model/change-pwd-vo.model';
import {TokenStorageService} from './token-storage.service';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url = environment.baseUrl + 'auth/';

    private _loginRequest: LoginRequest;
    private _signupRequest: SignupRequest;
    private _collaborateur: Collaborateur;
    private _changeVo: ChangePwdVo;

    constructor(private http: HttpClient,
                private token: TokenStorageService) {
    }
    get changeVo(): ChangePwdVo{
        if (this._changeVo == null){
            this._changeVo = new ChangePwdVo();
        }
        return this._changeVo;
    }
    set changeVo(value: ChangePwdVo) {
        this._changeVo = value;
    }

    get collaborateur(): Collaborateur {
        if(this._collaborateur == null){
            this._collaborateur = new Collaborateur();
        }
        return this._collaborateur;
    }

    set collaborateur(value: Collaborateur) {
        this._collaborateur = value;
    }
    get loginRequest(): LoginRequest {
        if (this._loginRequest == null) {
            this._loginRequest = new LoginRequest();
        }
        return this._loginRequest;
    }

    set loginRequest(value: LoginRequest) {
        this._loginRequest = value;
    }

    login(): Observable<any> {
        return this.http.post(this.url + 'signin', this._loginRequest, httpOptions);
    }

    adminRegister(): Observable<any> {
        console.log(this.signupRequest);
        return this.http.post(this.url + 'admin-signup', this._signupRequest, httpOptions);
    }

    chefAgenceRegister(): Observable<any> {
        return this.http.post(this.url + 'chef-agence-signup', this._signupRequest, httpOptions);
    }

    collaborateurRegister(): Observable<any> {
        console.log(this.signupRequest);
        return this.http.post(this.url + 'collaborateur-signup', this._signupRequest);
    }

    changePassword(): Observable<number>{
        console.log(this.token.getUser().id);
        return this.http.post<number>('http://localhost:8036/maneo-rh/auth/changePassword/' + this.token.getUser().id , this.changeVo);
    }

    get signupRequest(): SignupRequest {
        if (this._signupRequest == null) {
            this._signupRequest = new SignupRequest();
        }
        return this._signupRequest;
    }

    set signupRequest(value: SignupRequest) {
        this._signupRequest = value;
    }
}
