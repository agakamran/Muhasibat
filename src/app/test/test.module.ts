import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestListComponent } from './test-list/test-list.component';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { NestedSortComponent } from './nested-sort/nested-sort.component';
import { FormsModule } from '@angular/forms';
import { MdbModule } from '../imports/mdb.module';
import { MaterialModule } from '../imports/material.module';
//import { CountryService } from './tabserch/country.service';


@NgModule({
  declarations: [ TestListComponent, T1Component, T2Component,
     SearchTableComponent,
     NestedSortComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    MdbModule,
     MaterialModule,
     FormsModule
    // HttpClientModule,
    
  //  CountryService
  ],
  exports: [],
  bootstrap: []
})
export class TestModule { }
