import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageListComponent } from './manage-list/manage-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { NeticeComponent } from './netice/netice.component';
import { MykabComponent } from './mykab/mykab.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { FirmaComponent } from './firma/firma.component';
import { HttpClientModule } from '@angular/common/http';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfileModule } from './profile/profile.module';
import { MdbModule } from '../imports/mdb.module';
import { ShirketComponent } from './shirket/shirket.component';
import { StoreModule } from '@ngrx/store';
import { ShirketsEffects } from './shirket/store/shirkets.effects';
import { EffectsModule } from '@ngrx/effects';
 
import * as fromShirkets from './shirket/store/shirkets.reducer';

//import { UploadFilesComponent } from './upload-files/upload-files.component';
//import { ProfilComponent } from './profil/profil.component';
//import { ProfileComponent } from './profile/containers/profile.component';

@NgModule({
  declarations: [ManageListComponent, ChangePasswordComponent,FirmaComponent,// ProfilComponent, 
     TwoFactorAuthenticationComponent, NeticeComponent,ShirketComponent,
      MykabComponent, AdditemComponent,// UploadFilesComponent
    ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    MdbModule,
    HttpClientModule,
    ReactiveFormsModule,   
    FormsModule,
    RouterModule,
    ProfileModule,
    StoreModule.forFeature('shirkets', fromShirkets.shirketsReducer),
    EffectsModule.forFeature([ShirketsEffects])
    ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class ManageModule { }
