import {Collaborateur} from './collaborateur.model';
import {EtatEquipe} from './etat-equipe.model';
import {Agence} from "./agence.model";

export class Equipe {
  public id: number;
  public code: string;
  public libelle: string;
  public description: string;
  public responsable: Collaborateur;
  public etatEquipe: EtatEquipe;
  public agence: Agence;
  constructor() {
    this.code = '';
    this.libelle = '';
    this.description = '';
    this.etatEquipe = new EtatEquipe();
    this.responsable = new Collaborateur();
  }
}




