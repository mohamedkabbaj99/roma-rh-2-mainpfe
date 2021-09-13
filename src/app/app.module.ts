import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';
import {AppCodeModule} from './app.code.component';
import {AdminMainComponent} from './view/admin/admin-main/admin-main.component';
import {AppMenuitemComponent} from './view/admin/admin-menu/app.menuitem.component';
import {AdminTopBarComponent} from './view/admin/admin-top-bar/admin-top-bar.component';
import {AdminMenuComponent} from './view/admin/admin-menu/admin-menu.component';
import {AdminRightMenuComponent} from './view/admin/admin-right-menu/admin-right-menu.component';
import {MenuService} from './controller/service/app.menu.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AppErrorComponent} from './view/generale/app.error.component';
import {CollaborateurMainComponent} from './view/collaborateur/collaborateur-main/collaborateur-main.component';
import {CollaborateurMenuComponent} from './view/collaborateur/collaborateur-menu/collaborateur-menu.component';
import {CollaborateurRightMenuComponent} from './view/collaborateur/collaborateur-right-menu/collaborateur-right-menu.component';
import {CollaborateurMenuItemComponent} from './view/collaborateur/collaborateur-menu/collaborateur-menu-item.component';
import {CollaborateurTopBarComponent} from './view/collaborateur/collaborateur-top-bar/collaborateur-top-bar.component';
import {AppNotfoundComponent} from './view/generale/app.notfound.component';
import {AdminDashboardComponent} from './view/admin/admin-dashboard/admin-dashboard.component';
import {CollaborateurDashboardComponent} from './view/collaborateur/collaborateur-dashboard/collaborateur-dashboard.component';
import {AdminConfigComponent} from './view/admin/admin-config/admin-config.component';
import {CollaborateurConfigComponent} from './view/collaborateur/collaborateur-config/collaborateur-config.component';
import {WelcomeComponent} from './view/generale/welcome/welcome.component';
import {SignInComponent} from './view/collaborateur/collborateur-connection/sign-in/sign-in.component';
import {SignUpComponent} from './view/collaborateur/collborateur-connection/sign-up/sign-up.component';
import {AdminSignUpComponent} from './view/admin/connection/sign-up/admin-sign-up.component';
import {AdminSignInComponent} from './view/admin/connection/sign-in/admin-sign-in.component';
import {ChefAgenceSignInComponent} from './view/chef-agence/chef-agence-connexion/chef-agence-sign-in/chef-agence-sign-in.component';
import {ChefAgenceDashboardComponent} from './view/chef-agence/chef-agence-dashboard/chef-agence-dashboard.component';
import {ChefAgenceMainComponent} from './view/chef-agence/chef-agence-main/chef-agence-main.component';
import {ChefAgenceSignUpComponent} from './view/chef-agence/chef-agence-connexion/chef-agence-sign-up/chef-agence-sign-up.component';
import {ChefAgenceConfigComponent} from './view/chef-agence/chef-agence-config/chef-agence-config.component';
import {ChefAgenceTopBarComponent} from './view/chef-agence/chef-agence-top-bar/chef-agence-top-bar.component';
import {ChefAgenceRightMenuComponent} from './view/chef-agence/chef-agence-right-menu/chef-agence-right-menu.component';
import {ChefAgenceMenuComponent} from './view/chef-agence/chef-agence-menu/chef-agence-menu.component';
import {BudgetCreateComponent} from './view/admin/budget/budget-create/budget-create.component';
import {AdminBudgetListComponent} from './view/admin/budget/admin-budget-list/admin-budget-list.component';
import {EquipeMembreEquipeComponent} from './view/chef-agence/equipe-membre-equipe/equipe-membre-equipe.component';
import {EquipeCreateComponent} from './view/chef-agence/equipe-membre-equipe/equipe/equipe-create/equipe-create.component';
import {EquipeEditComponent} from './view/chef-agence/equipe-membre-equipe/equipe/equipe-edit/equipe-edit.component';
import {EquipeListComponent} from './view/chef-agence/equipe-membre-equipe/equipe/equipe-list/equipe-list.component';
import {EquipeViewComponent} from './view/chef-agence/equipe-membre-equipe/equipe/equipe-view/equipe-view.component';
import {MembreEquipeComponent} from './view/chef-agence/equipe-membre-equipe/membre-equipe/membre-equipe.component';
import {MembreEquipeCreateComponent} from './view/chef-agence/equipe-membre-equipe/membre-equipe/membre-equipe-create/membre-equipe-create.component';
import {MembreEquipeEditComponent} from './view/chef-agence/equipe-membre-equipe/membre-equipe/membre-equipe-edit/membre-equipe-edit.component';
import {MembreEquipeViewComponent} from './view/chef-agence/equipe-membre-equipe/membre-equipe/membre-equipe-view/membre-equipe-view.component';
import {MembreEquipeListComponent} from './view/chef-agence/equipe-membre-equipe/membre-equipe/membre-equipe-list/membre-equipe-list.component';
import {EquipeComponent} from './view/chef-agence/equipe-membre-equipe/equipe/equipe.component';
import {AgenceCreateComponent} from './view/admin/agence/agence-create/agence-create.component';
import {AgenceListComponent} from './view/admin/agence/agence-list/agence-list.component';
import {ChefAgenceMenuItemComponent} from './view/chef-agence/chef-agence-menu/chef-agence-menu-item.component';
import {ListeTachesComponent} from './view/chef-agence/criteres-recherche-tache/liste-taches/liste-taches.component';
import {CriteresRechercheTacheComponent} from './view/chef-agence/criteres-recherche-tache/criteres-recherche-tache.component';
import {RechercheTachesComponent} from './view/chef-agence/criteres-recherche-tache/recherche-taches/recherche-taches.component';
import {AdminEntrepriseClientComponent} from './view/admin/admin-entreprise-client/admin-entreprise-client.component';
import {AdminEntrepriseComponent} from './view/admin/admin-entreprise-client/admin-entreprise/admin-entreprise.component';
import {AdminClientComponent} from './view/admin/admin-entreprise-client/admin-client/admin-client.component';
import {AdminEntrepriseCreateComponent} from './view/admin/admin-entreprise-client/admin-entreprise/admin-entreprise-create/admin-entreprise-create.component';
import {AdminEntrepriseListComponent} from './view/admin/admin-entreprise-client/admin-entreprise/admin-entreprise-list/admin-entreprise-list.component';
import {AdminEntrepriseEditComponent} from './view/admin/admin-entreprise-client/admin-entreprise/admin-entreprise-edit/admin-entreprise-edit.component';
import {AdminEntrepriseViewComponent} from './view/admin/admin-entreprise-client/admin-entreprise/admin-entreprise-view/admin-entreprise-view.component';
import {AdminClientViewComponent} from './view/admin/admin-entreprise-client/admin-client/admin-client-view/admin-client-view.component';
import {AdminClientCreateComponent} from './view/admin/admin-entreprise-client/admin-client/admin-client-create/admin-client-create.component';
import {AdminClientListComponent} from './view/admin/admin-entreprise-client/admin-client/admin-client-list/admin-client-list.component';
import {AdminClientEditComponent} from './view/admin/admin-entreprise-client/admin-client/admin-client-edit/admin-client-edit.component';
// tslint:disable-next-line:max-line-length
import {ChefAgenceEntrepriseClientComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-entreprise-client.component';
import {ChefAgenceEntrepriseComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-entreprise/chef-agence-entreprise.component';
import {ChefAgenceClientComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-client/chef-agence-client.component';
import {ChefAgenceClientCreateComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-client/chef-agence-client-create/chef-agence-client-create.component';
import {ChefAgenceClientEditComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-client/chef-agence-client-edit/chef-agence-client-edit.component';
import {ChefAgenceClientListComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-client/chef-agence-client-list/chef-agence-client-list.component';
import {ChefAgenceClientViewComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-client/chef-agence-client-view/chef-agence-client-view.component';
import {ChefAgenceEntrepriseCreateComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-entreprise/chef-agence-entreprise-create/chef-agence-entreprise-create.component';
import {ChefAgenceEntrepriseEditComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-entreprise/chef-agence-entreprise-edit/chef-agence-entreprise-edit.component';
import {ChefAgenceEntrepriseViewComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-entreprise/chef-agence-entreprise-view/chef-agence-entreprise-view.component';
import {ChefAgenceEntrepriseListComponent} from './view/chef-agence/chef-agnece-entreprise-client/chef-agence-entreprise/chef-agence-entreprise-list/chef-agence-entreprise-list.component';
import {AgenceEditComponent} from './view/admin/agence/agence-edit/agence-edit.component';
import {ChefAgenceDemandeCongeComponent} from './view/chef-agence/chef-agence-demande-conge/chef-agence-demande-conge.component';
import {ChefAgenceDemandeCongeCreateComponent} from './view/chef-agence/chef-agence-demande-conge/chef-agence-demande-conge-create/chef-agence-demande-conge-create.component';
import {ChefAgenceDemandeCongeListComponent} from './view/chef-agence/chef-agence-demande-conge/chef-agence-demande-conge-list/chef-agence-demande-conge-list.component';
import {ChefAgenceDemandeCongeEditComponent} from './view/chef-agence/chef-agence-demande-conge/chef-agence-demande-conge-edit/chef-agence-demande-conge-edit.component';
import {ChefAgenceDemandeCongeViewComponent} from './view/chef-agence/chef-agence-demande-conge/chef-agence-demande-conge-view/chef-agence-demande-conge-view.component';
import {CollaborateurDemandeCongeComponent} from './view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge.component';
import {CollaborateurDemandeCongeCreateComponent} from './view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-create/collaborateu-demande-conge-create.component';
import {CollaborateurDemandeCongeListComponent} from './view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-list/collaborateur-demande-conge-list.component';
import {CollaborateurDemandeCongeViewComponent} from './view/collaborateur/collaborateur-demande-conge/collaborateur-demande-conge-view/collaborateur-demande-conge-view.component';
import {StatistiquesSuiviCollaborateurComponent} from './view/chef-agence/statistiques-suivi-collaborateur/statistiques-suivi-collaborateur.component';
import {CriteresDeRechercheComponent} from './view/chef-agence/statistiques-suivi-collaborateur/criteres-de-recherche/criteres-de-recherche.component';
import {CollaborateurDonneesComponent} from './view/chef-agence/statistiques-suivi-collaborateur/collaborateur-donnees/collaborateur-donnees.component';
import {AdminProjetGlobalComponent} from './view/admin/admin-projet-global/admin-projet-global.component';
import {AdminProjetCreateComponent} from './view/admin/admin-projet-global/admin-projet/admin-projet-create/admin-projet-create.component';
import {AdminProjetListComponent} from './view/admin/admin-projet-global/admin-projet/admin-projet-list/admin-projet-list.component';
import {AdminProjetEditComponent} from './view/admin/admin-projet-global/admin-projet/admin-projet-edit/admin-projet-edit.component';
import {AdminProjetViewComponent} from './view/admin/admin-projet-global/admin-projet/admin-projet-view/admin-projet-view.component';
import {AdminLotComponent} from './view/admin/admin-projet-global/admin-lot/admin-lot.component';
import {AdminLotCreateComponent} from './view/admin/admin-projet-global/admin-lot/admin-lot-create/admin-lot-create.component';
import {AdminLotEditComponent} from './view/admin/admin-projet-global/admin-lot/admin-lot-edit/admin-lot-edit.component';
import {AdminLotListComponent} from './view/admin/admin-projet-global/admin-lot/admin-lot-list/admin-lot-list.component';
import {AdminLotViewComponent} from './view/admin/admin-projet-global/admin-lot/admin-lot-view/admin-lot-view.component';
import {AdminGroupeTacheComponent} from './view/admin/admin-projet-global/admin-groupe-tache/admin-groupe-tache.component';
import {AdminGroupeTacheCreateComponent} from './view/admin/admin-projet-global/admin-groupe-tache/admin-groupe-tache-create/admin-groupe-tache-create.component';
import {AdminGroupeTacheEditComponent} from './view/admin/admin-projet-global/admin-groupe-tache/admin-groupe-tache-edit/admin-groupe-tache-edit.component';
import {AdminGroupeTacheListComponent} from './view/admin/admin-projet-global/admin-groupe-tache/admin-groupe-tache-list/admin-groupe-tache-list.component';
import {AdminGroupeTacheViewComponent} from './view/admin/admin-projet-global/admin-groupe-tache/admin-groupe-tache-view/admin-groupe-tache-view.component';
import {AdminTachesComponent} from './view/admin/admin-projet-global/admin-taches/admin-taches.component';
import {AdminTachesCreateComponent} from './view/admin/admin-projet-global/admin-taches/admin-taches-create/admin-taches-create.component';
import {AdminTachesEditComponent} from './view/admin/admin-projet-global/admin-taches/admin-taches-edit/admin-taches-edit.component';
import {AdminTachesListComponent} from './view/admin/admin-projet-global/admin-taches/admin-taches-list/admin-taches-list.component';
import {AdminTachesViewComponent} from './view/admin/admin-projet-global/admin-taches/admin-taches-view/admin-taches-view.component';
import {AdminProjetEquipeCreateListComponent} from './view/admin/admin-projet-global/admin-projet-equipe/admin-projet-equipe-create-list/admin-projet-equipe-create-list.component';
import {AdminProjetEquipeEditListComponent} from './view/admin/admin-projet-global/admin-projet-equipe/admin-projet-equipe-edit-list/admin-projet-equipe-edit-list.component';
import {AdminProjetEquipeViewListComponent} from './view/admin/admin-projet-global/admin-projet-equipe/admin-projet-equipe-view-list/admin-projet-equipe-view-list.component';
import {AdminProjetComponent} from './view/admin/admin-projet-global/admin-projet/admin-projet.component';
import {SearcheBarProjetComponent} from './view/admin/admin-projet-global/admin-projet/admin-search-bar-projet/admin-search-bar-projet.component';
// tslint:disable-next-line:max-line-length
import {ChefAgenceGroupetacheTacheComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupetache-tache.component';
import {ChefAgenceGroupeTacheComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupe-tache/chef-agence-groupe-tache.component';
import {ChefAgenceTacheComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-tache/chef-agence-tache.component';
import {ChefAgenceTacheCreateComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-tache/chef-agence-tache-create/chef-agence-tache-create.component';
import {ChefAgenceTacheEditComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-tache/chef-agence-tache-edit/chef-agence-tache-edit.component';
import {ChefAgenceTacheListComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-tache/chef-agence-tache-list/chef-agence-tache-list.component';
import {ChefAgenceTacheViewComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-tache/chef-agence-tache-view/chef-agence-tache-view.component';
import {ChefAgenceGroupeTacheCreateComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupe-tache/chef-agence-groupe-tache-create/chef-agence-groupe-tache-create.component';
import {ChefAgenceGroupeTacheEditComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupe-tache/chef-agence-groupe-tache-edit/chef-agence-groupe-tache-edit.component';
import {ChefAgenceGroupeTacheListComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupe-tache/chef-agence-groupe-tache-list/chef-agence-groupe-tache-list.component';
import {ChefAgenceGroupeTacheViewComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupe-tache/chef-agence-groupe-tache-view/chef-agence-groupe-tache-view.component';
import {CollaborateurGroupetacheTacheComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-groupetache-tache.component';
import {CollaborateurGroupeTacheComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-groupe-tache/collaborateur-groupe-tache.component';
import {CollaborateurTacheComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-tache/collaborateur-tache.component';
import {CollaborateurGroupeTacheListComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-groupe-tache/collaborateur-groupe-tache-list/collaborateur-groupe-tache-list.component';
import {CollaborateurGroupeTacheViewComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-groupe-tache/collaborateur-groupe-tache-view/collaborateur-groupe-tache-view.component';
import {CollaborateurTacheCreateComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-tache/collaborateur-tache-create/collaborateur-tache-create.component';
import {CollaborateurTacheListComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-tache/collaborateur-tache-list/collaborateur-tache-list.component';
import {CollaborateurTacheEditComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-tache/collaborateur-tache-edit/collaborateur-tache-edit.component';
import {CollaborateurTacheViewComponent} from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-tache/collaborateur-tache-view/collaborateur-tache-view.component';
import {ChefAgenceFacturesPaiementsComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures-paiements.component';
import {ChefAgenceFacturesComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures/chef-agence-factures.component';
import {ChefAgencePaiementsComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-paiements/chef-agence-paiements.component';
import {ChefAgenceFactureCreateComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures/chef-agence-facture-create/chef-agence-facture-create.component';
import {ChefAgenceSearchBarFactureComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures/chef-agence-search-bar-facture/chef-agence-search-bar-facture.component';
import {ChefAgenceFactureEditComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures/chef-agence-facture-edit/chef-agence-facture-edit.component';
import {ChefAgenceFactureListeComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures/chef-agence-facture-liste/chef-agence-facture-liste.component';
import {ChefAgenceFactureViewComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-factures/chef-agence-facture-view/chef-agence-facture-view.component';
import {ChefAgencePaiementCreateComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-paiements/chef-agence-paiement-create/chef-agence-paiement-create.component';
import {ChefAgencePaiementListeComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-paiements/chef-agence-paiement-liste/chef-agence-paiement-liste.component';
import {ChefAgencePaiementViewComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-paiements/chef-agence-paiement-view/chef-agence-paiement-view.component';
import {ChefAgencePaiementEditComponent} from './view/chef-agence/chef-agence-factures-paiements/chef-agence-paiements/chef-agence-paiement-edit/chef-agence-paiement-edit.component';
import {FacturesComponent} from './view/admin/factures-paiements/factures/factures.component';
import {PaiementListeComponent} from './view/admin/factures-paiements/paiements/paiement-liste/paiement-liste.component';
import {SearchBarFactureComponent} from './view/admin/factures-paiements/factures/search-bar-facture/search-bar-facture.component';
import {FacturesPaiementsComponent} from './view/admin/factures-paiements/factures-paiements.component';
import {FactureListeComponent} from './view/admin/factures-paiements/factures/facture-liste/facture-liste.component';
import {FactureEditComponent} from './view/admin/factures-paiements/factures/facture-edit/facture-edit.component';
import {PaiementCreateComponent} from './view/admin/factures-paiements/paiements/paiement-create/paiement-create.component';
import {PaiementEditComponent} from './view/admin/factures-paiements/paiements/paiement-edit/paiement-edit.component';
import {PaiementsComponent} from './view/admin/factures-paiements/paiements/paiements.component';
import {PaiementViewComponent} from './view/admin/factures-paiements/paiements/paiement-view/paiement-view.component';
import {FactureCreateComponent} from './view/admin/factures-paiements/factures/facture-create/facture-create.component';
import {FactureViewComponent} from './view/admin/factures-paiements/factures/facture-view/facture-view.component';
import {SearchBarComponent} from './view/chef-agence/statistiques-client/search-bar/search-bar.component';
import {TableStatistiquesProjetComponent} from './view/chef-agence/statistiques-projet/table-statistiques-projet/table-statistiques-projet.component';
import {StatistiquesClientComponent} from './view/chef-agence/statistiques-client/statistiques-client.component';
import {StatistiquesClientTableComponent} from './view/chef-agence/statistiques-client/statistiques-client-table/statistiques-client-table.component';
import {StatistiquesProjetComponent} from './view/chef-agence/statistiques-projet/statistiques-projet.component';
import {SearchBarProjetComponent} from './view/chef-agence/statistiques-projet/search-bar-projet/search-bar-projet.component';
import { ChefAgenceLotViewComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-lot/chef-agence-lot-view/chef-agence-lot-view.component';
import { ChefAgenceLotCreateComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-lot/chef-agence-lot-create/chef-agence-lot-create.component';
import { ChefAgenceLotListComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-lot/chef-agence-lot-list/chef-agence-lot-list.component';
import { ChefAgenceTachesComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-taches/chef-agence-taches.component';
import { ChefAgenceTachesCreateComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-taches/chef-agence-taches-create/chef-agence-taches-create.component';
import { ChefAgenceTachesEditComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-taches/chef-agence-taches-edit/chef-agence-taches-edit.component';
import { ChefAgenceTachesListComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-taches/chef-agence-taches-list/chef-agence-taches-list.component';
import { ChefAgenceTachesViewComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-taches/chef-agence-taches-view/chef-agence-taches-view.component';
import { ChefAgenceProjetEquipeCreateListComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-projet-equipe/chef-agence-projet-equipe-create-list/chef-agence-projet-equipe-create-list.component';
import { ChefAgenceProjetEquipeEditListComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-projet-equipe/chef-agence-projet-equipe-edit-list/chef-agence-projet-equipe-edit-list.component';
import { ChefAgenceProjetEquipeViewListComponent } from './view/chef-agence/chef-agence-projet-global/chef-agence-projet-equipe/chef-agence-projet-equipe-view-list/chef-agence-projet-equipe-view-list.component';
import {ChefConnexionComponent} from './view/chef-equipe/chef-connexion/chef-connexion.component';
import {EquipeMembersComponent} from './view/chef-equipe/equipe-members/equipe-members.component';
import {ChefInscriptionComponent} from './view/chef-equipe/chef-inscription/chef-inscription.component';
import {ChefAgenceGroupTacheListComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-groupe-tache/chef-agence-groupe-tache-list/chef-agence-groupe-tache-list.component';
import {ChefAgenceGroupTacheCreateComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-groupe-tache/chef-agence-groupe-tache-create/chef-agence-groupe-tache-create.component';
import {ChefAgenceGroupTacheEditComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-groupe-tache/chef-agence-groupe-tache-edit/chef-agence-groupe-tache-edit.component';
import {ChefAgenceGroupTacheComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-groupe-tache/chef-agence-groupe-tache.component';
import {ChefAgenceGroupTacheViewComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-groupe-tache/chef-agence-groupe-tache-view/chef-agence-groupe-tache-view.component';
// tslint:disable-next-line:max-line-length
import {ChefEquipeGroupetacheTacheComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupetache-tache.component';
import {ChefEquipeGroupeTacheComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupe-tache/chef-equipe-groupe-tache.component';
import {ChefEquipeTacheComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-tache/chef-equipe-tache.component';
import {ChefEquipeGroupeTacheCreateComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupe-tache/chef-equipe-groupe-tache-create/chef-equipe-groupe-tache-create.component';
import {ChefEquipeGroupeTacheListComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupe-tache/chef-equipe-groupe-tache-list/chef-equipe-groupe-tache-list.component';
import {ChefEquipeGroupeTacheEditComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupe-tache/chef-equipe-groupe-tache-edit/chef-equipe-groupe-tache-edit.component';
import {ChefEquipeGroupeTacheViewComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupe-tache/chef-equipe-groupe-tache-view/chef-equipe-groupe-tache-view.component';
import {ChefEquipeSearchBarGroupetacheComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-groupe-tache/chef-equipe-search-bar-groupetache/chef-equipe-search-bar-groupetache.component';
import {ChefEquipeTacheCreateComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-tache/chef-equipe-tache-create/chef-equipe-tache-create.component';
import {ChefEquipeTacheListComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-tache/chef-equipe-tache-list/chef-equipe-tache-list.component';
import {ChefEquipeTacheEditComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-tache/chef-equipe-tache-edit/chef-equipe-tache-edit.component';
import {ChefEquipeTacheViewComponent} from './view/chef-equipe/chef-equipe-groupetache-tache/chef-equipe-tache/chef-equipe-tache-view/chef-equipe-tache-view.component';
import {TacheEditComponent} from './view/chef-agence/criteres-recherche-tache/tache-edit/tache-edit.component';
import { ChefEquipeDashboardComponent } from './view/chef-equipe/chef-equipe-dashboard/chef-equipe-dashboard.component';
import {ChefEquipeConfigComponent} from './view/chef-equipe/chef-equipe-config/chef-equipe-config.component';
import {ChefEquipeMenuItemComponent} from './view/chef-equipe/chef-equipe-menu/chef-equipe-menu-item.component';
import {ChefEquipeMainComponent} from './view/chef-equipe/chef-equipe-main/chef-equipe-main.component';
import {ChefEquipeMenuComponent} from './view/chef-equipe/chef-equipe-menu/chef-equipe-menu.component';
import {ChefEquipeTopBarComponent} from './view/chef-equipe/chef-equipe-top-bar/chef-equipe-top-bar.component';
import {ChefEquipeRightMenuComponent} from './view/chef-equipe/chef-equipe-right-menu/chef-equipe-right-menu.component';
import {AdminBudgetRechercheComponent} from './view/admin/budget/admin-budget-recherche/admin-budget-recherche.component';
import {AdminBudgetEditComponent} from './view/admin/budget/admin-budget-edit/admin-budget-edit.component';
import {AdminBudgetViewComponent} from './view/admin/budget/admin-budget-view/admin-budget-view.component';
import {ChefAgenceProjetEditComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet/chef-agence-projet-edit/chef-agence-projet-edit.component';
import {ChefAgenceProjetListComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet/chef-agence-projet-list/chef-agence-projet-list.component';
import {ChefAgenceProjetViewComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet/chef-agence-projet-view/chef-agence-projet-view.component';
import {ChefAgenceLotEditComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-lot/chef-agence-lot-edit/chef-agence-lot-edit.component';
import {ChefAgenceProjetGlobalComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet-global.component';
import {ChefAgenceSearchBarProjetComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet/chef-agence-search-bar-projet/chef-agence-search-bar-projet.component';
import {ChefAgenceProjetComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet/chef-agence-projet.component';
import {ChefAgenceProjetCreateComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-projet/chef-agence-projet-create/chef-agence-projet-create.component';
import {ChefAgenceLotComponent} from './view/chef-agence/chef-agence-projet-global/chef-agence-lot/chef-agence-lot.component';
import { EquipesChefComponent } from './view/chef-equipe/equipe-members/equipes-chef/equipes-chef.component';
import { MembresComponent } from './view/chef-equipe/equipe-members/membres/membres.component';
import {ViewEquipeComponent} from './view/chef-equipe/equipe-members/equipes-chef/view-equipe/view-equipe.component';
import {ListeEquipeComponent} from './view/chef-equipe/equipe-members/equipes-chef/liste-equipe/liste-equipe.component';
import {ViewMembersComponent} from './view/chef-equipe/equipe-members/membres/view-members/view-members.component';
import {ListeMembersComponent} from './view/chef-equipe/equipe-members/membres/liste-members/liste-members.component';
import {SearchBarGroupetacheComponent} from './view/admin/groupetache-tache/groupe-tache/search-bar-groupetache/search-bar-groupetache.component';
import {ChefAgenceCategorieGroupeTacheCategorieTacheComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/chef-agence-categorie-groupe-tache-categorie-tache.component';
import {ChefAgenceCategorieTacheComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/chef-agence-categorie-tache/chef-agence-categorie-tache.component';
import {CategorieGroupeTacheComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/categorie-groupe-tache/categorie-groupe-tache.component';
import {ChefAgenceCategorieGroupeTacheEditComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/categorie-groupe-tache/chef-agence-categorie-groupe-tache-edit/chef-agence-categorie-groupe-tache-edit.component';
import {ChefAgenceCategorieGroupeTacheListComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/categorie-groupe-tache/chef-agence-categorie-groupe-tache-list/chef-agence-categorie-groupe-tache-list.component';
import {ChefAgenceCategorieGroupeTacheCreateComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/categorie-groupe-tache/chef-agence-categorie-groupe-tache-create/chef-agence-categorie-groupe-tache-create.component';
import {ChefAgenceCategorieGroupeTacheViewComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/categorie-groupe-tache/chef-agence-categorie-groupe-tache-view/chef-agence-categorie-groupe-tache-view.component';
import {ChefAgenceCategorieTacheCreateComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/chef-agence-categorie-tache/chef-agence-categorie-tache-create/chef-agence-categorie-tache-create.component';
import {ChefAgenceCategorieTacheEditComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/chef-agence-categorie-tache/chef-agence-categorie-tache-edit/chef-agence-categorie-tache-edit.component';
import {ChefAgenceCategorieTacheListComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/chef-agence-categorie-tache/chef-agence-categorie-tache-list/chef-agence-categorie-tache-list.component';
import {ChefAgenceCategorieTacheViewComponent} from './view/chef-agence/chef-agence-categorie-groupe-tache-categorie-tache/chef-agence-categorie-tache/chef-agence-categorie-tache-view/chef-agence-categorie-tache-view.component';
// tslint:disable-next-line:max-line-length
import {SearchDemandeCongeComponent} from './view/chef-agence/chef-agence-demande-conge/search-demande-conge/search-demande-conge.component';
import {EditAllDemandeCongeComponent} from './view/chef-agence/chef-agence-demande-conge/edit-all-demande-conge/edit-all-demande-conge.component';
import {TacheListComponent} from './view/admin/groupetache-tache/tache/tache-list/tache-list.component';
import {GroupeTacheEditComponent} from './view/admin/groupetache-tache/groupe-tache/groupe-tache-edit/groupe-tache-edit.component';
import {TacheComponent} from './view/admin/groupetache-tache/tache/tache.component';
import {GroupeTacheComponent} from './view/admin/groupetache-tache/groupe-tache/groupe-tache.component';
import {EditTacheComponent} from './view/admin/groupetache-tache/tache/tache-edit/edit-tache.component';
import {GroupetacheTacheComponent} from './view/admin/groupetache-tache/groupetache-tache.component';
import {GroupeTacheListComponent} from './view/admin/groupetache-tache/groupe-tache/groupe-tache-list/groupe-tache-list.component';
import {GroupeTacheViewComponent} from './view/admin/groupetache-tache/groupe-tache/groupe-tache-view/groupe-tache-view.component';
import {TacheViewComponent} from './view/admin/groupetache-tache/tache/tache-view/tache-view.component';
import {TacheCreateComponent} from './view/admin/groupetache-tache/tache/tache-create/tache-create.component';
import {GroupeTacheCreateComponent} from './view/admin/groupetache-tache/groupe-tache/groupe-tache-create/groupe-tache-create.component';
import {ChefAgenceSearchBarGroupetacheComponent} from './view/chef-agence/chef-agence-groupetache-tache/chef-agence-groupe-tache/chef-agence-search-bar-groupetache/chef-agence-search-bar-groupetache.component';
import {ChefEquipeStatistiquesSuiviCollaborateurComponent} from './view/chef-equipe/chef-equipe-statistiques-suivi-collaborateur/chef-equipe-statistiques-suivi-collaborateur.component';
import {ChefEquipeCollaborateurDonneesComponent} from './view/chef-equipe/chef-equipe-statistiques-suivi-collaborateur/chef-equipe-collaborateur-donnees/chef-equipe-collaborateur-donnees.component';
import {ChefEquipeCriteresDeRechercheComponent} from './view/chef-equipe/chef-equipe-statistiques-suivi-collaborateur/chef-equipe-criteres-de-recherche/chef-equipe-criteres-de-recherche.component';
import {authInterceptorProviders} from './controller/service/security/auth.interceptor';
import {AllEquipesComponent} from './view/admin/all-equipes/all-equipes.component';
import {TousEquipesComponent} from './view/admin/all-equipes/tous-equipes/tous-equipes.component';
import {EquipCreateComponent} from './view/admin/all-equipes/tous-equipes/equip-create/equip-create.component';
import {EquipEditerComponent} from './view/admin/all-equipes/tous-equipes/equip-editer/equip-editer.component';
import {EquipListesComponent} from './view/admin/all-equipes/tous-equipes/equip-listes/equip-listes.component';
import {EquipViewComponent} from './view/admin/all-equipes/tous-equipes/equip-view/equip-view.component';
import {TousMembersComponent} from './view/admin/all-equipes/tous-members/tous-members.component';
import {MembrCreateComponent} from './view/admin/all-equipes/tous-members/membr-create/membr-create.component';
import {MembrEditerComponent} from './view/admin/all-equipes/tous-members/membr-editer/membr-editer.component';
import {MembrListesComponent} from './view/admin/all-equipes/tous-members/membr-listes/membr-listes.component';
import {MembrViewComponent} from './view/admin/all-equipes/tous-members/membr-view/membr-view.component';
import {AdminRechercheTacheComponent} from './view/admin/admin-recherche-tache/admin-recherche-tache.component';
import {TacheSearchComponent} from './view/admin/admin-recherche-tache/tache-search/tache-search.component';
import {TachelistComponent} from './view/admin/admin-recherche-tache/tachelist/tachelist.component';
import {TacheRechercheComponent} from './view/chef-equipe/tache-recherche/tache-recherche.component';
import {EditerTacheComponent} from './view/chef-equipe/tache-recherche/editer-tache/editer-tache.component';
import {ListeTasksComponent} from './view/chef-equipe/tache-recherche/liste-tasks/liste-tasks.component';
import {SearchTasksComponent} from './view/chef-equipe/tache-recherche/search-tasks/search-tasks.component';
import { EquipeSearchComponent } from './view/admin/all-equipes/equipe-search/equipe-search.component';
import {ChefAgenceCollaborateurListComponent} from './view/chef-agence/chef-agence-collaborateur/chef-agence-collaborateur-list/chef-agence-collaborateur-list.component';
import {ChefAgenceCollaborateurComponent} from './view/chef-agence/chef-agence-collaborateur/chef-agence-collaborateur.component';
import {CollaborateurListMessageComponent} from './view/collaborateur/message-collaborateur/collaborateur-list-message/collaborateur-list-message.component';
import {CollaborateurCreateMessageComponent} from './view/collaborateur/message-collaborateur/collaborateur-create-message/collaborateur-create-message.component';
import {MessageCollaborateurComponent} from './view/collaborateur/message-collaborateur/message-collaborateur.component';
import {AdminStatistiquesSuiviCollaborateurComponent} from './view/admin/admin-statistiques-suivi-collaborateur/admin-statistiques-suivi-collaborateur.component';
import {AdminCollaborateurDonneesComponent} from './view/admin/admin-statistiques-suivi-collaborateur/admin-collaborateur-donnees/admin-collaborateur-donnees.component';
import {AdminCriteresDeRechercheComponent} from './view/admin/admin-statistiques-suivi-collaborateur/admin-criteres-de-recherche/admin-criteres-de-recherche.component';
import {AdminStatistiquesClientComponent} from './view/admin/admin-statistiques-client/admin-statistiques-client.component';
import {AdminStatistiquesClientTableComponent} from './view/admin/admin-statistiques-client/admin-statistiques-client-table/admin-statistiques-client-table.component';
import {AdminSearchBarComponent} from './view/admin/admin-statistiques-client/admin-search-bar/admin-search-bar.component';
import {AdminStatistiquesProjetComponent} from './view/admin/admin-statistiques-projet/admin-statistiques-projet.component';
import {AdminSearchBarProjetComponent} from './view/admin/admin-statistiques-projet/admin-search-bar-projet/admin-search-bar-projet.component';
import {AdminTableStatistiquesProjetComponent} from './view/admin/admin-statistiques-projet/admin-table-statistiques-projet/admin-table-statistiques-projet.component';
import { RechercheCritereComponent } from './view/chef-agence/equipe-membre-equipe/recherche-critere/recherche-critere.component';
import { CritereRecherchesComponent } from './view/chef-equipe/equipe-members/critere-recherches/critere-recherches.component';
import {ChefEquipeCategorieGroupeTacheCategorieTacheComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-groupe-tache-categorie-tache.component';
import {ChefEquipeCategorieTacheComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-tache/chef-equipe-categorie-tache.component';
import {ChefEquipeCategorieTacheViewComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-tache/chef-equipe-categorie-tache-view/chef-equipe-categorie-tache-view.component';
import {ChefEquipeCategorieTacheListComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-tache/chef-equipe-categorie-tache-list/chef-equipe-categorie-tache-list.component';
import {ChefEquipeCategorieTacheEditComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-tache/chef-equipe-categorie-tache-edit/chef-equipe-categorie-tache-edit.component';
import {ChefEquipeCategorieTacheCreateComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-tache/chef-equipe-categorie-tache-create/chef-equipe-categorie-tache-create.component';
import {ChefEquipeCategorieGroupeTacheComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-groupe-tache/chef-equipe-categorie-groupe-tache.component';
import {ChefEquipeCategorieGroupeTacheViewComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-groupe-tache/chef-equipe-categorie-groupe-tache-view/chef-equipe-categorie-groupe-tache-view.component';
import {ChefEquipeCategorieGroupeTacheListComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-groupe-tache/chef-equipe-categorie-groupe-tache-list/chef-equipe-categorie-groupe-tache-list.component';
import {ChefEquipeCategorieGroupeTacheEditComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-groupe-tache/chef-equipe-categorie-groupe-tache-edit/chef-equipe-categorie-groupe-tache-edit.component';
import {ChefEquipeCategorieGroupeTacheCreateComponent} from './view/chef-equipe/chef-equipe-categorie-groupe-tache-categorie-tache/chef-equipe-categorie-groupe-tache/chef-equipe-categorie-groupe-tache-create/chef-equipe-categorie-groupe-tache-create.component';
import {ChefEquipeProjetGlobalComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet-global.component';
import {ChefEquipeTachesComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-taches/chef-equipe-taches.component';
import {ChefEquipeTachesViewComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-taches/chef-equipe-taches-view/chef-equipe-taches-view.component';
import {ChefEquipeTachesListComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-taches/chef-equipe-taches-list/chef-equipe-taches-list.component';
import {ChefEquipeTachesEditComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-taches/chef-equipe-taches-edit/chef-equipe-taches-edit.component';
import {ChefEquipeTachesCreateComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-taches/chef-equipe-taches-create/chef-equipe-taches-create.component';
import {ChefEquipeProjetEquipeViewListComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet-equipe/chef-equipe-projet-equipe-view-list/chef-equipe-projet-equipe-view-list.component';
import {ChefEquipeProjetEquipeEditListComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet-equipe/chef-equipe-projet-equipe-edit-list/chef-equipe-projet-equipe-edit-list.component';
import {ChefEquipeProjetEquipeCreateListComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet-equipe/chef-equipe-projet-equipe-create-list/chef-equipe-projet-equipe-create-list.component';
import {ChefEquipeProjetComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet/chef-equipe-projet.component';
import {ChefEquipeProjetViewComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet/chef-equipe-projet-view/chef-equipe-projet-view.component';
import {ChefEquipeProjetListComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-projet/chef-equipe-projet-list/chef-equipe-projet-list.component';
import {ChefEquipeLotComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-lot/chef-equipe-lot.component';
import {ChefEquipeLotViewComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-lot/chef-equipe-lot-view/chef-equipe-lot-view.component';
import {ChefEquipeLotListComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-lot/chef-equipe-lot-list/chef-equipe-lot-list.component';
import {ChefEquipeGroupTacheComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-groupe-tache/chef-equipe-groupe-tache.component';
import {ChefEquipeGroupTacheCreateComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-groupe-tache/chef-equipe-groupe-tache-create/chef-equipe-groupe-tache-create.component';
import {ChefEquipeGroupTacheEditComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-groupe-tache/chef-equipe-groupe-tache-edit/chef-equipe-groupe-tache-edit.component';
import {ChefEquipeGroupTacheListComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-groupe-tache/chef-equipe-groupe-tache-list/chef-equipe-groupe-tache-list.component';
import {ChefEquipeGroupTacheViewComponent} from './view/chef-equipe/chef-equipe-projet-global/chef-equipe-groupe-tache/chef-equipe-groupe-tache-view/chef-equipe-groupe-tache-view.component';
import {CreateMemberComponent} from './view/chef-equipe/equipe-members/membres/create-member/create-member.component';
import {EditeTacheComponent} from './view/admin/admin-recherche-tache/edite-tache/edite-tache.component';
import { CollaborateurViewMessageComponent } from './view/collaborateur/message-collaborateur/collaborateur-view-message/collaborateur-view-message.component';
import { MessageSearchComponent } from './view/collaborateur/message-collaborateur/message-search/message-search.component';
import { AdminProfileComponent } from './view/admin/admin-profile/admin-profile.component';
import { EditProfilComponent } from './view/admin/admin-profile/edit-profil/edit-profil.component';
import { CollaborateurTacheSearchComponent } from './view/collaborateur/collaborateur-groupetache-tache/collaborateur-tache/collaborateur-tache-search/collaborateur-tache-search.component';
import { AgenceViewComponent } from './view/admin/agence/agence-view/agence-view.component';
import { CollaborateurEquipesComponent } from './view/collaborateur/collaborateur-equipes/collaborateur-equipes.component';
import { CollaborateurTachesComponent } from './view/collaborateur/collaborateur-taches/collaborateur-taches.component';
import { CollaborateurListMessageDetailComponent } from './view/collaborateur/message-collaborateur/collaborateur-list-message-detail/collaborateur-list-message-detail.component';
import { CollaborateurViewMessageDetailComponent } from './view/collaborateur/message-collaborateur/collaborateur-view-message-detail/collaborateur-view-message-detail.component';
import { AdminMessageComponent } from './view/admin/admin-message/admin-message.component';
import { AdminMessageCreateComponent } from './view/admin/admin-message/admin-message-create/admin-message-create.component';
import { AdminMessageListComponent } from './view/admin/admin-message/admin-message-list/admin-message-list.component';
import { AdminMessageViewComponent } from './view/admin/admin-message/admin-message-view/admin-message-view.component';
import { AdminMessageSearchComponent } from './view/admin/admin-message/admin-message-search/admin-message-search.component';
import { AdminMessageDetailListComponent } from './view/admin/admin-message/admin-message-detail-list/admin-message-detail-list.component';
import { AdminMessageDetailViewComponent } from './view/admin/admin-message/admin-message-detail-view/admin-message-detail-view.component';
import { ChefAgenceMessageComponent} from "./view/chef-agence/chef-agence-message/chef-agence-message.component";
import { ChefAgenceMessageCreateComponent } from './view/chef-agence/chef-agence-message/chef-agence-message-create/chef-agence-message-create.component';
import { ChefAgenceMessageListComponent } from './view/chef-agence/chef-agence-message/chef-agence-message-list/chef-agence-message-list.component';
import { ChefAgenceMessageViewComponent } from './view/chef-agence/chef-agence-message/chef-agence-message-view/chef-agence-message-view.component';
import { ChefAgenceMessageDetailListComponent } from './view/chef-agence/chef-agence-message/chef-agence-message-detail-list/chef-agence-message-detail-list.component';
import { ChefAgenceMessageDetailViewComponent } from './view/chef-agence/chef-agence-message/chef-agence-message-detail-view/chef-agence-message-detail-view.component';
import { ChefAgenceMessageSearchComponent } from './view/chef-agence/chef-agence-message/chef-agence-message-search/chef-agence-message-search.component';
import { ChefEquipeMessageComponent } from './view/chef-equipe/chef-equipe-message/chef-equipe-message.component';
import { ChefEquipeMessageCreateComponent } from './view/chef-equipe/chef-equipe-message/chef-equipe-message-create/chef-equipe-message-create.component';
import { ChefEquipeMessageListComponent } from './view/chef-equipe/chef-equipe-message/chef-equipe-message-list/chef-equipe-message-list.component';
import { ChefEquipeMessageViewComponent } from './view/chef-equipe/chef-equipe-message/chef-equipe-message-view/chef-equipe-message-view.component';
import { ChefEquipeMessageSearchComponent } from './view/chef-equipe/chef-equipe-message/chef-equipe-message-search/chef-equipe-message-search.component';
import { ChefEquipeMessageDetailListComponent } from './view/chef-equipe/chef-equipe-message/chef-equipe-message-detail-list/chef-equipe-message-detail-list.component';
import { ChefEquipeMessageDetailViewComponent } from './view/chef-equipe/chef-equipe-message/chef-equipe-message-detail-view/chef-equipe-message-detail-view.component';
import {EquipesViewComponent} from './view/collaborateur/collaborateur-equipes/equipes-view/equipes-view.component';
import { TachesEditComponent } from './view/collaborateur/collaborateur-taches/taches-edit/taches-edit.component';



export const adminComponents = [AdminMainComponent,
    AdminSignUpComponent,
    AdminSignInComponent,
    AppMenuitemComponent,
    AdminConfigComponent,
    AdminTopBarComponent,
    AdminMenuComponent,
    AdminRightMenuComponent,
    AdminDashboardComponent,
    SignInComponent,
    SignUpComponent
];

export const collaborateurComponents = [
    CollaborateurMainComponent,
    CollaborateurMenuComponent,
    CollaborateurRightMenuComponent,
    CollaborateurMenuItemComponent,
    CollaborateurTopBarComponent,
    CollaborateurConfigComponent,
    CollaborateurDashboardComponent
];


export const chefAgenceComponents = [
    ChefAgenceSignInComponent,
    ChefAgenceDashboardComponent,
    ChefAgenceMainComponent,
    ChefAgenceSignUpComponent,
    ChefAgenceConfigComponent,
    ChefAgenceTopBarComponent,
    ChefAgenceRightMenuComponent,
    ChefAgenceMenuItemComponent,
    ChefAgenceMenuComponent,
    StatistiquesSuiviCollaborateurComponent,
    StatistiquesClientComponent,
    SearchBarComponent,
    StatistiquesClientTableComponent,
    StatistiquesProjetComponent,
    TableStatistiquesProjetComponent,
    SearchBarProjetComponent
];

// @ts-ignore
// @ts-ignore
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AppCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
    ],
    declarations: [
        AppComponent,
        adminComponents,
        collaborateurComponents,
        chefAgenceComponents,
        AppErrorComponent,
        AppNotfoundComponent,
        WelcomeComponent,
        BudgetCreateComponent,
        GroupetacheTacheComponent,
        GroupeTacheComponent,
        TacheComponent,
        GroupeTacheCreateComponent,
        GroupeTacheEditComponent,
        GroupeTacheListComponent,
        GroupeTacheViewComponent,
        SearchBarGroupetacheComponent,
        TacheCreateComponent,
        EditTacheComponent,
        TacheListComponent,
        TacheViewComponent,
        AdminProjetGlobalComponent,
        AdminGroupeTacheComponent,
        AdminGroupeTacheCreateComponent,
        AdminGroupeTacheEditComponent,
        AdminGroupeTacheListComponent,
        AdminGroupeTacheViewComponent,
        AdminTachesComponent,
        AdminTachesCreateComponent,
        AdminTachesEditComponent,
        AdminTachesListComponent,
        AdminTachesViewComponent,
        AdminProjetEquipeCreateListComponent,
        AdminProjetEquipeEditListComponent,
        AdminProjetEquipeViewListComponent,
        AdminProjetComponent,
        SearcheBarProjetComponent,
        ChefAgenceGroupetacheTacheComponent,
        ChefAgenceGroupeTacheComponent,
        ChefAgenceTacheComponent,
        SearchBarGroupetacheComponent,
        ChefAgenceTacheCreateComponent,
        ChefAgenceTacheEditComponent,
        ChefAgenceTacheListComponent,
        ChefAgenceTacheViewComponent,
        ChefAgenceGroupeTacheCreateComponent,
        AdminProjetEditComponent,
        AdminBudgetListComponent,
        EquipeMembreEquipeComponent,
        EquipeComponent,
        EquipeCreateComponent,
        EquipeEditComponent,
        EquipeListComponent,
        EquipeViewComponent,
        MembreEquipeComponent,
        MembreEquipeCreateComponent,
        MembreEquipeEditComponent,
        MembreEquipeViewComponent,
        MembreEquipeListComponent,
        AgenceCreateComponent,
        AgenceListComponent,
        AppMenuitemComponent,
        CriteresRechercheTacheComponent,
        ListeTachesComponent,
        RechercheTachesComponent,
        AdminEntrepriseClientComponent,
        AdminEntrepriseComponent,
        AdminClientComponent,
        AdminEntrepriseCreateComponent,
        AdminEntrepriseListComponent,
        AdminEntrepriseEditComponent,
        AdminEntrepriseViewComponent,
        AdminClientViewComponent,
        ChefAgenceGroupTacheCreateComponent,
        ChefAgenceGroupTacheEditComponent,
        ChefAgenceGroupTacheComponent,
        ChefAgenceGroupTacheViewComponent,
        AdminClientCreateComponent,
        AdminClientListComponent,
        AdminClientEditComponent,
        ChefAgenceEntrepriseClientComponent,
        ChefEquipeGroupTacheComponent,
        ChefAgenceEntrepriseComponent,
        ChefAgenceClientComponent,
        ChefAgenceClientCreateComponent,
        ChefAgenceClientEditComponent,
        ChefAgenceClientListComponent,
        ChefAgenceClientViewComponent,
        ChefAgenceEntrepriseComponent,
        ChefAgenceEntrepriseCreateComponent,
        ChefAgenceEntrepriseEditComponent,
        ChefAgenceEntrepriseViewComponent,
        ChefAgenceEntrepriseListComponent,
        AgenceEditComponent,
        ChefAgenceDemandeCongeComponent,
        ChefAgenceDemandeCongeCreateComponent,
        ChefAgenceDemandeCongeListComponent,
        ChefAgenceDemandeCongeEditComponent,
        ChefAgenceDemandeCongeViewComponent,
        CollaborateurDemandeCongeComponent,
        CollaborateurDemandeCongeCreateComponent,
        CollaborateurDemandeCongeListComponent,
        CollaborateurDemandeCongeViewComponent,
        StatistiquesSuiviCollaborateurComponent,
        CriteresDeRechercheComponent,
        ChefAgenceGroupeTacheEditComponent,
        ChefAgenceGroupeTacheListComponent,
        ChefAgenceGroupeTacheViewComponent,
        ChefAgenceSearchBarGroupetacheComponent,
        CollaborateurGroupetacheTacheComponent,
        CollaborateurGroupeTacheComponent,
        CollaborateurTacheComponent,
        CollaborateurGroupeTacheListComponent,
        CollaborateurGroupeTacheComponent,
        CollaborateurGroupeTacheViewComponent,
        CollaborateurTacheCreateComponent,
        CollaborateurTacheListComponent,
        CollaborateurTacheEditComponent,
        CollaborateurTacheViewComponent,
        ChefAgenceFacturesPaiementsComponent,
        ChefAgenceFacturesComponent,
        ChefAgencePaiementsComponent,
        ChefAgenceFactureCreateComponent,
        ChefAgenceSearchBarFactureComponent,
        ChefAgenceFactureEditComponent,
        ChefAgenceFactureListeComponent,
        ChefAgenceFactureViewComponent,
        ChefAgenceGroupTacheListComponent,
        ChefAgencePaiementCreateComponent,
        ChefAgencePaiementListeComponent,
        ChefAgencePaiementViewComponent,
        ChefAgencePaiementEditComponent,
        FacturesComponent,
        PaiementListeComponent,
        SearchBarFactureComponent,
        FacturesPaiementsComponent,
        FactureListeComponent,
        FactureEditComponent,
        PaiementCreateComponent,
        PaiementEditComponent,
        PaiementsComponent,
        PaiementViewComponent,
        AdminProjetCreateComponent,
        AdminProjetViewComponent,
        FactureCreateComponent,
        FactureViewComponent,
        AdminLotComponent,
        AdminLotCreateComponent,
        AdminLotEditComponent,
        AdminLotListComponent,
        AdminLotViewComponent,
        AdminProjetListComponent,
        CollaborateurDonneesComponent,
        ChefAgenceGroupetacheTacheComponent,
        ChefAgenceGroupeTacheComponent,
        ChefAgenceTacheComponent,
        ChefAgenceGroupeTacheCreateComponent,
        ChefAgenceGroupeTacheEditComponent,
        ChefAgenceGroupeTacheListComponent,
        ChefAgenceGroupeTacheViewComponent,
        SearchBarGroupetacheComponent,
        ChefAgenceTacheCreateComponent,
        ChefAgenceTacheEditComponent,
        ChefAgenceTacheListComponent,
        ChefAgenceTacheViewComponent,
        CollaborateurGroupetacheTacheComponent,
        CollaborateurGroupeTacheComponent,
        CollaborateurTacheComponent,
        CollaborateurGroupeTacheListComponent,
        CollaborateurGroupeTacheViewComponent,
        CollaborateurTacheCreateComponent,
        CollaborateurTacheListComponent,
        CollaborateurTacheEditComponent,
        CollaborateurTacheViewComponent,
        CollaborateurTacheSearchComponent,
        ChefEquipeGroupTacheCreateComponent,
        ChefEquipeGroupTacheEditComponent,
        ChefEquipeGroupTacheListComponent,
        ChefEquipeGroupTacheViewComponent,
        ChefAgenceFacturesPaiementsComponent,
        ChefAgenceFacturesComponent,
        ChefAgencePaiementsComponent,
        ChefAgenceFactureCreateComponent,
        ChefAgenceFactureEditComponent,
        ChefAgenceFactureListeComponent,
        ChefAgenceFactureViewComponent,
        ChefAgenceSearchBarFactureComponent,
        ChefAgencePaiementCreateComponent,
        ChefAgencePaiementListeComponent,
        ChefAgencePaiementViewComponent,
        ChefAgencePaiementEditComponent,
        FacturesComponent,
        FactureCreateComponent,
        FactureListeComponent,
        FactureViewComponent,
        SearchBarFactureComponent,
        FactureEditComponent,
        FacturesPaiementsComponent,
        PaiementsComponent,
        PaiementCreateComponent,
        PaiementEditComponent,
        PaiementListeComponent,
        PaiementViewComponent,
        AdminBudgetEditComponent,
        AdminBudgetViewComponent,
        AdminBudgetRechercheComponent,
        ChefEquipeMainComponent,
        ChefAgenceProjetGlobalComponent,
        ChefAgenceProjetComponent,
        ChefAgenceProjetCreateComponent,
        ChefAgenceProjetEditComponent,
        ChefAgenceProjetListComponent,
        ChefAgenceProjetViewComponent,
        ChefAgenceSearchBarProjetComponent,
        ChefAgenceLotComponent,
        ChefAgenceLotEditComponent,
        ChefAgenceLotViewComponent,
        ChefAgenceLotCreateComponent,
        ChefAgenceLotListComponent,
        ChefAgenceTachesComponent,
        ChefAgenceTachesCreateComponent,
        ChefAgenceTachesEditComponent,
        ChefAgenceTachesListComponent,
        ChefAgenceTachesViewComponent,
        ChefAgenceProjetEquipeCreateListComponent,
        ChefAgenceProjetEquipeEditListComponent,
        ChefAgenceProjetEquipeViewListComponent,
        ChefAgenceProjetGlobalComponent,
        ChefAgenceProjetCreateComponent,
        ChefAgenceProjetListComponent,
        ChefAgenceSearchBarProjetComponent,
        ChefAgenceProjetEditComponent,
        ChefAgenceProjetViewComponent,
        ChefAgenceLotComponent,
        ChefAgenceLotEditComponent,
        ChefAgenceLotViewComponent,
        ChefAgenceLotCreateComponent,
        ChefAgenceLotListComponent,
        ChefAgenceTachesComponent,
        ChefAgenceTachesCreateComponent,
        ChefAgenceTachesListComponent,
        ChefAgenceTachesEditComponent,
        ChefAgenceTachesViewComponent,
        ChefAgenceProjetEquipeCreateListComponent,
        ChefAgenceProjetEquipeEditListComponent,
        ChefAgenceProjetEquipeViewListComponent,
        ChefAgenceProjetComponent,
        ChefEquipeProjetGlobalComponent,
        ChefEquipeTachesComponent,
        ChefEquipeTachesViewComponent,
        ChefEquipeTachesListComponent,
        ChefEquipeTachesEditComponent,
        ChefEquipeTachesCreateComponent,
        ChefEquipeProjetEquipeViewListComponent,
        ChefEquipeProjetEquipeEditListComponent,
        ChefEquipeProjetEquipeCreateListComponent,
        ChefEquipeProjetComponent,
         ChefEquipeProjetViewComponent,
        ChefEquipeProjetListComponent,
        ChefEquipeLotComponent,
        ChefEquipeLotViewComponent,
        ChefEquipeLotListComponent,
        ChefConnexionComponent,
        ChefInscriptionComponent,
        EquipeMembersComponent,
        EquipesChefComponent,
        ListeEquipeComponent,
        ViewEquipeComponent,
        MembresComponent,
        ListeMembersComponent,
        ViewMembersComponent,
        ChefEquipeGroupetacheTacheComponent,
        ChefEquipeGroupeTacheComponent,
        ChefEquipeTacheComponent,
        ChefEquipeGroupeTacheCreateComponent,
        ChefEquipeGroupeTacheListComponent,
        ChefEquipeGroupeTacheEditComponent,
        ChefEquipeGroupeTacheViewComponent,
        ChefEquipeSearchBarGroupetacheComponent,
        ChefEquipeTacheCreateComponent,
        ChefEquipeTacheListComponent,
        ChefEquipeTacheEditComponent,
        ChefEquipeTacheViewComponent,
        TacheEditComponent,
        ChefEquipeDashboardComponent,
        ChefEquipeConfigComponent,
        ChefEquipeMenuItemComponent,
        ChefEquipeMainComponent,
        ChefEquipeMenuComponent,
        ChefEquipeTopBarComponent,
        ChefEquipeRightMenuComponent,
        EquipesChefComponent,
        MembresComponent,
        ChefAgenceCategorieGroupeTacheCategorieTacheComponent,
        ChefAgenceCategorieTacheComponent,
        CategorieGroupeTacheComponent,
        ChefAgenceCategorieGroupeTacheEditComponent,
        ChefAgenceCategorieGroupeTacheListComponent,
        ChefAgenceCategorieGroupeTacheCreateComponent,
        ChefAgenceCategorieGroupeTacheViewComponent,
        ChefAgenceCategorieTacheCreateComponent,
        ChefAgenceCategorieTacheEditComponent,
        ChefAgenceCategorieTacheListComponent,
        ChefAgenceCategorieTacheViewComponent,
        SearchDemandeCongeComponent,
        EditAllDemandeCongeComponent,
        ChefEquipeStatistiquesSuiviCollaborateurComponent,
        ChefEquipeCollaborateurDonneesComponent,
        ChefEquipeCriteresDeRechercheComponent,
        AllEquipesComponent,
        TousEquipesComponent,
        EquipCreateComponent,
        EquipEditerComponent,
        EquipListesComponent,
        EquipViewComponent,
        TousMembersComponent,
        MembrCreateComponent,
        MembrEditerComponent,
        MembrListesComponent,
        MembrViewComponent,
        AdminRechercheTacheComponent,
        TacheSearchComponent,
        TachelistComponent,
        TacheRechercheComponent,
        EditerTacheComponent,
        ListeTasksComponent,
        SearchTasksComponent,
        EquipeSearchComponent,
        ChefAgenceCollaborateurListComponent,
        ChefAgenceCollaborateurComponent,
        CollaborateurListMessageComponent,
        CollaborateurCreateMessageComponent,
        MessageCollaborateurComponent,
        AdminStatistiquesSuiviCollaborateurComponent,
        AdminCollaborateurDonneesComponent,
        AdminCriteresDeRechercheComponent,
        AdminStatistiquesClientComponent,
        AdminStatistiquesClientTableComponent,
        AdminSearchBarComponent,
        AdminStatistiquesProjetComponent,
        AdminSearchBarProjetComponent,
        AdminTableStatistiquesProjetComponent,
        RechercheCritereComponent,
        CritereRecherchesComponent,
        ChefEquipeCategorieGroupeTacheCategorieTacheComponent,
        ChefEquipeCategorieTacheComponent,
        ChefEquipeCategorieTacheViewComponent,
        ChefEquipeCategorieTacheListComponent,
        ChefEquipeCategorieTacheEditComponent,
        ChefEquipeCategorieTacheCreateComponent,
        ChefEquipeCategorieGroupeTacheComponent,
        ChefEquipeCategorieGroupeTacheViewComponent,
        ChefEquipeCategorieGroupeTacheListComponent,
        ChefEquipeCategorieGroupeTacheEditComponent,
        ChefEquipeCategorieGroupeTacheCreateComponent,
        CreateMemberComponent,
        EditeTacheComponent,
        AdminProfileComponent,
        EditProfilComponent,
        EditeTacheComponent,
        AgenceViewComponent,
        EditProfilComponent,
        CollaborateurEquipesComponent,
        CollaborateurTachesComponent,
        CollaborateurViewMessageComponent,
        MessageSearchComponent,
        EquipesViewComponent,
        TachesEditComponent,
        MessageSearchComponent,

        CollaborateurListMessageDetailComponent,
        CollaborateurViewMessageDetailComponent,
        AdminMessageComponent,
        AdminMessageCreateComponent,
        AdminMessageListComponent,
        AdminMessageViewComponent,
        AdminMessageSearchComponent,
        AdminMessageDetailListComponent,
        AdminMessageDetailViewComponent,
        ChefAgenceMessageComponent,
        ChefAgenceMessageCreateComponent,
        ChefAgenceMessageListComponent,
        ChefAgenceMessageViewComponent,
        ChefAgenceMessageDetailListComponent,
        ChefAgenceMessageDetailViewComponent,
        ChefAgenceMessageSearchComponent,
        ChefEquipeMessageComponent,
        ChefEquipeMessageCreateComponent,
        ChefEquipeMessageListComponent,
        ChefEquipeMessageViewComponent,
        ChefEquipeMessageSearchComponent,
        ChefEquipeMessageDetailListComponent,
        ChefEquipeMessageDetailViewComponent,

    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MenuService, MessageService, ConfirmationService, AdminMainComponent, authInterceptorProviders
    ],
    exports: [
        ChefEquipeRightMenuComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
