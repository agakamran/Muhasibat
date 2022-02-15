import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/helpers/notification.service';
import { MymuhasibService } from 'src/services/mymuhasib.service';

@Component({
  selector: 'app-elqaimealish',
  templateUrl: './elqaimealish.component.html',
  styleUrls: ['./elqaimealish.component.scss']
})
export class ElqaimealishComponent implements OnInit {
  title='Electron qaimelerin daxili';
  selectedFiles: File[] = [];
  urls : string[]=[];
  eqaimeForm: FormGroup; 
  constructor(private _caSer: MymuhasibService,private notif: NotificationService ) { }

  ngOnInit(): void {
    this.eqaimeForm = new FormGroup({
      _file: new FormControl('', [Validators.required]) 
     //#endregion      
    });
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
     for (let i = 0; i < this.selectedFiles.length; i++)  {       
        await this._caSer.upload(this.selectedFiles[i]).toPromise();
        this.notif.success('::File Submitted successfully');
     }
     this.selectedFiles= []; 
     this.urls=[];      
  }
}
