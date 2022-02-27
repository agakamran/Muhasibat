import { Component,OnInit// EventEmitter, HostListener, Input,  Output, ViewChild 
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//import { MdbTableDirective } from 'angular-bootstrap-md';
import { Productmaster } from 'src/models/_muhasibat';
import { MymuhasibService } from 'src/services/mymuhasib.service';

@Component({
  selector: 'app-qaimelers',
  templateUrl: './qaimelers.component.html',
  styleUrls: ['./qaimelers.component.scss']
})
export class QaimelersComponent implements OnInit {
  title='Electron qaimeler';
   //------------------------------
  // @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  // @HostListener('input') oninput() {  this.searchItems();  }
   elements: any = [];
   headElements = [ '№','Voen','Firma', 'Serial','Sum','Edv','Cemi','Pay','Tarixi']; //'Qrupname', 
   searchText: string = '';  previous: string; 
   cemi1:number=0;edv1:number=0; yekunmeb1:number=0;
   //---------------------------------
  //  @Input()  pmasId: Productmaster[];
  //  @Output() qaimeSelected: EventEmitter<string> = new EventEmitter();
   //---------------------------------
  qaimeForm: FormGroup; 
  listqaime:any[] = []; 
  emel:Productmaster=new Productmaster();
  constructor(private _caSer: MymuhasibService) { }

  ngOnInit(): void {
    this.qaimeForm = new FormGroup({
      emeltarixi: new FormControl('', [Validators.required])
    });    
     // this._getqaime();
    }
  _getqaime(){  
   // console.log('XX') 
      this._caSer._getqaimeler(this.qaimeForm.value.emeltarixi).subscribe(list=> {
        this.listqaime=list; 
        this.elements= this.listqaime; 
     
       console.log(this.listqaime)
       this.listqaime.forEach(el => {      
         //-------------footer-----------
        this.cemi1 =this.cemi1  + el.kimden_sum;
        this.edv1 =this.edv1  + el.edv;
        this.yekunmeb1 = this.yekunmeb1  + Number.parseFloat(el.yekunmeb); 
       
      });
    //  this.mdbTable.setDataSource(this.elements);
     // this.previous = this.mdbTable.getDataSource();
         //  console.log(this.listqaime)                        
       }, error => console.error(error + 'Melumat yoxdur!'));
      
  } 
  // searchItems() {
  //   const prev = this.mdbTable.getDataSource();
  //  // console.log(this.searchText) ; 
  //   if (!this.searchText) {
  //       this.mdbTable.setDataSource(this.previous);
  //       this.elements = this.mdbTable.getDataSource();
  //   }
  //   if (this.searchText) {
  //   // console.log('ggg11') ; 
  //       this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
  //       this.mdbTable.setDataSource(prev);
  //   }
  // }
  // _selqaime(pmasId: string) {
  //    // console.log('ffa')
  //     this.qaimeSelected.emit(pmasId);
  // }
}
