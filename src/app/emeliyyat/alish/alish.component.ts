import { Component,  OnInit,// ViewChild 
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs/operators';

// import { BehaviorSubject, Observable } from 'rxjs';
// import { scan } from 'rxjs/operators';
import { aktivi, emel, edeve, hesab, mushteri, vahid, vergi, valyuta } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-alish',
  templateUrl: './alish.component.html',
  styleUrls: ['./alish.component.scss']
})
export class AlishComponent implements OnInit {

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
  listvergi:vergi[] = [];_ver='';  

   
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
      this.title="ALIŞ" ; // 'ALIŞ','SATIŞ','HESABLAŞMALAR'
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
    this._caSer._getvergi().subscribe(list=> {             
          this.listvergi=list;    //  console.log(this.listvergi) 
         this.total = Math.ceil(this.listvergi.length / this.limit);                          
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
      aId: new FormControl('', [Validators.required]),   
      dhesId: new FormControl('', [Validators.required]),
      khesId: new FormControl('', [Validators.required]),
      mushId: new FormControl('', [Validators.required]),
      miqdar: new FormControl(0, [Validators.required]),
      submiqdar: new FormControl(1, [Validators.required]),

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
  selverg(ver:any){ this._ver= ver;   
    var vve=this.listvergi.find(k=>k.Vergikodu===this._ver);
   
    this.malkodu=this._ver;
    this.emel.VId=this.listvahid.find(k=>k.VId=== vve?.VId)!.VId;
    this._vah=this.emel.VId;
    this.selvahid(this.emel.VId);
   // seledeve(ede:any)
   //console.log(vve)
   //console.log(vve!.edv_tar) 
    if(vve!.Edv_tar==null){ console.log('ggg')
      this.seledeve("0,18%");}
    else{ console.log('11')
      this.seledeve("0");}    
    
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
    let p={
       EmdetId:'' ,
       Userid:'',
       Qid:this.title,
       AId:this.emelForm.value.AId,
       DhesId:this.emelForm.value.DhesId,
       KhesId:this.emelForm.value.KhesId,
       MushId:this.emelForm.value.MushId,
       Miqdar:this.emelForm.value.Miqdar,
       Submiqdar:this.emelForm.value.Submiqdar,       
       Vahidqiymeti_alish:this.emelForm.value.Vahidqiymeti_alish,
       Vahidqiymeti_satish:this._sat,
       VergiId:this.listvergi.find(k=>k.Vergikodu===this.malkodu)!.VergiId,
       VId:this.emelForm.value.VId,
       Edv:this._ede,
       Edvye_celbedilen:this.emelForm.value.Edvye_celbedilen ,
       Edvye_celbedilmeyen:this.emelForm.value.Edvye_celbedilmeyen,
       Emeltarixi:this.emelForm.value.Eemeltarixi,
       ValId:this.emelForm.value.ValId,      
       Qeyd:this.emelForm.value.Qeyd,
       Kurs:this.emelForm.value.Kurs,
      // Vergikodu:''
      }
     
        console.log(p)
        this._caSer._posemeliyat(p).subscribe();        
        
       this._cline();   
       this.notif.success('::Submitted successfully');
      
    }    
  }
 
}
