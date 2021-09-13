import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminMainComponent} from './view/admin/admin-main/admin-main.component';
import {CollaborateurMainComponent} from './view/collaborateur/collaborateur-main/collaborateur-main.component';
import {AppErrorComponent} from './view/generale/app.error.component';
import {AppNotfoundComponent} from './view/generale/app.notfound.component';
import {AdminDashboardComponent} from './view/admin/admin-dashboard/admin-dashboard.component';
import {WelcomeComponent} from './view/generale/welcome/welcome.component';
import {SignInComponent} from './view/collaborateur/collborateur-connection/sign-in/sign-in.component';
import {CollaborateurDashboardComponent} from './view/collaborateur/collaborateur-dashboard/collaborateur-dashboard.component';
import {SignUpComponent} from './view/collaborateur/collborateur-connection/sign-up/sign-up.component';
import {AdminSignInComponent} from './view/admin/connection/sign-in/admin-sign-in.component';
import {AdminSignUpComponent} from './view/admin/connection/sign-up/admin-sign-up.component';
import {ChefAgenceMainComponent} from './view/chef-agence/chef-agence-main/chef-agence-main.component';
import {ChefAgenceDashboardComponent} from './view/chef-agence/chef-agence-dashboard/chef-agence-dashboard.component';
import {ChefAgenceSignInComponent} from './view/chef-agence/chef-agence-connexion/chef-agence-sign-in/chef-agence-sign-in.component';
import {ChefAgenceSignUpComponent} from './view/chef-agence/chef-agence-connexion/chef-agence-sign-up/chef-agence-sign-up.component';
import {AdminBudgetListComponent} from './view/admin/budget/admin-budget-list/admin-budget-list.component';
import {EquipeMembreEquipeComponent} from './view/chef-agence/equipe-membre-equipe/equipe-membre-equipe.component';
import {AgenceListComponent} from './view/admin/agence/agence-list/agence-list.component';
import {CriteresRechercheTacheComponent} from './view/chef-agence/criteres-recherche-tache/criteres-recherche-tache.component';
import {AdminEntrepriseClientComponent} from './view/admin/admin-entreprise-client/admin-entreprise-client.component';
// tslint:disable-next-line:max-line-length
import {ChefAgenceEntrepriseClientComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-entreprise-client.component';
import {ChefAgenceDemandeCongeComponent} from './view/chef-agence/chef-agence-demande-conge/chef-agence-demande-conge.component';
import {CollaborateurDemandeCongeComponent} from './view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge.component';
import {StatistiquesSuiviCollaborateurComponent} from './view/chef-agence/statistiques-suivi-collaborateur/statistiques-suivi-collaborateur.component';
import {AdminProjetGlobalComponent} from './view/admin/admin-projet-global/admin-projet-global.component';
// tslint:disable-next-line:max-line-length
import {ChefAgenceGroupetacheTacheComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupetache-tache.component';
import {CollaborateurGroupetacheTacheComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-groupetache-tache.component';
import {FacturesPaiementsComponent} from './view/admin/factures-paiements/factures-paiements.component';
import {ChefAgenceFacturesPaiementsComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures-paiements.component';
import {StatistiquesClientComponent} from './view/chef-agence/statistiques-client/statistiques-client.component';
import {StatistiquesProjetComponent} from './view/chef-agence/statistiques-projet/statistiques-projet.component';
import {ChefConnexionComponent} from './view/chef-equipe/chef-connexion/chef-connexion.component';
import {ChefInscriptionComponent} from './view/chef-equipe/chef-inscription/chef-inscription.component';
import {ChefEquipeMainComponent} from './view/chef-equipe/chef-equipe-main/chef-equipe-main.component';
import {EquipeMembersComponent} from './view/chef-equipe/equipe-members/equipe-members.component';
import {ChefAgenceProjetGlobalComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet-global.component';
import {ChefEquipeDashboardComponent} from './view/chef-equipe/chef-equipe-dashboard/chef-equipe-dashboard.component';
// tslint:disable-next-line:max-line-length
import {ChefEquipeGroupetacheTacheComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupetache-tache.component';
import {GroupetacheTacheComponent} from './view/admin/groupetache-tache/groupetache-tache.component';
import {AllEquipesComponent} from './view/admin/all-equipes/all-equipes.component';
import {AdminRechercheTacheComponent} from './view/admin/admin-recherche-tache/admin-recherche-tache.component';
import {ChefAgenceCategorieGroupeTacheCategorieTacheComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/chef-agence-categorie-groupe-tache-categorie-tache.component';
import {ChefEquipeStatistiquesSuiviCollaborateurComponent} from './view/chef-equipe/chef-equipe-statistiques-suivi-collaborateur/chef-equipe-statistiques-suivi-collaborateur.component';
import {RouterGuardService} from './controller/service/security/router-guard.service';
import {ChefAgenceCollaborateurComponent} from './view/chef-agence/chef-agence-collaborateur/chef-agence-collaborateur.component';
import {MessageCollaborateurComponent} from './view/collaborateur/message-collaborateur/message-collaborateur.component';
import {AdminStatistiquesSuiviCollaborateurComponent} from './view/admin/admin-statistiques-suivi-collaborateur/admin-statistiques-suivi-collaborateur.component';
import {AdminStatistiquesProjetComponent} from './view/admin/admin-statistiques-projet/admin-statistiques-projet.component';
import {AdminStatistiquesClientComponent} from './view/admin/admin-statistiques-client/admin-statistiques-client.component';
import {ChefEquipeProjetGlobalComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet-global.component';
import {TacheRechercheComponent} from './view/chef-equipe/tache-recherche/tache-recherche.component';
import {ChefEquipeCategorieGroupeTacheCategorieTacheComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-groupe-tache-categorie-tache.component';
import {AdminProfileComponent} from './view/admin/admin-profile/admin-profile.component';
import {CollaborateurEquipesComponent} from './view/collaborateur/collaborateur-equipes/collaborateur-equipes.component';
import {CollaborateurTachesComponent} from './view/collaborateur/collaborateur-taches/collaborateur-taches.component';
import {CollaborateurListMessageDetailComponent} from "./view/collaborateur/message-collaborateur/collaborateur-list-message-detail/collaborateur-list-message-detail.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: WelcomeComponent},
            {path: 'admin-login', component: AdminSignInComponent},
            {path: 'admin-signup', component: AdminSignUpComponent},
            {path: 'chef-agence-sign-in', component: ChefAgenceSignInComponent},
            {path: 'chef-agence-sign-up', component: ChefAgenceSignUpComponent},
            {
                path: 'chef-agence', component: ChefAgenceMainComponent,
                children: [
                    {path: '', component: ChefAgenceDashboardComponent},
                    {path: 'dashboard', component: ChefAgenceDashboardComponent},
                    {path: 'chef-agence-suivi-collaborateur', component: StatistiquesSuiviCollaborateurComponent},
                    {path: 'equipe-members', component: EquipeMembreEquipeComponent},
                    {path: 'profil', component: AdminProfileComponent},
                    {path: 'client-statistiques', component: StatistiquesClientComponent},
                    {path: 'projet-statistiques', component: StatistiquesProjetComponent},
                    {path: 'recherche-taches', component: CriteresRechercheTacheComponent},
                    {path: 'chef-agence-company-client', component: ChefAgenceEntrepriseClientComponent},
                    {path: 'chef-agence-demande-conge', component: ChefAgenceDemandeCongeComponent},
                    {path: 'chef-agence-projet-global', component: ChefAgenceProjetGlobalComponent},
                    {path: 'chef-agence-groupetache-tache', component: ChefAgenceGroupetacheTacheComponent},
                    {path: 'chef-agence-factures-paiements', component: ChefAgenceFacturesPaiementsComponent},
                    {
                        path: 'categorie-groupe-tache-categorie-tache',
                        component: ChefAgenceCategorieGroupeTacheCategorieTacheComponent
                    },
                    {path: 'categorie-groupe-tache-categorie-tache', component: ChefAgenceCategorieGroupeTacheCategorieTacheComponent},
                    {path: 'chef-agence-collaborateur', component: ChefAgenceCollaborateurComponent},
                ]
            },
            {
                path: 'admin', component: AdminMainComponent, canActivate: [RouterGuardService],
                children: [
                    {path: '', component: AdminDashboardComponent},
                    {path: 'dashboard', component: AdminDashboardComponent},
                    {path: 'profil', component: AdminProfileComponent},
                    {path: 'budget-list', component: AdminBudgetListComponent},
                    {path: 'agence-list', component: AgenceListComponent},
                    {path: 'equipes', component: AllEquipesComponent},
                    {path: 'recherche-taches', component: AdminRechercheTacheComponent},
                    {path: 'admin-company-client', component: AdminEntrepriseClientComponent},
                    {path: 'admin-projet-global', component: AdminProjetGlobalComponent},
                    {path: 'admin-groupetache-tache', component: GroupetacheTacheComponent},
                    {path: 'admin-factures-paiements', component: FacturesPaiementsComponent},
                    {path: 'admin-suivi-collaborateur', component: AdminStatistiquesSuiviCollaborateurComponent},
                    {path: 'admin-client-statistiques', component: AdminStatistiquesClientComponent},
                    {path: 'admin-projet-statistiques', component: AdminStatistiquesProjetComponent},

                ]
            },
            {path: 'collaborateur-login', component: SignInComponent},
            {path: 'collaborateur-signup', component: SignUpComponent},
            {
                path: 'collaborateur', component: CollaborateurMainComponent, canActivate: [RouterGuardService],
                children: [
                    {path: '', component: CollaborateurDashboardComponent},
                    {path: 'profil', component: AdminProfileComponent},
                    {path: 'equipes', component: CollaborateurEquipesComponent},
                    {path: 'taches', component: CollaborateurTachesComponent},
                    {path: 'collaborateur-demande-conge', component: CollaborateurDemandeCongeComponent},
                    {path: 'collaborateur-groupetache-tache', component: CollaborateurGroupetacheTacheComponent},
                    {path: 'collaborateur-message', component: MessageCollaborateurComponent},
                    {path: 'collaborateur-message-recu', component: CollaborateurListMessageDetailComponent},
                ]
            },
            {path: 'chef-equipe-login', component: ChefConnexionComponent},
            {path: 'chef-equipe-inscription', component: ChefInscriptionComponent},
            {
                path: 'chef-equipe', component: ChefEquipeMainComponent, canActivate: [RouterGuardService],
                children: [
                    {path: '', component: ChefEquipeDashboardComponent},
                    {path: 'equipe-members', component: EquipeMembersComponent},
                    {path: 'profil', component: AdminProfileComponent},
                    {path: 'recherche-tache', component: TacheRechercheComponent},
                    {path: 'chef-equipe-categorie-groupe-tache', component: ChefEquipeCategorieGroupeTacheCategorieTacheComponent},
                    {path: 'chef-equipe-projet-global', component: ChefEquipeProjetGlobalComponent},
                    {path: 'chef-equipe-groupetache-tache', component: ChefEquipeGroupetacheTacheComponent},
                    {
                        path: 'chef-equipe-suivi-collaborateur',
                        component: ChefEquipeStatistiquesSuiviCollaborateurComponent
                    },
                ]
            },


            {path: 'error', component: AppErrorComponent},
            {path: '404', component: AppNotfoundComponent},
            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
