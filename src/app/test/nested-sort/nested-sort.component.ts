import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { bolme, hesab, madde, tipleri } from 'src/models/_muhasibat';
//import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-nested-sort',
  templateUrl: './nested-sort.component.html',
  styleUrls: ['./nested-sort.component.scss']
})
export class NestedSortComponent implements OnInit {
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  @HostListener('input') oninput() {  this.searchItems();  }
  elements: any = [];
  headElements = ['id', 'first', 'last', 'handle']; 
  searchText: string = '';  previous: string; 
 // headElements = [ 'Hesnom', 'Hesname', 'MaddeName','BolmeName','TipName'];
  listtip:tipleri[] = [];
  _tip: tipleri[];
  listbolme: bolme[] = [];
  _bolme:  bolme[];
  listmadde:madde[] = [];
  _madde: madde[];
  listhesab:hesab[] = [];
  constructor(//private _caSer: AyarlarService
    ) { }
  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
    this.elements.push({ id: i, first: 'User ' + i,
    last: 'Name ' + i, handle: 'Handle ' + i });
    }
    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();
   /* this._caSer._gethesab().subscribe(list=>
    {         
          this.listhesab=list; 
          this.elements= this.listhesab;             
          // console.log(this.listhesab)                        
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
      this._caSer._gettip().subscribe(list=>
      {         
            this.listtip=list;   
            // console.log(this.listtip)                                  
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
      this._caSer._getmadde().subscribe(list=>
      {         
              this.listmadde=list;                                    
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
      this._caSer._getbolme().subscribe(list=>
      {         
                   this.listbolme=list;                                     
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
      this.mdbTable.setDataSource(this.elements);
      this.previous = this.mdbTable.getDataSource();*/
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
