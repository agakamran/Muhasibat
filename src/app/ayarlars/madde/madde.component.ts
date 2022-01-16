import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { madde } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-madde',
  templateUrl: './madde.component.html',
  styleUrls: ['./madde.component.scss']
})
export class MaddeComponent implements OnInit {
  maddeForm: FormGroup; 
  //listmadde:madde[] = []; 
  madde:madde=new madde(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _madde: madde[];  _pid:''; 
  //--------Axtarish--------------
  @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
  elements: any = [];
 headElements = ['maddeName'];
  searchText: string = '';
  previous: string;
  @HostListener('input') oninput() {  this.searchItems();  }
  //---------------------
  constructor( private _caSer: AyarlarService,private notificationService: NotificationService) {
     this.madde.mId="";
   }

   ngOnInit(): void {
    this.maddeForm = new FormGroup({  
       maddeId: new FormControl(''),   
       maddeName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       description: new FormControl('')
    });  
     
      this._caSer._getmadde().subscribe(list=>
      {         
           //this.listmadde=list; 
           this.elements= list; 
            this.mdbTable.setDataSource(this.elements);
        this.previous = this.mdbTable.getDataSource();                      
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
searchItems() {
  const prev = this.mdbTable.getDataSource();
  console.log(this.searchText) ; 
  if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
  }
  if (this.searchText) {
  // console.log('ggg11') ; 
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
  }
}
//get TipId() { return this.tipForm.get('TipId'); }
//get TipName() { return this.tipForm.get('TipName'); }
langu(lan:any){  this._lan=lan; }
  _addmadde()
  {
    this.madde.mId='';   
    this.madde.maddeName='';  
   // this.madde.description='';      
  }
  _cline(){ 
    this.maddeForm = new FormGroup({         
      mId: new FormControl(''),
      maddeName: new FormControl(''),
      //description: new FormControl('')
      });
     
   }
   _editmadde(ca:madde){       
       this.madde.mId = ca.mId;
       this.madde.maddeName = ca.maddeName;
       //this.madde.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.maddeForm.valid)  
    {
       var p={
        mId:this.madde.mId  ,
        maddeName:this.maddeForm.value.maddeName,
       // description:this.maddeForm.value.description
      }
      //  console.log(p)
       this._caSer._posmadde(p).subscribe();        
       this._addmadde(); 
       this._cline();   
       this.notificationService.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.notificationService.warn('!Deleted successfully');     
        this._caSer._delmadde(this.madde).subscribe();         
  } 


}
