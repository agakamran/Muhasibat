import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { hesab, qrup } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';

@Component({
  selector: 'app-qrup',
  templateUrl: './qrup.component.html',
  styleUrls: ['./qrup.component.scss']
})
export class QrupComponent implements OnInit {
  qrupForm: FormGroup; 
  listqrup: qrup[] = [];  
  qrup: qrup=new  qrup();  
  _qrup:  qrup[]; 

  listhesab:hesab[] = [];
  _debhesab: hesab[]=[];
  _kredhesab: hesab[]=[];
  dhesId='';khesId='';_debit='';_kredit='';
  constructor( private _caSer: AyarlarService,private notif: NotificationService) {
    
   }

   ngOnInit(): void {
    this.qrupForm = new FormGroup({  
      qId: new FormControl(''),   
      dhesId: new FormControl('', [Validators.required]),
      khesId: new FormControl('', [Validators.required]),
      qrupname: new FormControl('', [Validators.required,Validators.maxLength(100)])
      // description: new FormControl('')
    });  
     
      this._caSer._getqrup().subscribe(list=>
      {         
           this.listqrup=list; 
          // console.log(this.listqrup)                                  
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
      this._caSer._gethesab().subscribe(list=> {         
        this.listhesab=list; 
        this._kredhesab=this.listhesab;
        this._debhesab=this.listhesab;
                           
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
} 
seldebit(deb:any){ this.dhesId=deb;   
  this._debit = this.listhesab.find(kam=>kam.hesId=== this.dhesId)!.hesname; 
 }
selkred(kred:any){ this.khesId=kred;
  this._kredit = this.listhesab.find(kam=>kam.hesId=== this.khesId)!.hesname;   
}

  _addqrup()
  {
    this.qrup.qId='';   
    this.qrup.qrupname='';  
    this.qrup.dhesId='';  
    this.qrup.khesId='';     
  }
  _cline(){ 
    this.qrupForm = new FormGroup({  
       
      qId: new FormControl(''),
      qrupname: new FormControl(''),
      dhesId: new FormControl(''),
      khesId: new FormControl('')
      });
     
   }
   _editqrup(ca: qrup){ 
    // let tt=this.listhesab.find(kam=>kam.hesnom ===  ca.dhesId);
     console.log(ca)
    this._debit = this.listhesab.find(kam=>kam.hesnom ===  ca.dhesId)!.hesId;
    this._kredit = this.listhesab.find(kam=>kam.hesnom  === ca.khesId)!.hesId; 
    //console.log(this._debit)  
    //this.seldebit( this._debit); 
    // this.seldebit(this._kredit); 
       this.qrup.qId = ca.qId;
       this.qrup.qrupname = ca.qrupname;
       this.qrup.dhesId =  ca.dhesId;
       this.qrup.khesId = ca.khesId;
           
     }
 onadd()
  { 
    if(this.qrupForm.valid)  
    {
       var p={
        qId:this.qrup.qId  ,
        qrupname:this.qrupForm.value.qrupname.toString(),
        dhesId:this.dhesId.toString(),
        khesId:this.khesId.toString()
      //  description:this.qrupForm.value.description
      }
      //  console.log(p)
       this._caSer._posqrup(p).subscribe();        
       this._addqrup(); 
       this._cline();   
       this.notif.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notif.warn('!Deleted successfully');     
        this._caSer._delqrup(this.qrup).subscribe();         
  } 

}
