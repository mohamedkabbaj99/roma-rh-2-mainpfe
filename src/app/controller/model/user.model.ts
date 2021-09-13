export class User {
    id: number;
    login: string;
    nom: string;
    email: string;
    phone: string;
    password: string;
    code: string;
    prenom: string;
    blocked: boolean;

    constructor() {
        this.login = '';
        this.phone = '';
        this.password = '';
    }
}
