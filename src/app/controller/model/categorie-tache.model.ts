import {CategorieGroupeTache} from './categorie-groupe-tache.model';

export class CategorieTache {
  public id: number;
  public libelle: string;
  public code: string;
  public description: string;
  public categorieGroupeTache: CategorieGroupeTache;
}
