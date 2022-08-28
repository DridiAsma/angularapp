import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layouts/auth-admin-layout/auth-admin-layout.component';
import { LoginChauffComponent } from './layouts/auth-chauffeur-layout/login-chauff/login-chauff.component';
import { RegisterChauffComponent } from './layouts/auth-chauffeur-layout/register-chauff/register-chauff.component';
import { InscriptionComponent } from './layouts/auth-client-layout/inscription/inscription.component';
import { LoginComponent } from './layouts/auth-client-layout/login/login.component';
import { ChauffeurLayoutComponent } from './layouts/chauffeur-layout/chauffeur-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';


import { GuardadminGuard } from './views/guards/guardadmin.guard';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,
  children:[
    {path:'', loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'blog', loadChildren:()=>import('./views/front/blog/blog.module').then(m=>m.BlogModule)},
    {path:'contact', loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)},
    {path:'reservation', loadChildren:()=>import('./views/front/reservation/reservation.module').then(m=>m.ReservationModule)},

  ]
 },



 {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'mapadmin',loadChildren:()=>import('./views/admin/mapadmin/mapadmin.module').then(m=>m.MapadminModule)},
  {path:'allclient',loadChildren:()=>import('./views/admin/allclient/allclient.module').then(m=>m.AllclientModule)},
  {path:'allchauffeur',loadChildren:()=>import('./views/admin/allchauffeur/allchauffeur.module').then(m=>m.AllchauffeurModule)},
  {path:'paiement',loadChildren:()=>import('./views/admin/paiement/paiement.module').then(m=>m.PaiementModule)},
  {path:'notification',loadChildren:()=>import('./views/admin/notification/notification.module').then(m=>m.NotificationModule)},
  {path:'detailleclient/:id',loadChildren:()=>import('./views/admin/detailleclient/detailleclient.module').then(m=>m.DetailleclientModule)},
  {path:'addblog',loadChildren:()=>import('./views/admin/addblog/addblog.module').then(m=>m.AddblogModule)},
  {path:'codepromo',loadChildren:()=>import('./views/admin/codepromo/codepromo.module').then(m=>m.CodepromoModule)},
  {path:'allcodepromo',loadChildren:()=>import('./views/admin/allcodepromo/allcodepromo.module').then(m=>m.AllcodepromoModule)},
  {path:'typevehicle',loadChildren:()=>import('./views/admin/typevehicle/typevehicle.module').then(m=>m.TypevehicleModule)},
  {path:'profile',loadChildren:()=>import('./views/admin/profile/profile.module').then(m=>m.ProfileModule)},
  {path:'edit/:id',loadChildren:()=>import('./views/admin/editnotif/editnotif.module').then(m=>m.EditnotifModule)},
  {path:'noteStar',loadChildren:()=>import('./views/admin/note-star/note-star.module').then(m=>m.NoteStarModule)},
  {path:'requetClient',loadChildren:()=>import('./views/admin/listerequete-client/listerequete-client.module').then(m=>m.ListerequeteClientModule)},
  {path:'requetChauffeur',loadChildren:()=>import('./views/admin/listerequete-chauffeur/listerequete-chauffeur.module').then(m=>m.ListerequeteChauffeurModule)},
  {path:'contact',loadChildren:()=>import('./views/admin/liste-contact/liste-contact.module').then(m=>m.ListeContactModule)},
  {path:'addblog', loadChildren:()=>import('./views/admin/addblog/addblog.module').then(m=>m.AddblogModule)},
  {path:'listblog', loadChildren:()=>import('./views/admin/list-post/list-post.module').then(m=>m.ListPostModule)},
  {path:'update/:id',loadChildren:()=>import('./views/admin/list-post/update-post/update-post.module').then(m=>m.UpdatePostModule)},
 ]},

 {path:'client',component:ClientLayoutComponent,
 children:[
 {path:'commande',loadChildren:()=>import('./views/clients/commande/commande.module').then(m=>m.CommandeModule)},
 ]},

 {path:'chauffeur',component:ChauffeurLayoutComponent,
  children:[
    {path:'map',loadChildren:()=>import('./views/chauffeurs/map/map.module').then(m=>m.MapModule)},


  ]},

  /* Auth chauffeur*/
 {path:'admin/login',component:AuthAdminLayoutComponent},
   /* Auth client*/
 {path:'client/login',component:LoginComponent},
 {path:'client/inscription',component:InscriptionComponent},
  /* Auth chauffeur*/
 {path:'chauffeur/login',component:LoginChauffComponent},
 {path:'chauffeur/register',component:RegisterChauffComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
