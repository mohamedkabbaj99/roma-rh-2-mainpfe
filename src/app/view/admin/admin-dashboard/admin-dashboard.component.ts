import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../../../controller/service/dashboard.service';
import {StatisticVo} from '../../../controller/model/statistic-vo.model';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    products: any[];

    chartData: any;
    dataBudget: any;
    dataTache: any;

    chartOptions: any;

    events: any[];

    fullcalendarOptions: any;
    times: Array<Date> = new Array<Date>();

    constructor(private  dashboardService: DashboardService) {
    }


    ngOnInit(): void {

        this.selected.currentDate = new Date();
        this.selected.showType = 'months';
        this.selected.showNumber = 12;
        this.dashboardService.statisticsGlobale().subscribe(
            data => {
                this.chartData = {
                    labels: [],
                    datasets: [
                        {
                            label: 'Paiements',
                            backgroundColor: '#581845',
                            data: []
                        },
                        {
                            label: 'Factures',
                            backgroundColor: '#C70039',
                            data: []
                        },

                    ]
                },
                    this.dataBudget = {
                        labels: [],
                        datasets: [
                            {
                                label: 'Budgets',
                                backgroundColor: '#C70039',
                                data: []
                            }
                        ]
                    },

                    console.log(data);
                this.chartData.datasets[1].data = data.facturesTotal;
                this.chartData.datasets[0].data = data.paiementsTotal;
                this.dataBudget.datasets[0].data = data.budgetsTotal;
                for (let date of data.times) {
                    this.chartData.labels.push(date.toString().slice(0, 7));
                    this.dataBudget.labels.push(date.toString().slice(0, 7));
                }

            }
        );
        this.dashboardService.statisticsTache().subscribe(
            data => {
                this.dataTache = {
                    labels: [],
                    datasets: [{
                        label: 'Taches',
                        data: [],
                        borderColor: [
                            '#581845',
                        ],
                        borderWidth: 3,
                        // borderDash: [5, 5],
                        fill: true,
                        // pointRadius: 3
                    }]};
                for (let date of data.times) {
                    this.dataTache.labels.push(date.toString().slice(0, 7));
                }
                this.dataTache.datasets[0].data = data.nbrTache;
            }
        );

        this.chartOptions = {
            legend: {
                labels: {
                    fontColor: '#495057'
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: '#495057'
                    }
                }]
            }
        };

    }


    get selected(): StatisticVo {
        return this.dashboardService.selected;
    }

    set selected(value: StatisticVo) {
        this.dashboardService.selected = value;
    }

    get submitted(): boolean {
        return this.dashboardService.submitted;
    }

    set submitted(value: boolean) {
        this.dashboardService.submitted = value;
    }

}
