interface viruses
{
    patname:string;
    patid:number;
    pvirusss:(string)=>string;
}
class vo implements viruses{
    patname:string;
    patid:number;
    constructor(name:string,id:number)
    {
         this.patname=name;
         this.patid=id;
    }
    pvirusss(vname:string):string{
        return "covid-19";
    }
}
let v1=new vo("kanika kapoor",21);
console.log(`${v1.patname}
${v1.patid}`);
