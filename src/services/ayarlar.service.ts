import { Injectable } from '@angular/core';

// import * as dataktiv from '../_json/Muhasib/aktiv.json';
// import * as dathesab from '../_json/Muhasib/hesablar.json';
// import * as datmushteri from '../_json/Muhasib/mushteri.json';
// import * as datqrup from '../_json/Muhasib/qrup.json';
// import * as datshirket from '../_json/Muhasib/shirket.json';
// import * as dattip from '../_json/Muhasib/tip.json';
// import * as datvahid from '../_json/Muhasib/vahid.json';
// import * as datvergi from '../_json/Muhasib/eqm_mal_kodlari-v1.json';
// import * as datvergifeal from '../_json/Muhasib/fk-v1.json';
//import * as datqrup from '../_json/Muhasib/malqrup.json';

import { aktivi, bolme,  madde,hesab, mushteri, qrup, shirket, 
  tipleri, vahid, valyuta,  vergi, fealsah, emel, anbar } from 'src/models/_muhasibat';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AyarlarService {
  pathAPI='';
  _jsonUrl ='src/api/categori.json';
  constructor(private http: HttpClient) {  this.pathAPI=environment.apiUrl+'Ayarlar/';}
  //-------------MUHASIBAT-------
  //-------------activler--------
  // _jsondataktiv(): Observable<aktivi[]> { 
  //    //console.log('uuuuu')   
  //   return of((dataktiv as any).default)   
  //  }
  _getaktiv(): Observable<any>{      
  //  const body=JSON.stringify(pra);
  // console.log('uuuuu')
  // console.log(body.toString())   
    return this.http.get<any>(this.pathAPI +'getaktiv')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _postaktiv(bo:aktivi):Observable<any> {        
    const body=JSON.stringify(bo);  
    console.log(body)
   // console.log(this.pathAPI + 'postbeden', body)
    return this.http.post<aktivi>(this.pathAPI + '_postaktivler', body)
       .pipe(
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
  _delaktiv(bo:aktivi) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + 'delaktiv',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //-------------anbar--------
  // _jsondataktiv(): Observable<aktivi[]> { 
  //    //console.log('uuuuu')   
  //   return of((dataktiv as any).default)   
  //  }
  _getanbar(): Observable<any>{      
    //  const body=JSON.stringify(pra);
    // console.log('uuuuu')
    // console.log(body.toString())   
      return this.http.get<any>(this.pathAPI +'getanbar')
      .pipe(map((data)=>{
        return data;
      }),
        catchError((err) => {
          console.error(err);
          throw err;
        }
      )); 
    } 
    _postanbar(bo:anbar):Observable<any> {        
      const body=JSON.stringify(bo);  
      console.log(body)
     // console.log(this.pathAPI + 'postbeden', body)
      return this.http.post<anbar>(this.pathAPI + '_postanbar', body)
         .pipe(
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
    _delanbar(bo:anbar) {   
     // const bod:MenuItem= { pid: id,pagename:'' }
      console.log(this.pathAPI + 'delanbar/?id='+bo.AnbId)
       return this.http.delete(this.pathAPI + '_delanbar/?id='+bo.AnbId )
      .pipe( catchError((err) => {  console.error(err);  throw err; }))
    } 
  //-----------hesab--------
  // _jsonhesab(): Observable<hesab[]> {    
  //   return of((dathesab as any).default)   
  //  }
  _gethesab(): Observable<any>{      
    //const body=JSON.stringify(pra);
   // console.log('uuuuu')
   // console.log(body.toString())   
    return this.http.get<any>(this.pathAPI +'_gethesab')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _poshesab(bo:hesab):Observable<any> {        
    const body=JSON.stringify(bo);  
    console.log(body)
   // console.log(this.pathAPI + 'postbeden', body)
    return this.http.post<hesab>(this.pathAPI + '_posthesab', body)
       .pipe(
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
  _delhesab(bo:hesab) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + 'delhesab',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------qrup-------- 
  // _jsonqrup(): Observable<qrup[]> {    
  //   return of((datqrup as any).default)   
  //  }
  _getqrup(): Observable<any>{      
    //const body=JSON.stringify(pra);
   // console.log('uuuuu')
   // console.log(body.toString())   
    return this.http.get<any>(this.pathAPI +'_getqrup')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _posqrup(bo:qrup):Observable<any> {        
    const body=JSON.stringify(bo);  
   // console.log('11sd')
   // console.log(this.pathAPI + 'postbeden', body)
    return this.http.post<qrup>(this.pathAPI + '_postqrup', body)
       .pipe(
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
  _delqrup(bo:qrup) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + 'delqrup',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------Mushteri---------------
  // _jsonmushteri(): Observable<any[]> {    
  //   return of((datmushteri as any).default)   
  //  }
  _getmushteri(): Observable<any>{      
    //const body=JSON.stringify(pra);
   // console.log('uuuuu')
   // console.log(body.toString())   
    return this.http.get<any>(this.pathAPI +'_getmushteri')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _posmushteri(bo:mushteri):Observable<any> {        
    const body=JSON.stringify(bo);  
   // console.log('11sd')
   // console.log(this.pathAPI + 'postbeden', body)
    return this.http.post<mushteri>(this.pathAPI + '_postmushteri', body)
       .pipe(
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
  _delmushteri(bo:mushteri) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + '_deletemushteri',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------qrup-------- 
  // _jsonshirket(): Observable<shirket[]> { 
  //  // console.log('XXX')   
  //   return of((datshirket as any).default)   
  //  }
  _getshirket(id:any): Observable<any>{      
     
    return this.http.get<shirket>(this.pathAPI +'_getshirket/?id='+id)
    .pipe(map((data)=>{
     // console.log(data)
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _posshirket(bo:shirket):Observable<any> {        
    const body=JSON.stringify(bo);  
   // console.log(body)
    console.log(this.pathAPI + '_postshirket', body)
    return this.http.post<shirket>(this.pathAPI + '_postshirket', body)
       .pipe(
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
  _delshirket(bo:shirket) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + 'delshirket',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------tip-------- 
  // _jsontip(): Observable<tipleri[]> {    
  //   return of((dattip as any).default)   
  //  }
  _gettip(): Observable<any>{      
    //const body=JSON.stringify(pra);
   // console.log('uuuuu')
   // console.log(body.toString())   
    return this.http.get<any>(this.pathAPI +'_gettip')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _postip(bo:tipleri):Observable<any> {        
    const body=JSON.stringify(bo);  
    return this.http.post<tipleri>(this.pathAPI + '_postip', body)
       .pipe(
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
  _deltip(bo:tipleri) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + 'deltip',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------vahid-------- 
  // _jsonvahid(): Observable<vahid[]> {    
  //   return of((datvahid as any).default)   
  //  }
  _getvahid(): Observable<any>{      
     return this.http.get<any>(this.pathAPI +'_getvahid')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _postvahid(bo:vahid):Observable<any> {        
    const body=JSON.stringify(bo);  
   // console.log('11sd')
   // console.log(this.pathAPI + 'postbeden', body)
    return this.http.post<vahid>(this.pathAPI + '_postvahid', body)
       .pipe(
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
  _delvahid(bo:vahid) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + 'delvahid',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------valyuta-------- 
 // _jsonvahid(): Observable<vahid[]> {    
 //   return of((datvahid as any).default)   
 //  }
  _getvalyuta(): Observable<any>{      
     return this.http.get<any>(this.pathAPI +'_getvalyuta')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _postvalyuta(bo:valyuta):Observable<any> {        
    const body=JSON.stringify(bo);  
    //console.log('11sd')
    //console.log(this.pathAPI + '_postvalyuta', body)
    return this.http.post<valyuta>(this.pathAPI + '_postvalyuta', body)
       .pipe(
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
  _deletevalyuta(bo:valyuta) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + '_deletevalyuta',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------fealiyyet sahesi--------
  // _jsonvergifeal(): Observable<fealsah[]> {  
  //   //  console.log('uuuuu122')
  //  return of((datvergifeal as any).default)   
  // }
 _getvergifeal(): Observable<any>{      
   //const body=JSON.stringify(pra);
  // console.log('uuuuu')
  // console.log(body.toString())   
   return this.http.get<any>(this.pathAPI +'_getvergifeal')
   .pipe(map((data)=>{
     return data;
   }),
     catchError((err) => {
       console.error(err);
       throw err;
     }
   )); 
 } 
 _posvergifeal(bo:fealsah):Observable<any> {        
   const body=JSON.stringify(bo);  
  // console.log('11sd')
  // console.log(this.pathAPI + 'postbeden', body)
   return this.http.post<fealsah>(this.pathAPI + 'postvergifeal', body)
      .pipe(
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
 _delvergifeal(bo:fealsah) {   
  // const bod:MenuItem= { pid: id,pagename:'' }
   //console.log(id)
    return this.http.post(this.pathAPI + 'delvergifeal',bo )
   .pipe( catchError((err) => {  console.error(err);  throw err; }))
 } 
   //------------vergi eqaime-------- 
  //  _jsonvergi(): Observable<verg[]> {  
  //    //  console.log('uuuuu122')
  //   return of((datvergi as any).default)   
  //  }
  _getvergi(): Observable<any>{      
    //const body=JSON.stringify(pra);
   // console.log('uuuuu')
   // console.log(body.toString()) 
   return this.http.get<any>(this.pathAPI +'_getvergi')  
   // return this.http.get<any>(this.pathAPI +'_getvergi?emel='+emel)
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _posvergilist(bo:vergi[]):Observable<any> {        
   // const body=JSON.stringify(bo);  
   // console.log('11sd')
   // console.log(this.pathAPI + 'postbeden', body)
  // console.log(bo)
    return this.http.post<any>(this.pathAPI + 'postvergilist', bo)
       .pipe(
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
  _posvergi(bo:vergi):Observable<any> {        
    const body=JSON.stringify(bo);  
   // console.log('11sd')
   // console.log(this.pathAPI + 'postbeden', body)
    return this.http.post<vergi>(this.pathAPI + 'postvergi', body)
       .pipe(
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
  _delvergi(bo:vergi) {   
   // const bod:MenuItem= { pid: id,pagename:'' }
    //console.log(id)
     return this.http.post(this.pathAPI + 'delvergi',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  }   
  //------------Madde-------- 
  // _jsonmadde(): Observable<hesab[]> {  
  //   //  console.log('uuuuu122')
  //  return of((dathesab as any).default)   
  // }
  _getmadde(): Observable<any>{      
    //const body=JSON.stringify(pra);
   // console.log('uuuuu')
   // console.log(body.toString())   
    return this.http.get<any>(this.pathAPI +'_getmad')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _posmadde(bo:madde):Observable<any>{        
    const body=JSON.stringify(bo);  
    return this.http.post<tipleri>(this.pathAPI + '_postmad', body)
       .pipe(
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
  _delmadde(bo:madde) {   
   
     return this.http.post(this.pathAPI + 'delmadde',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //------------bolme-------- 
  // _jsonbolme(): Observable<hesab[]> {  
  //   //  console.log('uuuuu122')
  //  return of((dathesab as any).default)   
  // }
  _getbolme(): Observable<any>{      
    //const body=JSON.stringify(pra);
   // console.log('uuuuu')
   // console.log(body.toString())   
    return this.http.get<any>(this.pathAPI +'_getbolme')
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _postbolme(bo:bolme):Observable<any>{        
    const body=JSON.stringify(bo);  
    //console.log(this.pathAPI + '_postbolme', body)
    return this.http.post<tipleri>(this.pathAPI + '_postbolme', body)
       .pipe(
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
  _delbolme(bo:bolme) {   
   
     return this.http.post(this.pathAPI + 'delbolme',bo )
    .pipe( catchError((err) => {  console.error(err);  throw err; }))
  } 
  //---------------Kutlevi daxil etme yeri---------------
  _posUmumi(bo:string):Observable<any> {        
    const body=JSON.stringify(bo);  
   // console.log('11sd')
   // console.log(this.pathAPI + 'postbeden', body)
    return this.http.post<any>(this.pathAPI + 'posthazirla', body)
       .pipe(
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
  //------Muhasibat son---------------
  //---------------Emeliyyat---------------
  _getemeliyat(id:any): Observable<any>{      
      
    return this.http.get<any>(this.pathAPI.replace('Ayarlar/','Emeliyyat/')  +'_getEmeliyyat?id='+id)
    .pipe(map((data)=>{
      return data;
    }),
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )); 
  } 
  _posemeliyat(bo:emel):Observable<emel> {        
    const body=JSON.stringify(bo);  
   // console.log('11sd')
    console.log(this.pathAPI.replace('Ayarlar/','Emeliyyat/')  + '_postEmeliyyat', body)
    return this.http.post<emel>(this.pathAPI.replace('Ayarlar/','Emeliyyat/')  + '_postEmeliyyat', body)
       .pipe(
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
