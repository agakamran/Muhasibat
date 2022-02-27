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
// aId: "6d4ea96e-3e81-4e25-a280-a6d5f720fdc1"
// dhesId: "eba7e688-e686-4ecd-9ecb-00e3599af264"
// edv: "0,18%"
// edvye_celbedilen: 1
// edvye_celbedilmeyen: 0
// emdetId: "abd2465d-ac98-47d6-9a0e-6baea9d201ff"
// emeltarixi: "2022-02-08T00:00:00"
// khesId: "eba7e688-e686-4ecd-9ecb-00e3599af264"
// kurs: 1
// miqdar: 3
// mushId: "734733a5-4aad-4a09-bfca-9a33130365a6"
// qId: "ALIŞ"
// qeyd: "ff"
// submiqdar: 1
// userId: "9161be12-1491-44ca-b924-aea2894171c0"
// vId: "afdbcf31-9f02-4ef9-a978-687dd0137b8a"
// vahidqiymeti_alish: 3
// vahidqiymeti_satish: 3.6
// valId: "AZN"
// vergiId: "000b5180-08d5-4085-8b56-6c11b05e1625"
// vergikodu: "4809909000"
// vergikodununadi: 