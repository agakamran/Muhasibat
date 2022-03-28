import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { bolme, hesab, madde, tipleri } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-hesab',
  templateUrl: './hesab.component.html',
  styleUrls: ['./hesab.component.scss']
})
export class HesabComponent implements OnInit {

  hesabForm: FormGroup; 
  listtip:tipleri[] = [];
  _tip: tipleri[];
  listbolme: bolme[] = [];
  _bolme:  bolme[];
  listmadde:madde[] = [];
  _madde: madde[];
  //------------------------------
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  @HostListener('input') oninput() {  this.searchItems();  }
  elements: any = [];
  headElements = [ 'Hesnom', 'Hesname', 'MaddeName','BolmeName','TipName']; 
  searchText: string = '';  previous: string; 
  //---------------------------------
  listhesab:hesab[] = [];
 // filteredhesab: hesab[];
  hesab:hesab=new hesab(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _hesab: hesab[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private noti: NotificationService) {
    this.hesab.HesId="";
   }
  
   ngOnInit(): void {
    this.hesabForm = new FormGroup({  
      BId: new FormControl(''), 
      HesId: new FormControl(''),   
      Hesname: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      Hesnom: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      MId: new FormControl('', [Validators.required]),
      TipId: new FormControl('')
    });      
    this._caSer._gethesab().subscribe(list=>
    {         
           this.listhesab=list; 
           this.elements= this.listhesab; 
           this.mdbTable.setDataSource(this.elements);
           this.previous = this.mdbTable.getDataSource();
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
}
searchItems() {
  const prev = this.mdbTable.getDataSource();
 // console.log(this.searchText) ; 
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
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addhesab()
  {
    this.hesab.BId='';   
    this.hesab.HesId='';  
    this.hesab.Hesname='';  
    this.hesab.Hesnom=''; 
    this.hesab.MId='';    
    this.hesab.TipId=''; 
    this.hesab.ActivId='';          
  }
  _cline(){ 
    this.hesabForm = new FormGroup({  
       
      bId: new FormControl(''),
      HesId: new FormControl(''),
      Hesname: new FormControl(''),
      Hesnom: new FormControl(''),
      MId: new FormControl(''),
      TipId: new FormControl(''),
      ActivId: new FormControl(''),
      });
     
   }
   _edithesab(ca:hesab){  
    // console.log(ca) 
      this.hesab.BId =this.listbolme.find(x=>x.bId==ca.BId)!.bolmeName; 
     this.hesab.HesId = ca.HesId;
     this.hesab.Hesname = ca.Hesname;
     this.hesab.Hesnom = ca.Hesnom;
      this.hesab.MId =this.listmadde.find(x=>x.MId==ca.MId)!.MaddeName;
      this.hesab.TipId =this.listtip.find(x=>x.TipId==ca.TipId)!.TipName;
     //console.log(this.hesab)    
     }
 onadd()
  { 
    if(this.hesabForm.valid)  
    {
       var p={
        BId:this.hesab.BId  ,
         HesId: this.hesabForm.value.HesId,
         Hesname: this.hesabForm.value.Hesname,
         Hesnom: this.hesabForm.value.Hesnom,
        MId:this.hesabForm.value.MId,
        TipId:this.hesabForm.value.TipId,
        ActivId:this.hesabForm.value.ActivId
      }
      //  console.log(p)
       this._caSer._poshesab(p).subscribe();   

       this._addhesab(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.noti.warn('!Deleted successfully');     
        this._caSer._delhesab(this.hesab).subscribe();         
  } 

}
