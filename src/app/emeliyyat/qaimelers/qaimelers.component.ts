import { Component,OnInit// EventEmitter, HostListener, Input,  Output, ViewChild 
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
   headElements1 = [ '№','Maladi','Miqdarı, həcmi' ,'Vahidinin buraxiliş qiyməti','Cəmi', 'ƏDV',
                            'Yekun məbləğ']; 
   searchText: string = '';  previous: string; 
   
   //---------------------------------
  //  @Input()  pmasId: Productmaster[];
  //  @Output() qaimeSelected: EventEmitter<string> = new EventEmitter();
   //---------------------------------
  qaimeForm: FormGroup; 
  listqaime:any[] = []; 
  listqaimedet: any[] = [];
  _qrup = ''; _fir = ''; _alici = ''; seryal = '';
   cemi:number=0;edv:number=0; yekunmeb: number = 0;
   cemi1: number = 0; edv1: number = 0; yekunmeb1: number = 0;
  emel:Productmaster=new Productmaster();
  constructor(private _caSer: MymuhasibService) { }

  ngOnInit(): void {
    this.qaimeForm = new FormGroup({
      Emeltarixi: new FormControl(''),
      searchText: new FormControl('')
    });    
     // this._getqaime();
    }
  _getqaime(){  
   // console.log('XX') 
    let tar = this.qaimeForm.value.Emeltarixi;
      this._caSer._getqaimeler(tar).subscribe(list=> {
        this.listqaime=list; 
        this.elements= this.listqaime; 
     
     //  console.log(this.listqaime)
        this.cemi =0; this.edv =0; this.yekunmeb=0;
       this.listqaime.forEach(el => {      
        //-------------footer-----------

        this.cemi =this.cemi  + el.Kimden_sum;
        this.edv =this.edv  + el.edv;
        this.yekunmeb = this.yekunmeb  + Number.parseFloat(el.yekunmeb); 
       
      });
    //  this.mdbTable.setDataSource(this.elements);
     // this.previous = this.mdbTable.getDataSource();
         //  console.log(this.listqaime)                        
       }, error => console.error(error + 'Melumat yoxdur!'));
    this.emel.Emeltarixi=undefined;
  } 

  _qaimedet(p:any){
    this._caSer._getqaimedetal(p.PmasId).subscribe(list => {
      this.listqaimedet = list;
     // console.log(this.listqaimedet)
      this.cemi1 = 0; this.edv1 = 0; this.yekunmeb1 = 0;
      this.listqaimedet.forEach(el => {
        this.seryal = el.Serial.toString();
        this.seryal += '   ' + el.Emeltarixi.toString();
        this._qrup = el.Qrupname.toString();
        this._fir = el.Firma.toString();
        this._alici = el.Shirvoen;
        this._alici += '   ' + el.Shiricrachi;
        //-------------footer-----------
       // console.log(el.yekunmeb)
        this.cemi1 = this.cemi1 + Number.parseFloat(el.cemi);
        this.edv1 = this.edv1 + Number.parseFloat(el.Edv);
        this.yekunmeb1 = this.yekunmeb1 + Number.parseFloat(el.yekunmeb);
        // this.yekunmeb1=this.yekunmeb1
      });

      // var qru = new Set(this.listqaime.map(item => item.qrupname));
      //  qru.forEach(x => {  this._qrup=x.toString();  });

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
