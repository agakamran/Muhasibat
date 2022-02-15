import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MymuhasibService {
  pathAPI='';
 // _jsonUrl ='src/api/categori.json';
  constructor(private http: HttpClient) {  this.pathAPI=environment.apiUrl+'Eqaime/';}

  upload(file: File) {   
    const formData: FormData = new FormData(); 
    formData.append('file', file); 
    //console.log('FFF') 
    //console.log(p.firmaId)         
    // formData.append('proId',p.proId);
    // formData.append('firmaId',p.storId);
    // formData.append('genId',p.genId);   
   console.log(formData)
   // console.log('SSSSSSSSS')
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
}
