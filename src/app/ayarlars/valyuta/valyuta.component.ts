import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { valyuta } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-valyuta',
  templateUrl: './valyuta.component.html',
  styleUrls: ['./valyuta.component.scss']
})
export class ValyutaComponent implements OnInit {

  valyutaForm: FormGroup; 
  listvalyuta:valyuta[] = [];
  filteredvalyuta: valyuta[];
  valyuta:valyuta=new valyuta(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _valyuta: valyuta[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private noti: NotificationService) {
     this.valyuta.ValId="";
   }

   ngOnInit(): void {
    this.valyutaForm = new FormGroup({  
       ValId: new FormControl(''),   
       Valname: new FormControl('', [Validators.required]),
       Valnominal: new FormControl(0, [Validators.required]),
      // description: new FormControl('')
    });  
     
      this._caSer._getvalyuta().subscribe(list=>
      {         
           this.listvalyuta=list; 
           this.filteredvalyuta= this.listvalyuta; 
           console.log(this.listvalyuta)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addvalyuta()
  {
    this.valyuta.ValId='';   
    this.valyuta.Valname='';  
    this.valyuta.Valnominal=0;  
    this.valyuta.Tarix=undefined;      
  }
  _cline(){ 
    this.valyutaForm = new FormGroup({  
       
      VId: new FormControl(''),
      Valname: new FormControl(''),
      Valnominal: new FormControl(0)
      });
     
   }
   _editvalyuta(ca:valyuta){       
       this.valyuta.ValId = ca.ValId;
       this.valyuta.Valname= ca.Valname;
       this.valyuta.Valnominal = ca.Valnominal;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.valyutaForm.valid)  
    {
       this.valyutaForm.value.valnominal
       var p={
        ValId:this.valyuta.ValId  ,
        Valname:this.valyutaForm.value.Valname,
        Valnominal: this.valyutaForm.value.Valnominal,
        tarix:undefined
      }
      //  console.log(p)
       this._caSer._postvalyuta(p).subscribe();   

       this._addvalyuta(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.noti.warn('!Deleted successfully');     
        this._caSer._deletevalyuta(this.valyuta).subscribe();         
  } 
}
