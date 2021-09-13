import {Client} from './client.model';
import {Tache} from './tache.model';
import {EtatFacture} from './etat-facture.model';
import {Agence} from './agence.model';

export class Facture {
    public id: number;
    public libelle: string;
    public code: string;
    public description: string;
    public totalHeursCalcules: number;
    public totalHeursFactures: number;
    public montantCalcule: number;
    public montantFacture: number;
    public dateFacture: Date;
    public client: Client;
    public etatFacture: EtatFacture;
    public agence: Agence;
}
