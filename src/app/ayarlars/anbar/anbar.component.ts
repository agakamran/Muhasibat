import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { anbar } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-anbar',
  templateUrl: './anbar.component.html',
  styleUrls: ['./anbar.component.scss']
})
export class AnbarComponent implements OnInit {

  anbarForm: FormGroup; 
  listanbar: anbar[] = [];
  filteredanbar:  anbar[];
  anbar: anbar=new  anbar(); 
 
  _anbar:  anbar[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private notif: NotificationService) {
    
   }

   ngOnInit(): void {
    this.anbarForm = new FormGroup({  
      anbId: new FormControl(''),   
      anbarname: new FormControl('', [Validators.required,Validators.maxLength(50)])
      // description: new FormControl('')
    });  
     
      this._caSer._getanbar().subscribe(list=>
      {         
           this.listanbar=list; 
           this.filteredanbar= this.listanbar; 
         //  console.log('ZZZZ')
         //  console.log(this.listanbar)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }

  _addanbar()
  {
    this.anbar.AnbId='';   
    this.anbar.Anbarname='';  
   // this.anbar.description='';      
  }
  _cline(){ 
    this.anbarForm = new FormGroup({  
       
      anbId: new FormControl(''),
      anbarname: new FormControl(''),
     // description: new FormControl('')
      });
     
   }
   _editanbar(ca: anbar){       
       this.anbar.AnbId = ca.AnbId;
       this.anbar.Anbarname = ca.Anbarname;
      // this.anbar.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.anbarForm.valid)  
    {
       var p={
        AnbId:this.anbar.AnbId  ,
        Anbarname:this.anbarForm.value.anbarname
      //  description:this.anbarForm.value.description
      }
      //  console.log(p)
       this._caSer._postanbar(p).subscribe();        
       this._addanbar(); 
       this._cline();   
       this.notif.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
    console.log(this.anbar)
             
        this._caSer._delanbar(this.anbar).subscribe();  
        this.notif.warn('!Deleted successfully');       
  } 


}
