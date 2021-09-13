import {ChefAgence} from './chef-agence.model';
import {EtatAgence} from './etat-agence.model';
import {Ville} from './ville.model';

export class Agence {
    public id: number;
    public libelle: string;
    public code: string;
    public chefAgence: ChefAgence;
    public etatAgence: EtatAgence;
    public ville: Ville;
}
