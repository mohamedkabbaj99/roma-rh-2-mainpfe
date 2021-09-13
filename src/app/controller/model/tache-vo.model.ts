import {Lot} from './lot.model';

export class TacheVo {
    // tout ce qui est dans une tache
    membreEquipeId: number;
    semaine: number;
    mois: number;
    annee: number;
    dateDemarrageEffective: Date;
    dateFinEffective: Date;
    dateDemarrageEffectiveMin: Date;
    dateDemarrageEffectiveMax: Date;
    periodeId: number;
    groupeTacheId: number;
    chefAgenceId: number;

    // lot contient projet , responsable et sro
    lot: Lot;
    lotId: number;
    projetId: number;
    responsableId: number;

    // le projet contient nro et client

    equipeId: number;
    clientId: number;
    totalPeriode: number;
    totalHeure: number;

    libelle: string;
    etatTacheId: number;
}
