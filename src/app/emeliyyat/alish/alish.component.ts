import { Component,  OnInit,// ViewChild 
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { BehaviorSubject, Observable } from 'rxjs';
// import { scan } from 'rxjs/operators';
import { aktivi, alish, edeve, hesab, mushteri, vahid, vergi } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-alish',
  templateUrl: './alish.component.html',
  styleUrls: ['./alish.component.scss']
})
export class AlishComponent implements OnInit {

 // <Select> widget with infinite scroll dropdown

 // @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  alishForm: FormGroup; 
  alish:alish=new alish();
  listactiv:aktivi[] = [];
  _activ:  aktivi[];  
  listhesab:hesab[] = [];
  _debhesab: hesab[]=[];
  _kredhesab: hesab[]=[];
  listmushteri:mushteri[] = []; _mush='';
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
  vergikodu=''
  constructor(private _caSer: AyarlarService //,private notif: NotificationService
    ) {    
     }

  ngOnInit(): void {
   
    this.alishForm = new FormGroup({  
      activId: new FormControl('', [Validators.required]),   
      debId: new FormControl('', [Validators.required]),
      kredId: new FormControl('', [Validators.required]),
      mushId: new FormControl('', [Validators.required]),
      miqdar: new FormControl(0, [Validators.required]),
      qutuda: new FormControl(1, [Validators.required]),

      alqiym: new FormControl(0, [Validators.required]),
      satqiym: new FormControl(0, [Validators.required]),   
      vergikodu: new FormControl(''),
      vergiid: new FormControl(''),           
       
       emdate: new FormControl('', [Validators.required]),
       qeyd: new FormControl(''),

       vId: new FormControl('',[Validators.required]), 
       edev: new FormControl('', [Validators.required]),

       edeveli: new FormControl(0),
       edevesiz: new FormControl(0),
       valyuta: new FormControl('', [Validators.required]), 
      
   }); 
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
    
       //https://stackblitz.com/edit/ng-mat-select-infinite-scroll?file=src%2Fapp%2Fapp.component.html
      // this.getNextBatch();
      
  } 
  selhesab(sat:any){ this._sat=parseFloat(sat) + (sat * this.pors/100);  }
  
  
  selacti(act:any){  this._actname=act; 
   this._kredit='';this._debit='';
    this._debhesab=this.listhesab.filter(k=>k.activId===this._actname);
    this._kredhesab=this.listhesab.filter(k=>k.activId===this._actname);   
  }
  seldebit(deb:any){ this.hesId=deb;   
    this._debit = this.listhesab.find(kam=>kam.hesId=== this.hesId)!.hesname; 
   }
  selkred(kred:any){ this.hesId=kred;
    this._kredit = this.listhesab.find(kam=>kam.hesId=== this.hesId)!.hesname;   
  }
  selmush(mush:any){ this._mush=mush; //console.log(mush)
   }
  selverg(ver:any){ this._ver= ver;   
    var vve=this.listvergi.find(k=>k.vergikodu===this._ver);
    // console.log(vve!.vId)
    // console.log(this._ver) 
   // this.alish.vergiid=vve!.vId;   
    this.vergikodu=this._ver;
    this.alish.vId=this.listvahid.find(k=>k.vId=== vve?.vId)!.vId;
    this._vah=this.alish.vId;
    this.selvahid(this.alish.vId);
    if(vve?.edv_tar===null){this.seledeve("0,18%");}
    else{this.seledeve("0");}    
     //console.log(vve) 
    }
    selvahid(va:any){
     // console.log(va)
     this._vah=va;
      let x=this.listvahid.find(k=>k.vId=== va);
      if(x!=null){  this.alish.qutuda=1;  }
      //console.log(this.alish.qutuda)
    }
  seledeve(ede:any){ this._ede=ede; 
    if(this._ede== "0,18%"){ this.alish.edeveli=1;this.alish.edevesiz=0;}
    else{this.alish.edeveli=0;this.alish.edevesiz=1;}     //console.log(ede) 
  }
  selaz(val:any){this.alish.valyuta=val; console.log(val)}
  selval(val:any){this.alish.valyuta=val;console.log(val)}
  addalish(){
    if(this.alishForm.valid){
      var p={// 'ALIŞ','SATIŞ','HESABLAŞMALAR'
       // EmdetId:this.alish.EmdetId  ,
       UserId:this.alishForm.value.UserId,
       QId:'ALIŞ',
       AId:this.alishForm.value.activId,
       DhesId:this.alishForm.value.debId,
       KhesId:this.alishForm.value.kredId,
       MushId:this.alishForm.value.mushId,
       Miqdar:this.alishForm.value.miqdar,
       Submiqdar:this.alishForm.value.qutuda,

       Vahidqiymeti_alish:this.alishForm.value.alqiym,
       Vahidqiymeti_satish:this._sat,
       VergiId:this.listvergi.find(k=>k.vergikodu===this._ver),

       VId:this.alishForm.value.vId,
       Edv:this.alishForm.value.edeve,

       Edvye_celbedilen:this.alishForm.value.edeveli,
       Edvye_celbedilmeyen:this.alishForm.value.edevesiz,
       Emeltarixi:this.alishForm.value.emdate,

       ValId:this.alishForm.value.valyuta,
       Kurs:this.alishForm.value.Kurs,
       Qeyd:this.alishForm.value.qeyd
      }
        console.log(p)
      //  this._caSer._postvahid(p).subscribe();        
      //  this._addvahid(); 
      //  this._cline();   
      //  this.notificationService.success('::Submitted successfully');
    }
  }
}
