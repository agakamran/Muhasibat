import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs/operators';
import { aktivi, edeve, emel, hesab, mushteri, vahid, valyuta } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-satish',
  templateUrl: './satish.component.html',
  styleUrls: ['./satish.component.scss']
})
export class SatishComponent implements OnInit {
 // <Select> widget with infinite scroll dropdown

 // @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
 emelForm: FormGroup; 
 emel:emel=new emel();
 listactiv:aktivi[] = [];
 _activ:  aktivi[];  
 listhesab:hesab[] = [];
 _debhesab: hesab[]=[];
 _kredhesab: hesab[]=[];
 listmushteri:mushteri[] = []; _mush='';
 listvalyuta:valyuta[]=[];
 //_mushteri: mushteri[];
  
 //----------------------- 
 listemel:emel[] = [];_eme='';  

  
 listvahid:vahid[] = [];_vah='';
 _vahid:vahid[];
// listArray: vergi[] = [];
 //---------------------------------
 total:number=0;
 limit:number = 10;
 data = Array.from({length: this.total}).map((_, i) => `Option ${i}`);
 offset = 0;
 // options = new BehaviorSubject<vergi[]>([]);
 // options$: Observable<vergi[]>;
 
 //-------------------------


 _actname='';hesId='';_debit='';_kredit='';
 _edeve:edeve[]=[{eid: '1', ename: '0,18%'},{eid: '2', ename: '0'} ];  _ede='';
 _sat:number=0;pors:number=20; //_miq:number;_qut:number;
 malkodu=''; ch:boolean=false;title=''
 constructor(private _caSer: AyarlarService ,private notif: NotificationService )
 {  
     this.title="SATIŞ" ; //'ALIŞ','SATIŞ','HESABLAŞMALAR','VERGİLƏR','ÖHDƏLİKLƏR','KAPİTALLAR','GƏLİRLƏR','XƏRCLƏR','DVIDENTLƏR'
 }
 
 ngOnInit(): void {
   this._cline();
   this.ch=true;
  
   this._caSer._getaktiv().subscribe(list=> {
      this.listactiv=list;    //  console.log(this.listactiv)                        
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
   this._caSer._gethesab().subscribe(list=> {         
              this.listhesab=list; 
             //console.log(this.listhesab)                        
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
  this._caSer._getmushteri().subscribe(list=> {         
              this.listmushteri=list; //console.log(this.listmushteri)                        
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));    
   this._caSer._getvahid().subscribe(list=> {         
            this.listvahid=list;   // console.log(this.listvahid)                        
       }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 

   this._caSer._getemeliyat('').subscribe(list=> {             
         this.listemel=list;    
           console.log(this.listemel) 
       // this.total = Math.ceil(this.listemel.length / this.limit);                          
    }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    this._caSer._getvalyuta().subscribe(list=> {         
          this.listvalyuta=list; 
          this.selaz('AZN');
          
         // console.log(this.listvalyuta)                        
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
      //https://stackblitz.com/edit/ng-mat-select-infinite-scroll?file=src%2Fapp%2Fapp.component.html
     // this.getNextBatch();
     
 } 
 _cline(){
  this.emelForm = new FormGroup({  
    AId: new FormControl('', [Validators.required]),   
    DhesId: new FormControl('', [Validators.required]),
    KhesId: new FormControl('', [Validators.required]),
    MushId: new FormControl('', [Validators.required]),
    Miqdar: new FormControl(0, [Validators.required]),
    Mubmiqdar: new FormControl(1, [Validators.required]),

    vahidqiymeti_alish: new FormControl(0, [Validators.required]),
    vahidqiymeti_satish: new FormControl(0, [Validators.required]),   
    malkodu: new FormControl(''),
    vergiId: new FormControl('', [Validators.required]),           
     
    emeltarixi: new FormControl('', [Validators.required]),
     qeyd: new FormControl(''),

     vId: new FormControl('',[Validators.required]), 
     edv: new FormControl('', [Validators.required]),

     edvye_celbedilen: new FormControl(0),
     edvye_celbedilmeyen: new FormControl(0),
     valId: new FormControl('', [Validators.required]), 
     kurs:new FormControl(0)
    
 }); 
}
 selhesab(sat:any){ this._sat=parseFloat(sat) + (sat * this.pors/100);  } 
 
 selacti(act:any){  this._actname=act; 
  this._kredit='';this._debit='';
   this._debhesab=this.listhesab.filter(k=>k.ActivId===this._actname);
   this._kredhesab=this.listhesab.filter(k=>k.ActivId===this._actname);   
 }
 seldebit(deb:any){ this.hesId=deb;   
   this._debit = this.listhesab.find(kam => kam.HesId === this.hesId)!.Hesname; 
  }
 selkred(kred:any){ this.hesId=kred;
   this._kredit = this.listhesab.find(kam => kam.HesId === this.hesId)!.Hesname;   
 }
 selmush(mush:any){ this._mush=mush; //console.log(mush)
  }
 selverg(ver:any){ this._eme= ver;   
  //console.log(this._eme)
  var vve=this.listemel.find(k=>k.EmdetId===this._eme);   
   this.malkodu = vve!.Vergikodu!.toString();
  this.emel.AId = vve!.AId;
  this.selacti(this.emel.AId);
  this.emel.Edv=vve!.Edv;
  this.seledeve(this.emel.Edv);
  console.log(vve!.DhesId)
  this.emel.DhesId=vve!.DhesId;
  this.seldebit(this.emel.DhesId);
  console.log(vve!.KhesId)
  this.emel.KhesId=vve!.KhesId;
  this.selkred(this.emel.KhesId);

  this.emel.VId=this.listvahid.find(k=>k.VId=== vve?.VId)!.VId;
  //  this._vah=this.emel.VId;
    this.selvahid(this.emel.VId);
    // if(vve?.edv_tar===null){this.seledeve("0,18%");}
    // else{this.seledeve("0");}    
    //console.log(vve) 
   }
   selvahid(va:any){
    // console.log(va)
    this._vah=va;
     let x=this.listvahid.find(k=>k.VId=== va);
     if(x!=null){  this.emel.Submiqdar=1;  }
     //console.log(this.emel.qutuda)
   }
 seledeve(ede:any){ this._ede=ede; 
   if(this._ede== "0,18%"){ this.emel.Edvye_celbedilen=1;this.emel.Edvye_celbedilmeyen=0;}
   else{this.emel.Edvye_celbedilen=0;this.emel.Edvye_celbedilmeyen=1;}     //console.log(ede) 
 }
 selaz(val:any){this.emel.ValId=val; 
  // console.log(val)
   this.emel.Kurs=1;
 }
 selval(val:any){this.emel.ValId=val;
  // console.log(val)
   var _v=this.listvalyuta.filter(k=>k.Valname===this.emel.ValId && min(k.Tarix?.getUTCDate));
   _v.forEach(element => {
     this.emel.Kurs=element.Valnominal;
    // console.log(this.emel.Kurs)
   });
 }
 addemel(){
   
   if(this.emelForm.valid){
     var p={
      emdetId:'' ,
      userid:'',
      qid:this.title,
      aId:this.emelForm.value.aId,
      dhesId:this.emelForm.value.dhesId,
      khesId:this.emelForm.value.khesId,
      mushId:this.emelForm.value.mushId,
      miqdar:-(this.emelForm.value.miqdar),
      submiqdar:this.emelForm.value.submiqdar,
      vahidqiymeti_alish:this.emelForm.value.vahidqiymeti_alish,
      vahidqiymeti_satish:this._sat,
      vergiId:this.listemel.find(k=>k.EmdetId===this._eme)!.VergiId,
      vId:this.emelForm.value.VId,
      edv:this._ede,
      edvye_celbedilen:this.emelForm.value.edvye_celbedilen ,
      edvye_celbedilmeyen:this.emelForm.value.edvye_celbedilmeyen,
      emeltarixi:this.emelForm.value.emeltarixi,
      valId:this.emelForm.value.valId,      
      qeyd:this.emelForm.value.qeyd,
      kurs:this.emelForm.value.kurs
     }
       console.log(p)
      // this._caSer._posemeliyat(p).subscribe();        
      this._cline();   
      this.notif.success('::Submitted successfully');     
   }    
 }
}
