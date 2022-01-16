import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent implements OnInit {
    @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
    @HostListener('input') oninput() {  this.searchItems();  }
    elements: any = [];
    headElements = ['ID', 'First', 'Last', 'Handle'];   
    searchText: string = '';  previous: string;
   
    constructor() {  }
    ngOnInit() {
        for (let i = 1; i <= 10; i++) {
            this.elements.push({
                id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i
            });
        }
        this.mdbTable.setDataSource(this.elements);
        this.previous = this.mdbTable.getDataSource();
    }
    searchItems() {
        const prev = this.mdbTable.getDataSource();
        console.log(this.searchText) ; 
        if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.elements = this.mdbTable.getDataSource();
        }
        if (this.searchText) {
        // console.log('ggg11') ; 
            this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
        }
    }
}
