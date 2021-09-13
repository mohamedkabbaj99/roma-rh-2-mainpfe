import {Agence} from './agence.model';

export class Collaborateur {
  public id: number;
  public login: string;
  public password: string;
  public phone: string;
  public email: string;
  public nom: string;
  public prenom: string;
  public code: string;
  public agence: Agence;
  constructor() {
    this.nom = '';
    this.prenom = '';
    this.code = '';
  }
}
