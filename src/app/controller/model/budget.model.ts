import {EtatBudget} from './etat-budget.model';
import {Agence} from './agence.model';

export class Budget {
    public id: number;
    public libelle: string;
    public code: string;
    public montant: number;
    public messageDemmande: string;
    public messageReponse: string;
    public dateDemmande: Date;
    public dateReponse: Date;
    public etatBudget: EtatBudget;
    public agence: Agence;
}
