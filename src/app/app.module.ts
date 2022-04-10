import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from 'src/imports/material.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { authInterceptorProviders } from 'src/util/jwt.interceptor';
import { HttpClientModule } from '@angular/common/http';

// import { ProductsModule } from './products/products.module';
// import { ManageModule } from './manage/manage.module';
// import { SettingModule } from './setting/setting.module';
//import { TestModule } from './test/test.module';
// import { authInterceptorProviders } from 'src/helpers/jwt.interceptor';
// import { AyarlarsModule } from './ayarlars/ayarlars.module';
// import { EmeliyyatModule } from './emeliyyat/emeliyyat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({ apiKey: '' }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ViewsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    // ProductsModule,
    // AyarlarsModule,
    //TestModule,
    // ManageModule,
    // SettingModule,
    // EmeliyyatModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    //AgGridModule.withComponents([]),
    MaterialModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
