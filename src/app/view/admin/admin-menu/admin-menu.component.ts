import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppComponent } from './../../../app.component';
import { AdminMainComponent } from '../admin-main/admin-main.component';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  animations: [
    trigger('inline', [
      state('hidden', style({
        height: '0px',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*',
      })),
      state('hiddenAnimated', style({
        height: '0px',
        overflow: 'hidden'
      })),
      state('visibleAnimated', style({
        height: '*',
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AdminMenuComponent implements OnInit {

  model: any[];

  constructor(public app: AppComponent, public appMain: AdminMainComponent) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Favorites', icon: 'pi pi-fw pi-home', routerLink: ['dashboard']
      },
      {
        label: 'Equipes', icon: 'pi pi-fw pi-users', routerLink: ['equipes']
      } ,
      {
        label: 'Recherche-Taches', icon: 'pi pi-fw pi-search', routerLink: ['recherche-taches']
      } ,
      {
        label: 'Entreprises-Clients', icon: 'pi pi-fw pi-tablet', routerLink: ['admin-company-client']
      } ,
      {
        label: 'Projet-Global', icon: 'pi pi-fw pi-briefcase', routerLink: ['admin-projet-global']
      } ,
      {
        label: 'Groupes Des Taches', icon: 'pi pi-fw pi-th-large', routerLink: ['admin-groupetache-tache']
      },
      {
        label: 'Factures Et Paiements', icon: 'pi pi-fw pi-check-square', routerLink: ['admin-factures-paiements']
      } ,

      {
        label: 'Budgets', icon: 'pi pi-fw pi-dollar', routerLink: ['budget-list']
      },
      {
        label: 'Agences', icon: 'pi pi-fw pi-tablet', routerLink: ['agence-list']
      },
      {
        label: 'Statictiques', icon: 'pi pi-fw pi-chart-line', items: [
          {label: 'Suivi Collaborateur', icon: 'pi pi-fw pi-id-card', routerLink: ['admin-suivi-collaborateur']},
          {label: 'Synthese Client', icon: 'pi pi-fw pi-chart-', routerLink: ['admin-client-statistiques']},
          {label: 'Synthese Projet', icon: 'pi pi-fw pi-chart-', routerLink: ['admin-projet-statistiques']}
        ]
      }


    ];
  }

  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
