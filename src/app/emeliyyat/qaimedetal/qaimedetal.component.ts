import { Component,   OnInit, ViewChild } from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { Productmaster } from 'src/models/_muhasibat';
import { MymuhasibService } from 'src/services/mymuhasib.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-qaimedetal',
  templateUrl: './qaimedetal.component.html',
  styleUrls: ['./qaimedetal.component.scss']
})
export class QaimedetalComponent implements OnInit {
  title='Electron qaime detal';
  errorMessage: string;
   //------------------------------
   @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  // @HostListener('input') oninput() {  this.searchItems();  }
   elements: any = [];
   headElements = [ 'Qrupname', 'Voen','Firma', 'Serial','Sum','Pay','Tarixi']; //
   searchText: string = '';  previous: string; 
  //------------------------------------------------
  listqaime:Productmaster[] = []; 
  //@Input() pmasId: Productmaster[];
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _caSer: MymuhasibService) { }

  ngOnInit(): void {
    const param = this._route.snapshot.paramMap.get('id');
    console.log(param)
    if (param) {
    //  const pmasId = +param;
      this._getqaime(param);
    }    
  }
  _getqaime(pmasId:any){
    console.log(pmasId)
    this._caSer._getqaimedetal(pmasId).subscribe(list=>
      this.listqaime = list,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this._router.navigate(['/qaimeler']);
  }
}