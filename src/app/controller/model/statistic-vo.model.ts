import {BudgetVo} from './budget-vo.model';

export class StatisticVo {
    public dateMin: Date;
    public dateMax: Date;
    public currentDate: Date;
    public chefAgenceId: number;
    public showType: string;
    public showNumber: number;
    public budgetsTotal: Array<number>;
    public facturesTotal: Array<number>;
    public paiementsTotal: Array<number>;
    public nbrTache: Array<number>;
    public budgetVo: BudgetVo;
    public times: Array<Date>;

}
