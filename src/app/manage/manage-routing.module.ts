import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageListComponent } from './manage-list/manage-list.component';
//import { ProfilComponent } from './profil/profil.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TwoFactorAuthenticationComponent } from './two-factor-authentication/two-factor-authentication.component';
import { NeticeComponent } from './netice/netice.component';
import { MykabComponent } from './mykab/mykab.component';
import { AdditemComponent } from './additem/additem.component';
//import { UploadFilesComponent } from './upload-files/upload-files.component';
import { FirmaComponent } from './firma/firma.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ProfileModule } from './profile/profile.module';
import { CustomersModule } from './customers/customers.module';
import { ProjectsModule } from './projects/projects.module';
import { ChartsDataModule } from './charts/charts.module';
import { ShirketComponent } from './shirket/shirket.component';
import { ProductsComponent } from './product/container/products/products.component';


const routes: Routes = [ 
  { 
      path:'',component:ManageListComponent,
     children: [
       { path: 'shirketimiz', component: ShirketComponent },  
       { path: 'product', component: ProductsComponent},
     // { path: 'profil', component: ProfilComponent},
      { path: 'ChangePassword', component: ChangePasswordComponent},
       { path: 'additem', component: AdditemComponent},
      { path: 'firma', component: FirmaComponent},
     // { path: 'uplod', component: UploadFilesComponent},
      { path: 'netice', component: NeticeComponent},
     // { path: 'externallogins', component: ExternalLoginsComponent},
      { path: 'TwoFactorAuthentication', component: TwoFactorAuthenticationComponent},
     // { path: 'EnableAuthenticator', component: EnableAuthenticatorComponent},
      { path: 'mykabinet', component: MykabComponent}, 
       { path: '', component: ShirketComponent },        
     //  { path: '', component: FirmaComponent}   ,
       { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) , canActivate: [AuthGuard]},
       { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), canActivate: [AuthGuard]},
       { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
       { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDataModule), canActivate: [AuthGuard] },
      ]
          
   } 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers:[ProfileModule,CustomersModule,ProjectsModule,ChartsDataModule],
  exports: [RouterModule,]
})
export class ManageRoutingModule { }
