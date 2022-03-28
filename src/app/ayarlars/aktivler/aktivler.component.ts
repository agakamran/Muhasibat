import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { aktivi } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-aktivler',
  templateUrl: './aktivler.component.html',
  styleUrls: ['./aktivler.component.scss']
})
export class AktivlerComponent implements OnInit {
  activForm: FormGroup; 
  listactiv:aktivi[] = [];
  filteredactiv: aktivi[];
  activ:aktivi=new aktivi(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _activ: aktivi[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private noti: NotificationService) {
     this.activ.ActivId="";
   }

   ngOnInit(): void {
    this.activForm = new FormGroup({  
       ActivId: new FormControl(''),   
       ActivName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       Description: new FormControl('')
    });  
     
      this._caSer._getaktiv().subscribe(list=>
      {         
           this.listactiv=list; 
           this.filteredactiv= this.listactiv; 
         //  console.log('ZZZZ')
         //  console.log(this.listactiv)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addactiv()
  {
    this.activ.ActivId='';   
    this.activ.ActivName='';  
    this.activ.Description='';      
  }
  _cline(){ 
    this.activForm = new FormGroup({  
       
      activId: new FormControl(''),
      activName: new FormControl(''),
      description: new FormControl('')
      });
     
   }
   _editactiv(ca:aktivi){       
       this.activ.ActivId = ca.ActivId;
       this.activ.ActivName = ca.ActivName;
       this.activ.Description = ca.Description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.activForm.valid)  
    {
       var p={
        ActivId:this.activ.ActivId  ,
        ActivName:this.activForm.value.ActivName,
        Description:this.activForm.value.Description
      }
      //  console.log(p)
       this._caSer._postaktiv(p).subscribe();        
       this._addactiv(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.noti.warn('!Deleted successfully');     
        this._caSer._delaktiv(this.activ).subscribe();         
  } 

}
