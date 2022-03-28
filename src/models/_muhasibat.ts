export class qrup
{
    QId:string;
    Qrupname:string;
    DhesId:string;
    KhesId:string;       
}
export class tipleri
{
    TipId:string;
    TipName:string;       
}
export class bolme
{
    bId:string;
    bolmeName:string;       
} 
export class anbar
{
    AnbId:string;
    Anbarname:string;       
}
export class madde
{
    MId:string;
    MaddeName:string;       
} 
export class aktivi
{
    ActivId:string;
    ActivName:string;  
    Description:string;  
}  
export class hesab
{
     HesId:string;
     Hesnom:string;
     Hesname:string;
     BId:string;
     MId:string;
     TipId:string;
     ActivId:string;
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
    ShId :string;        
    Bankadi:string;       
    Bankvoen:string;        
    Swift:string;        
    Muxbirhesab:string;
    Bankkodu:string;
    Aznhesab:string;        
    Shiricrachi :string;
    Shirvoen :string;
    Cavabdehshexs:string;
    Email:string;
    Unvan:string;
    UserId:string;
    Shirpercent:number;
}   
export class mushteri
{ 
     MushId:string;     
     Firma:string;
     Voen:string;
     Muqavilenom:string;
     Muqaviletar?:Date;
     Valyuta:string;
     Odemesherti:string;
     Temsilchi:string;
}
export class vahid
{        
    VId:string;  
    Vahidadi:string;
}  
export class valyuta
{        
    ValId:string;  
    Valname:string;
    Valnominal:number;
    Tarix?:Date;
} 
export class vergi
{
    VergiId:string;
    Vergikodu:string;    
    Vergikodununadi:string;
    VId:string;
    Edv_tar?:Date;
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
     Kimden_voen:string;
     serial:string;
     MushId :string;
     Vo :string;
     ActivId:string;
     DhesId :string;
     KhesId :string;
     ValId : string;
     QId: string;
     Kurs:number;
     Kimden_sum:number;
     Pay:boolean = false;
     Emeltarixi?:Date;
     
    
}
export class emel
{
    EmdetId:string;  //EmdetId
    Userid:string;
    Qid:string;      //QId  
    AId:string;       //AId
    DhesId:string;    //DhesId
    KhesId:string;    //KhesId
    MushId:string;     //MushId
    VergiId:string;  //VergiId
    VId:string;        // VId  
    
    Miqdar:number;     //Miqdar
    Submiqdar:number;     //Submiqdar
    Vahidqiymeti_alish:number;    //Vahidqiymeti_alish
    Vahidqiymeti_satish:number;   //Vahidqiymeti_satish
    Edv:string;      //Edv    
    Edvye_celbedilen:number;   //Edvye_celbedilen
    Edvye_celbedilmeyen:number;  //Edvye_celbedilmeyen
    Emeltarixi:string;      //Emeltarixi
    ValId:string;   //ValId 
    Qeyd:string;      //Qeyd
    Kurs:number;
    Vergikodu?:string;
}
