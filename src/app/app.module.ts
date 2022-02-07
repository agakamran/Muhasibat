import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { ProductsModule } from './products/products.module';
import { ManageModule } from './manage/manage.module';
import { SettingModule } from './setting/setting.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TestModule } from './test/test.module';
import { authInterceptorProviders } from 'src/helpers/jwt.interceptor';
import { AyarlarsModule } from './ayarlars/ayarlars.module';
import { EmeliyyatModule } from './emeliyyat/emeliyyat.module';
import { MaterialModule } from 'src/material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    FormsModule,    
    ViewsModule,   
    ReactiveFormsModule,
    AdminModule,
    AuthModule,
    ProductsModule,
    AyarlarsModule,
    TestModule, 
    ManageModule,
    SettingModule,
    EmeliyyatModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
      metaReducers
    }),    
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    MaterialModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
