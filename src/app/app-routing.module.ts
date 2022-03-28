import { NgModule } from "@angular/core";
import { RouterModule,   Route } from "@angular/router";
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from "./views/profile/profile1/profile1.component";
import { BasicTableComponent } from "./views/tables/basic-table/basic-table.component";
import { Map1Component } from "./views/maps/map1/map1.component";
import { ModalsComponent } from "./views/modals/modals.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { RegisterComponent } from "./auth/component/register/register.component";
import { LoginComponent } from "./auth/component/login/login.component";


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  { path: 'dashboards', children: [{ path: 'v1', component: Dashboard1Component },] },
  { path: 'profiles', children: [{ path: 'profile1', component: Profile1Component },] },
  { path: 'tables', children: [{ path: 'table1', component: BasicTableComponent },] },
  { path: 'maps', children: [{ path: 'map1', component: Map1Component },] },
  { path: 'modals', component: ModalsComponent },
  
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
  { path: 'ayarlars', loadChildren: () => import('./ayarlars/ayarlars.module').then(m => m.AyarlarsModule) },
  { path: 'emeliyyat', loadChildren: () => import('./emeliyyat/emeliyyat.module').then(m => m.EmeliyyatModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },  
  { path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule), canActivate: [AuthGuard] },
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule), canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: RouterModule })],
 // exports: [RouterModule],
})
export class AppRoutingModule { }

//https://stackblitz.com/angular/kengylprgng?file=src%2Fapp%2Fapp-routing.module.ts