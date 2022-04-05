import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyarlarsRoutingModule } from './ayarlars-routing.module';
import { AyarListComponent } from './ayar-list/ayar-list.component';
import { HesabComponent } from './hesab/hesab.component';
import { AktivlerComponent } from './aktivler/aktivler.component';
import { MushteriComponent } from './mushteri/mushteri.component';
import { VergikodComponent } from './vergikod/vergikod.component';
import { VahidComponent } from './vahid/vahid.component';
import { ValyutaComponent } from './valyuta/valyuta.component';
import { TiplerComponent } from './tipler/tipler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BolmeComponent } from './bolme/bolme.component';
import { MaddeComponent } from './madde/madde.component';
import { AnbarComponent } from './anbar/anbar.component';
import { QrupComponent } from './qrup/qrup.component';
import { MdbModule } from '../imports/mdb.module';

@NgModule({
  declarations: [AyarListComponent, HesabComponent, AktivlerComponent,
     MushteriComponent,  VergikodComponent, VahidComponent,
      ValyutaComponent, TiplerComponent, BolmeComponent, MaddeComponent, AnbarComponent, QrupComponent],
  imports: [
    CommonModule,
    AyarlarsRoutingModule,
    MdbModule,
    HttpClientModule,
    ReactiveFormsModule,   
    FormsModule,
    RouterModule   
  ]
})
export class AyarlarsModule { }
