import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { shirket } from 'src/models/_muhasibat';
import { Lang } from 'src/models/_carts';
import { AyarlarService } from 'src/services/ayarlar.service';
import { NotificationService } from 'src/util/notification.service';
import { Observable } from 'rxjs/internal/Observable';
import * as fromStore from './store/shirkets.reducer';
import * as fromShirkets from './store/shirkets.actions';
import { select, Store } from '@ngrx/store';
import {  getShirkets} from './store/shirkets.selectors';
import { map, Subscription } from 'rxjs';

//import * as fromActions from './store/shirkets.actions';

//import * as fromSelector from './store/shirkets.selectors';


@Component({
  selector: 'app-shirket',
  templateUrl: './shirket.component.html',
  styleUrls: ['./shirket.component.scss']
})
export class ShirketComponent implements OnInit {
  shirkets$: Observable<shirket[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  shirsSub: Subscription;
  //======================
  shirketForm: FormGroup; 
  listshirket:shirket[] = [];
  filteredshirket: shirket[];
  shirket:shirket=new shirket(); 
  _lang:Lang[]=[{lid: '1', lname: 'Az'},{lid: '2', lname: 'En'},{lid: '3', lname: 'Ru'} ];  _lan='';
  _shirket: shirket[];  _pid:'';  

  constructor(private store: Store<fromStore.ShirketsState>, private _caSer: AyarlarService,private noti: NotificationService) {
     this.shirket.ShId="";
   }

   ngOnInit(): void {
    this.shirketForm = new FormGroup({  
       ShId: new FormControl(''),   
       Bankadi: new FormControl('', [Validators.required]),
       Bankvoen: new FormControl('',[Validators.required]),
       Swift: new FormControl('',[Validators.required]),
       Muxbirhesab: new FormControl('',[Validators.required]),
       Bankkodu: new FormControl('',[Validators.required]),
       Aznhesab: new FormControl('',[Validators.required]),
       Shiricrachi: new FormControl('',[Validators.required]),
       Shirvoen: new FormControl('',[Validators.required]),
       Cavabdehshexs: new FormControl('',[Validators.required]),
       Email: new FormControl('',[Validators.required]),
       Unvan: new FormControl('',[Validators.required]),
       UserId: new FormControl(''),
       Shirpercent: new FormControl(0),
    });  
     // this._caSer._getshirket('').subscribe(list=>
     // {         
      //      this.listshirket=list; 
      //      this.filteredshirket= this.listshirket; 
      //     // console.log(this.listshirket)                        
      // }, error => console.error(error + 'Siz sistemə daxil olmalısınız!')); 
    //========================
    //  this.store.dispatch(fromActions.requestLoadShirkets());
    //  this.shirkets$ = this.store.select(fromSelector.shirkets);
    //  this.isLoading$ = this.store.select(fromSelector.isLoading);
    //  this.error$ = this.store.select(fromSelector.error);
     
    // this.store.select(state => state).subscribe(data => {
    //   console.log('data', data);
    // });
    //=======================
     this.shirkets$ = this.store.pipe(
       select(getShirkets),
       map((shirkets: shirket[]) => {
          if (!shirkets) {
           this.store.dispatch(new fromShirkets.ShirketsQuery());
         }
         console.log(shirkets)
         return shirkets;
       })
     );
  
     
       
}

langu(lan:any){  this._lan=lan; }
  _addshirket()
  {
    this.shirket.ShId='';   
    this.shirket.Bankadi='';  
    this.shirket.Bankvoen=''; 
    this.shirket.Swift='';  
    this.shirket.Muxbirhesab=''; 
    this.shirket.Bankkodu='';  
    this.shirket.Aznhesab='';  
    this.shirket.Shiricrachi=''; 
    this.shirket.Shirvoen=''; 
    this.shirket.Cavabdehshexs='';  
    this.shirket.Email='';  
    this.shirket.Unvan=''; 
    this.shirket.UserId=''; 
    this.shirket.Shirpercent=0;   
  }
  _cline(){ 
    this.shirketForm = new FormGroup({       
      ShId: new FormControl(''),  
    Bankadi: new FormControl(''), 
    Bankvoen: new FormControl(''),
    Swift: new FormControl(''), 
    Muxbirhesab: new FormControl(''),
    Bankkodu: new FormControl(''), 
    Aznhesab: new FormControl(''), 

    Shiricrachi: new FormControl(''),
    Shirvoen: new FormControl(''),
    Cavabdehshexs: new FormControl(''), 

    Email: new FormControl(''), 
    Unvan: new FormControl(''),
    UserId: new FormControl(''),
    Shirpercent: new FormControl(0)
      });
     
   }
   _editshirket(ca:shirket){       
       this.shirket.ShId = ca.ShId;
       this.shirket.Bankadi= ca.Bankadi;
       this.shirket.Bankvoen = ca.Bankvoen;
       this.shirket.Swift = ca.Swift;
       this.shirket.Muxbirhesab = ca.Muxbirhesab;
       this.shirket.Bankkodu = ca.Bankkodu;
       this.shirket.Aznhesab = ca.Aznhesab;

       this.shirket.Shiricrachi = ca.Shiricrachi;
       this.shirket.Shirvoen = ca.Shirvoen;
       this.shirket.Cavabdehshexs = ca.Cavabdehshexs;

       this.shirket.Email = ca.Email;
       this.shirket.Unvan = ca.Unvan;
       this.shirket.UserId = ca.UserId;
       this.shirket.Shirpercent = ca.Shirpercent;
     // console.log(ca)       
     }
 onadd()
  { 
    if(this.shirketForm.valid)  
    {
       var p={
        ShId:this.shirket.ShId  ,
        Bankadi:this.shirketForm.value.Bankadi,
        Bankvoen:this.shirketForm.value.Bankvoen,
        Swift:this.shirketForm.value.Swift,
        Muxbirhesab:this.shirketForm.value.Muxbirhesab,
        Bankkodu:this.shirketForm.value.Bankkodu,
        Aznhesab:this.shirketForm.value.Aznhesab,

        Shiricrachi:this.shirketForm.value.Shiricrachi,
        Shirvoen:this.shirketForm.value.Shirvoen,
        Cavabdehshexs:this.shirketForm.value.Cavabdehshexs,

        Email:this.shirketForm.value.Email,
        Unvan:this.shirketForm.value.Unvan,
        UserId:this.shirketForm.value.UserId,
        Shirpercent:this.shirketForm.value.Shirpercent
      }
      //  console.log(p)
       this._caSer._posshirket(p).subscribe();        
       this._addshirket(); 
       this._cline();   
       this.noti.success('::Submitted successfully');                 
    }   
  } 
  ondel()
  {
        this.noti.warn('!Deleted successfully');     
        this._caSer._delshirket(this.shirket).subscribe();         
  } 
}
