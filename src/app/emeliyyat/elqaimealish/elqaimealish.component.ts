import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { aktivi, emel, hesab } from 'src/models/_muhasibat';
import { AyarlarService } from 'src/services/ayarlar.service';
import { MymuhasibService } from 'src/services/mymuhasib.service';

@Component({
  selector: 'app-elqaimealish',
  templateUrl: './elqaimealish.component.html',
  styleUrls: ['./elqaimealish.component.scss']
})
export class ElqaimealishComponent implements OnInit {
  title='Electron qaimelerin daxili';
  selectedFiles: File[] = [];
  emel:emel=new emel();
  urls : string[]=[];
  eqaimeForm: FormGroup; 
  listactiv:aktivi[] = [];
  _activ:  aktivi[];  
  listhesab:hesab[] = [];
  _debhesab: hesab[]=[];
  _kredhesab: hesab[]=[];
  _actname='';dhesId='';khesId='';_debit='';_kredit='';
  pars:number=20;
  constructor(private _caSer: MymuhasibService, private _kaSer: AyarlarService ,private notif: NotificationService ) { }

  ngOnInit(): void {
    this.eqaimeForm = new FormGroup({
      aId: new FormControl('', [Validators.required]),   
      dhesId: new FormControl('', [Validators.required]),
      khesId: new FormControl('', [Validators.required]),
      _file: new FormControl('', [Validators.required]) 
     //#endregion      
    });
    this._kaSer._getaktiv().subscribe(list=> {
      this.listactiv=list;     // console.log(this.listactiv)                        
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
   this._kaSer._gethesab().subscribe(list=> {         
              this.listhesab=list; 
             //console.log(this.listhesab)                        
     }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
  }
  selacti(act:any){  this._actname=act; 
    this._kredit='';this._debit='';
     this._debhesab=this.listhesab.filter(k=>k.activId===this._actname);
     this._kredhesab=this.listhesab.filter(k=>k.activId===this._actname);   
   }
   seldebit(deb:any){ this.dhesId=deb;   
     this._debit = this.listhesab.find(kam=>kam.hesId=== this.dhesId)!.hesname; 
    }
   selkred(kred:any){ this.khesId=kred;
     this._kredit = this.listhesab.find(kam=>kam.hesId=== this.khesId)!.hesname;   
   }
 _delFiles(index : number) 
  {
    this.urls =  this.urls.filter((_,i) => i != index)
    this.selectedFiles =  this.selectedFiles.filter((_,i) => i != index)
  }
_selectFiles(event:any) 
{     
   const files = Array.from(event.target.files) as File[];  
   let isImage = true;  
   for (let i = 0; i < files.length; i++) 
   {      
      if (files[i].type.match('xml.*')){ continue;  }
     else{
       isImage = false;
       alert('invalid format!');
       break;
     }  
   }  
   if (isImage) 
   {     
     this.selectedFiles = this.selectedFiles.concat(files);     
     if(event.target.files)
     {       
       for(var i=0;i<this.selectedFiles.length;i++) 
       {      
         var reader=new FileReader()
         if (event.target.files[i]) 
         {
            reader.readAsDataURL(event.target.files[i]);           
         }         
         reader.onload=(event:any)=> 
         {
            this.urls.push(event.target.result)
         }         
       }
     }
   } 
   else
   {     
     //this.selectedFiles = undefined;
     event.srcElement.percentage = null;
   }
 } 
 async  _uploadFiles()
  {
    let ValId="AZN";
    let Kurs="1";
    var _p={ QId:"ALIŞ",aId:this._actname,dhesId:this.dhesId,khesId:this.khesId,pars:this.pars,ValId:ValId,Kurs:Kurs   } 
     for (let i = 0; i < this.selectedFiles.length; i++)  {  
     // QId:any,aId:any,dhesId:any,khesId:any,pars:any,ValId:any,Kurs:any,file: File) 

        await this._caSer.upload(_p,this.selectedFiles[i]).toPromise();
        this.notif.success('::File Submitted successfully');
     }
     this.selectedFiles=[] ;
     this.urls=[];      
  }
}
