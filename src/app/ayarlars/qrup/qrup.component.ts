import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hesab, qrup } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

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
      QId: new FormControl(''),   
      dhesId: new FormControl('', [Validators.required]),
      khesId: new FormControl('', [Validators.required]),
      Qrupname: new FormControl('', [Validators.required,Validators.maxLength(100)])
      // description: new FormControl('')
    });  
     
      this._caSer._getqrup().subscribe(list=>
      {         
           this.listqrup=list; 
         //  console.log(this.listqrup)                                  
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
      this._caSer._gethesab().subscribe(list=> {         
        this.listhesab=list; 
        //console.log(this.listhesab)  
        this._kredhesab=this.listhesab;
        this._debhesab=this.listhesab;
                           
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
} 
seldebit(deb:any){ this.dhesId=deb;   
  this._debit = this.listhesab.find(kam=>kam.HesId=== this.dhesId)!.Hesname; 
 }
selkred(kred:any){ this.khesId=kred;
  this._kredit = this.listhesab.find(kam => kam.HesId === this.khesId)!.Hesname;   
}

  _addqrup()
  {
    this.qrup.QId='';   
    this.qrup.Qrupname='';  
    this.qrup.DhesId='';  
    this.qrup.KhesId='';     
  }
  _cline(){ 
    this.qrupForm = new FormGroup({  
       
      QId: new FormControl(''),
      Qrupname: new FormControl(''),
      dhesId: new FormControl(''),
      khesId: new FormControl('')
      });     
   }
   _editqrup(ca: qrup){ 
    
      this.qrup.QId = ca.QId;
      this.qrup.Qrupname = ca.Qrupname;    
      this._debit = this.listhesab.find(kam=>kam.Hesnom ===  ca.DhesId)!.HesId;
      this._kredit = this.listhesab.find(kam=>kam.Hesnom  === ca.KhesId)!.HesId; 

     //console.log(this._debit);
    // console.log(this._kredit);  

      this.qrup.DhesId=this._debit
      this.seldebit(this._debit) 
      this.qrup.KhesId=this._kredit
      this.selkred(this._kredit)  
     }
 onadd()
  { 
    if(this.qrupForm.valid)  
    {
       var p={
        QId:this.qrup.QId  ,
        Qrupname:this.qrupForm.value.Qrupname.toString(),
        DhesId:this.dhesId.toString(),
        KhesId:this.khesId.toString()
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
