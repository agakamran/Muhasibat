import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { vahid } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';

@Component({
  selector: 'app-vahid',
  templateUrl: './vahid.component.html',
  styleUrls: ['./vahid.component.scss']
})
export class VahidComponent implements OnInit {

  vahidForm: FormGroup; 
  listvahid:vahid[] = [];
  filteredvahid: vahid[];
  vahid:vahid=new vahid(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _vahid: vahid[];  _pid:'';  
  constructor( private _caSer: AyarlarService,private noti: NotificationService) {
     this.vahid.VId="";
   }

   ngOnInit(): void {
    this.vahidForm = new FormGroup({  
       vId: new FormControl(''),   
       vahidadi: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       description: new FormControl('')
    });  
     
      this._caSer._getvahid().subscribe(list=>
      {         
           this.listvahid=list; 
           this.filteredvahid= this.listvahid; 
         //  console.log(this.listvahid)                        
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addvahid()
  {
    this.vahid.VId='';   
    this.vahid.Vahidadi='';  
  //  this.vahid.description='';      
  }
  _cline(){ 
    this.vahidForm = new FormGroup({  
       
      vId: new FormControl(''),
      vahidName: new FormControl(''),
     // description: new FormControl('')
      });
     
   }
   _editvahid(ca:vahid){       
       this.vahid.VId = ca.VId;
       this.vahid.Vahidadi= ca.Vahidadi;
     //  this.vahid.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.vahidForm.valid)  
    {
       var p={
        VId:this.vahid.VId  ,
        Vahidadi:this.vahidForm.value.Vahidadi,
        //description:this.vahidForm.value.description
      }
      //  console.log(p)
       this._caSer._postvahid(p).subscribe();        
       this._addvahid(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.noti.warn('!Deleted successfully');     
        this._caSer._delvahid(this.vahid).subscribe();         
  } 

}
