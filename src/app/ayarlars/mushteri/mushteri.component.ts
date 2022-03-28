import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mushteri } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-mushteri',
  templateUrl: './mushteri.component.html',
  styleUrls: ['./mushteri.component.scss']
})
export class MushteriComponent implements OnInit {
  mushteriForm: FormGroup; 
  listmushteri:mushteri[] = [];
  filteredmushteri: mushteri[];
  mushteri:mushteri=new mushteri(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _mushteri: mushteri[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private noti: NotificationService) {
     this.mushteri.MushId="";
   }

   ngOnInit(): void {
    this.mushteriForm = new FormGroup({  
      // MushId: new FormControl(''), 
       Firma: new FormControl('', [Validators.required]),
       Voen: new FormControl(0, ),  
       Muqavilenom: new FormControl('', [Validators.required]),
       Muqaviletar: new FormControl(Date,[Validators.required]),
       Valyuta: new FormControl('', [Validators.required]),
       Odemesherti: new FormControl('', [Validators.required]),
       Temsilchi: new FormControl('', [Validators.required]),
    });  
    
      this._caSer._getmushteri().subscribe(list=>
      {         
           this.listmushteri=list; 
           this.filteredmushteri= this.listmushteri; 
           //console.log(this.listmushteri)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addmushteri() {
     this.mushteri.MushId='';  
    this.mushteri.Firma='';  
    this.mushteri.Voen=''; 
    this.mushteri.Muqavilenom=''; 
    this.mushteri.Muqaviletar=undefined;  
    this.mushteri.Valyuta='';  
    this.mushteri.Odemesherti=''; 
    this.mushteri.Temsilchi='';    
  }
  _cline(){ 
    this.mushteriForm = new FormGroup({   
    MushId: new FormControl(''), 
    Firma: new FormControl(''),
    Voen: new FormControl(''),
    Muqavilenom: new FormControl(''), 
    Muqaviletar: new FormControl(''), 
    Valyuta: new FormControl(''),
    Odemesherti: new FormControl(''),
    Temsilchi: new FormControl('')
      });
     
   }
   _editmushteri(ca:mushteri){       
       
       this.mushteri.MushId = ca.MushId;
       this.mushteri.Firma = ca.Firma;
       this.mushteri.Voen = ca.Voen;
       this.mushteri.Muqavilenom = ca.Muqavilenom;
       this.mushteri.Muqaviletar = ca.Muqaviletar;
       this.mushteri.Valyuta = ca.Valyuta;
       this.mushteri.Odemesherti = ca.Odemesherti;
       this.mushteri.Temsilchi = ca.Temsilchi;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.mushteriForm.valid)  
    {
       var p={
        MushId:this.mushteri.MushId  ,
        Firma:this.mushteriForm.value.Firma,
        Voen:this.mushteriForm.value.voen,
        Muqavilenom:this.mushteriForm.value.Muqavilenom,
        Muqaviletar:this.mushteriForm.value.Muqaviletar,
        Valyuta:this.mushteriForm.value.Valyuta,
        Odemesherti:this.mushteriForm.value.Odemesherti,
        Temsilchi:this.mushteriForm.value.Temsilchi
      }
      //  console.log(p)
       this._caSer._posmushteri(p).subscribe();        
       this._addmushteri(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.noti.warn('!Deleted successfully');     
        this._caSer._delmushteri(this.mushteri).subscribe();         
  } 

}
