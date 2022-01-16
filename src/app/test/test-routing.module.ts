import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedSortComponent } from './nested-sort/nested-sort.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { T1Component } from './t1/t1.component';
import { T2Component } from './t2/t2.component';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
  { 
    path: '', component:TestListComponent ,
    children:[
       { path: 't1', component: T1Component },
       { path: 't2', component: T2Component },   
       { path: 'filter', component: SearchTableComponent },
       { path: 'sorte', component: NestedSortComponent },     
     ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
