namespace hello
{//namespace
export class car{
    cname:string;
    cnum:string;
    constructor(name:string,num:string)
    {
     this.cname=name;
     this.cnum=num;
    }
   getdata():string
    {
        return `car name:${this.cname}`+"<br>"+`car number:${this.cnum}`
        +"<br>"+"cost of the car is:2,00,000";
    };
}
let bmw=new car("BMW","AP204321");//object creation
bmw.getdata();//method calling
export function speed(a:number,b:number):any
{
    return "speed of a car:"+a+b+"Mph";
}
}