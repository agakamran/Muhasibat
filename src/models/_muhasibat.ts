export class qrup
{
    qId:string;
    qrupname:string;
    dhesId:string;
    khesId:string;       
}
export class tipleri
{
    tipId:string;
    tipName:string;       
}
export class bolme
{
    bId:string;
    bolmeName:string;       
} 
export class anbar
{
    anbId:string;
    anbarname:string;       
}
export class madde
{
    mId:string;
    maddeName:string;       
} 
export class aktivi
{
    activId:string;
    activName:string;  
    description:string;  
}  
export class hesab
{
     hesId:string;
     hesnom:string;
     hesname:string;
     bId:string;
     mId:string;
     tipId:string;
     activId:string;
}  
export class hesb
{
    hesId:string;
    hesnom:string;
    hesname:string;
    bId:number;
    mId:string;
    tipId:string;
}  
export class shirket
{        
    shId :string;        
    bankadi:string;       
    bankvoen:string;        
    swift:string;        
    muxbirhesab:string;
    bankkodu:string;
    aznhesab:string;        
    shiricrachi :string;
    shirvoen :string;
    cavabdehshexs:string;
    email:string;
    unvan:string;
    userId:string;
    shirpercent:number;
}   
export class mushteri
{ 
     mushId:string;     
     firma:string;
     voen:string;
     muqavilenom:string;
     muqaviletar?:Date;
     valyuta:string;
     odemesherti:string;
     temsilchi:string;
}
export class vahid
{        
    vId:string;  
    vahidadi:string;
}  
export class valyuta
{        
    valId:string;  
    valname:string;
    valnominal:number;
    tarix?:Date;
} 
export class vergi
{
    vergiId:string;
    vergikodu:string;    
    vergikodununadi:string;
    vId:string;
    edv_tar?:Date;
    STATE:string;
}
export class fealsah{
    fs_CODE:string;
    fsADI:string;
}
export class edeve{  eid :string; ename:string; }
export class parcha{  id :string; name:string; }
 
export class Productmaster {
     PmasId:string;
     UserId:string;
     kimden_voen:string;
     serial:string;
     MushId :string;
     Vo :string;
     ActivId:string;
     DhesId :string;
     KhesId :string;
     ValId : string;
     QrupId: string;
     Kurs:number;
     Kimden_sum:number;
     Pay:boolean = false;
     Emeltarixi?:Date;    
}
export class emel
{
    emdetId:string;  //EmdetId
    userid:string;
    qid:string;      //QId  
    aId:string;       //AId
    dhesId:string;    //DhesId
    khesId:string;    //KhesId
    mushId:string;     //MushId
    vergiId:string;  //VergiId
    vId:string;        // VId  
    miqdar:number;     //Miqdar
    submiqdar:number;     //Submiqdar
    vahidqiymeti_alish:number;    //Vahidqiymeti_alish
    vahidqiymeti_satish:number;   //Vahidqiymeti_satish
    edv:string;      //Edv    
    edvye_celbedilen:number;   //Edvye_celbedilen
    edvye_celbedilmeyen:number;  //Edvye_celbedilmeyen
    emeltarixi:string;      //Emeltarixi
    valId:string;   //ValId 
    qeyd:string;      //Qeyd
    kurs:number;
    vergikodu?:string;
}
