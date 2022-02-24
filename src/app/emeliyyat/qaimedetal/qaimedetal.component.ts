import { Component,   OnInit } from '@angular/core';
//import { MdbTableDirective } from 'angular-bootstrap-md';
//import { Productmaster } from 'src/models/_muhasibat';
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
  // @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  // @HostListener('input') oninput() {  this.searchItems();  }
   elements: any = [];
   headElements = [ 'Yola salınmış malların,görülmüş  işlərin və ya  göstərilmiş   xidmətlərin ad',
                            'Miqdarı, həcmi' ,'Vahidinin buraxiliş qiyməti', 'ƏDV-yə cəlb edilən',
                            'Vergi tutulan əməliyyatlardan ödənilməli ƏDV',                    
   'Yekun məbləğ']; //,'Vergikodununadi'
   searchText: string = '';  previous: string; 
  //------------------------------------------------
  listqaime:any[] = []; 
  _qrup='';_fir=''; _alici='';
  seryal='';cemi1:number=0;edv1:number=0; yekunmeb1:number=0;
  //@Input() pmasId: Productmaster[];
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _caSer: MymuhasibService) { }

  ngOnInit(): void {
    const param = this._route.snapshot.paramMap.get('id');
   // console.log(param)
    if (param) {
    //  const pmasId = +param;
      this._getqaime(param);
    }    
  }
  _getqaime(pmasId:any){
   // console.log(pmasId)
   this._caSer._getqaimedetal(pmasId).subscribe(list=> {
    this.listqaime=list; 
    //console.log(this.listqaime)
    
    var qru = new Set(this.listqaime.map(item => item.qrupname));
     qru.forEach(x => {  this._qrup=x.toString();  });
     var fir = new Set(this.listqaime.map(item => item.firma));
     fir.forEach(x => {  this._fir=x.toString();  });

     var alic = new Set(this.listqaime.map(item => item.shirvoen));
     alic.forEach(x => {  this._alici=x.toString();  });

     var alicic = new Set(this.listqaime.map(item => item.shiricrachi));
     alicic.forEach(x => {  this._alici +=  '   ' +x.toString();  });

    var ser = new Set(this.listqaime.map(item => item.serial));
    ser.forEach(x => {  this.seryal=x.toString();  });  
    
    var tar = new Set(this.listqaime.map(item => item.emeltarixi));
    tar.forEach(x => {  this.seryal +=  '   ' +  x.toString();  });  
    //---------------------footer------------------------------
    var cem = new Set(this.listqaime.map(item => item.cemi));
    cem.forEach(x => {  this.cemi1 =this.cemi1  + Number.parseFloat(x)   ;  });
    var ed = new Set(this.listqaime.map(item => item.edv));
    ed.forEach(x => {  this.edv1 =this.edv1  + Number.parseFloat(x)   ;  });
    var yeku = new Set(this.listqaime.map(item => item.yekunmeb));
    yeku.forEach(x => {  this.yekunmeb1 =this.yekunmeb1  + Number.parseFloat(x)   ;  });
    //--------------------------------------------------------------                         
   }, error => console.error(error + 'Melumat yoxdur!'));
   
   
     
     
  }
  onBack(): void {
    this._router.navigate(['emeliyyat/qaimeler']);
  }
}