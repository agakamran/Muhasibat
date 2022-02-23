import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlishComponent } from './alish/alish.component';
import { DvidentComponent } from './dvident/dvident.component';
import { ElqaimealishComponent } from './elqaimealish/elqaimealish.component';
import { EmeliylistComponent } from './emeliylist/emeliylist.component';
import { GelirComponent } from './gelir/gelir.component';
import { HesablashmaComponent } from './hesablashma/hesablashma.component';
import { KapitalComponent } from './kapital/kapital.component';
import { OhdelikComponent } from './ohdelik/ohdelik.component';
import { QaimedetalComponent } from './qaimedetal/qaimedetal.component';
import { QaimelersComponent } from './qaimelers/qaimelers.component';
import { SatishComponent } from './satish/satish.component';
import { VergiComponent } from './vergi/vergi.component';
import { XercComponent } from './xerc/xerc.component';

const routes: Routes = [{
  path: '', component:EmeliylistComponent ,
  children:[
     { path: 'alish', component: AlishComponent },
     { path: 'satish', component: SatishComponent },   
     { path: 'hesablashma', component: HesablashmaComponent },
     { path: 'vergi', component: VergiComponent },        
     { path: 'ohdelik', component: OhdelikComponent },
      { path: 'kapital', component: KapitalComponent }, 
      { path: 'gelir', component: GelirComponent },
      { path: 'xerc', component: XercComponent },
      { path: 'dvident', component: DvidentComponent },
      {path: 'eqaimealish',component:ElqaimealishComponent},      
      {path: 'qaimeler',component:QaimelersComponent},
      {path: 'qaimedet/:id',component:QaimedetalComponent},

   ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmeliyyatRoutingModule { }
