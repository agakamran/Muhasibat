import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productmaster } from 'src/models/_muhasibat';
import { MymuhasibService } from 'src/services/mymuhasib.service';

@Component({
  selector: 'app-qaimelers',
  templateUrl: './qaimelers.component.html',
  styleUrls: ['./qaimelers.component.scss']
})
export class QaimelersComponent implements OnInit {
  title='Electron qaimeler';
  qaimeForm: FormGroup; 
  listqaime:Productmaster[] = []; 
  emel:Productmaster=new Productmaster();
  constructor(private _caSer: MymuhasibService) { }

  ngOnInit(): void {
    this.qaimeForm = new FormGroup({
      t1: new FormControl('', [Validators.required]),   
      t2: new FormControl('', [Validators.required])
    });
    
  }

  _getqaime(){
    if(this.qaimeForm.valid){
      var p={ t1:this.qaimeForm.value.t1,
              t2:this.qaimeForm.value.t2,
              userId:''
            }
            console.log(p) 
      this._caSer._getqaimeler(p).subscribe(list=> {
        this.listqaime=list;  
           console.log(this.listqaime)                        
       }, error => console.error(error + 'Siz sistemə daxil olmalısınız!'));
      }
  }
}
