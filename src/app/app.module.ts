import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';

import { CodepromoComponent } from './views/admin/codepromo/codepromo.component';
import { DetailleclientComponent } from './views/admin/detailleclient/detailleclient.component';
import { EditnotifComponent } from './views/admin/editnotif/editnotif.component';

import { NoteStarComponent } from './views/admin/note-star/note-star.component';
import { NotificationComponent } from './views/admin/notification/notification.component';
import { PaiementComponent } from './views/admin/paiement/paiement.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { TypevehicleComponent } from './views/admin/typevehicle/typevehicle.component';


import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps'

import { NavbarchaufComponent } from './views/chauffeurs/navbarchauf/navbarchauf.component';
import { MapComponent } from './views/chauffeurs/map/map.component';
import { MapadminComponent } from './views/admin/mapadmin/mapadmin.component';

import { CommandeComponent } from './views/clients/commande/commande.component';
import { AgmDirectionModule } from 'agm-direction';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { ContactComponent } from './views/front/contact/contact.component';
import { ReservationComponent } from './views/front/reservation/reservation.component';
import { ListeContactComponent } from './views/admin/liste-contact/liste-contact.component';
import { ListerequeteClientComponent } from './views/admin/listerequete-client/listerequete-client.component';
import { ListerequeteChauffeurComponent } from './views/admin/listerequete-chauffeur/listerequete-chauffeur.component';
import { BlogComponent } from './views/front/blog/blog.component';
import { ListHistoriqueClientComponent } from './views/clients/list-historique-client/list-historique-client.component';
import { AddblogComponent } from './views/admin/addblog/addblog.component';
import { ListPostComponent } from './views/admin/list-post/list-post.component';
import { ListTypevehiculeComponent } from './views/admin/list-typevehicule/list-typevehicule.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    PaiementComponent,

    CodepromoComponent,
    TypevehicleComponent,
    ProfileComponent,
    EditnotifComponent,
    NoteStarComponent,
    DetailleclientComponent,
    NavbarchaufComponent,
    MapComponent,
    MapadminComponent,
    CommandeComponent,
    ContactComponent,
    ReservationComponent,
    ListeContactComponent,
    ListerequeteClientComponent,
    ListerequeteChauffeurComponent,
    BlogComponent,
    ListHistoriqueClientComponent,
    AddblogComponent,
    ListPostComponent,
    ListTypevehiculeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,

  //   AgmCoreModule.forRoot({apiKey:'AIzaSyCNMgSJml7Zm1_mgLT2Fgw4_vSjGt6hwvs',
  //   libraries: ['places', 'drawing', 'geometry'],
  //  }),
    AgmDirectionModule,
    GoogleMapsModule,
    GooglePlaceModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
 


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
