import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlishComponent } from './alish/alish.component';
import { SatishComponent } from './satish/satish.component';
import { HesablashmaComponent } from './hesablashma/hesablashma.component';
import { VergiComponent } from './vergi/vergi.component';
import { OhdelikComponent } from './ohdelik/ohdelik.component';
import { KapitalComponent } from './kapital/kapital.component';
import { GelirComponent } from './gelir/gelir.component';
import { XercComponent } from './xerc/xerc.component';
import { DvidentComponent } from './dvident/dvident.component';
import { MDBmaterialModule } from 'src/mdbmaterial/mdbmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmeliylistComponent } from './emeliylist/emeliylist.component';
import { EmeliyyatRoutingModule } from './emeliyyat-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ElqaimealishComponent } from './elqaimealish/elqaimealish.component';
import { QaimelersComponent } from './qaimelers/qaimelers.component';
import { QaimedetalComponent } from './qaimedetal/qaimedetal.component';
import { AxtarishComponent } from './axtarish/axtarish.component';
//import { AgGridModule } from '@ag-grid-community/angular';
//import { MaterialModule } from 'src/material/material.module';

import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AlishComponent, SatishComponent, 
    HesablashmaComponent,  VergiComponent, 
    OhdelikComponent, KapitalComponent,
     GelirComponent, XercComponent, DvidentComponent, EmeliylistComponent, ElqaimealishComponent, QaimelersComponent, QaimedetalComponent, AxtarishComponent],
  imports: [
    CommonModule,
    EmeliyyatRoutingModule,
    MDBmaterialModule,
    HttpClientModule,
    ReactiveFormsModule,   
    FormsModule,
    RouterModule ,
    InfiniteScrollModule,
   // MaterialModule
   
   AgGridModule.withComponents([])
  ]
})
export class EmeliyyatModule { }
