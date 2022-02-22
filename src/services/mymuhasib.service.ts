import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MymuhasibService {
  pathAPI='';
 // _jsonUrl ='src/api/categori.json';
  constructor(private http: HttpClient) {  this.pathAPI=environment.apiUrl+'Operation/';}

  upload(p:any,file: File) {   
    //console.log(p)
    const formData: FormData = new FormData();   
    formData.append('aId', p.aId);
    formData.append('dhesId', p.dhesId); 
    formData.append('khesId', p.khesId);
    formData.append('QId', p.QId); 
    formData.append('pars',p.pars);
    formData.append('ValId',p.ValId);
    formData.append('Kurs',p.Kurs);
    formData.append('Serial',p.Serial);
    formData.append('emeltarixi',p.emeltarixi);
    formData.append('file', file); 
      
   // console.log(formData)
    return this.http.post(this.pathAPI+'postfile',formData).pipe(
      map((data) => {
        //You can perform some transformation here
       return data;
     }),
     catchError((err) => { 
       console.error(err);
       throw err;
     }
   ))  
  }
  _getqaimeler(bo:any): Observable<any>{ 
    const body=JSON.stringify(bo);        
    return this.http.post<any>(this.pathAPI +'getqayimeler',body)
   .pipe(map((data)=>{
     return data;
   }),
     catchError((err) => {
       console.error(err);
       throw err;
     }
   )); 
 } 
}
