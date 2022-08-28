import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { FormsModule } from '@angular/forms';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { LoginComponent } from './auth-client-layout/login/login.component';
import { InscriptionComponent } from './auth-client-layout/inscription/inscription.component';
import { ChauffeurLayoutComponent } from './chauffeur-layout/chauffeur-layout.component';
import { LoginChauffComponent } from './auth-chauffeur-layout/login-chauff/login-chauff.component';
import { RegisterChauffComponent } from './auth-chauffeur-layout/register-chauff/register-chauff.component';
import { ForgetpassClientComponent } from './auth-client-layout/forgetpass-client/forgetpass-client.component';






@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    AuthAdminLayoutComponent,
    ClientLayoutComponent,
    LoginComponent,
    InscriptionComponent,
    ChauffeurLayoutComponent,
    LoginChauffComponent,
    RegisterChauffComponent,
    ForgetpassClientComponent,



  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutsModule { }
