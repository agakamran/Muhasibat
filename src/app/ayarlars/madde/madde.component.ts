import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { madde } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { NotificationService } from 'src/util/notification.service';

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
  constructor( private _caSer: AyarlarService,private noti: NotificationService) {
     this.madde.MId="";
   }

   ngOnInit(): void {
    this.maddeForm = new FormGroup({  
       MId: new FormControl(''),   
       MaddeName: new FormControl('', [Validators.required,Validators.maxLength(50)]),
       description: new FormControl('')
    });  
     
      this._caSer._getmadde().subscribe(list=>
      {         
           //this.listmadde=list; 
           this.elements= list; 
          // console.log(list)
            this.mdbTable.setDataSource(this.elements);
        this.previous = this.mdbTable.getDataSource();                      
      }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
       
}
searchItems() {
  const prev = this.mdbTable.getDataSource();
  //console.log(this.searchText) ; 
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
    this.madde.MId='';   
    this.madde.MaddeName='';  
   // this.madde.description='';      
  }
  _cline(){ 
    this.maddeForm = new FormGroup({         
      MId: new FormControl(''),
      MaddeName: new FormControl(''),
      //description: new FormControl('')
      });
     
   }
   _editmadde(ca:madde){       
       this.madde.MId = ca.MId;
       this.madde.MaddeName = ca.MaddeName;
       //this.madde.description = ca.description;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.maddeForm.valid)  
    {
       var p={
        MId:this.madde.MId  ,
        MaddeName:this.maddeForm.value.MaddeName,
       // description:this.maddeForm.value.description
      }
      //  console.log(p)
       this._caSer._posmadde(p).subscribe();        
       this._addmadde(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.noti.warn('!Deleted successfully');     
        this._caSer._delmadde(this.madde).subscribe();         
  } 


}
