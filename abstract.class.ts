/**abstarct class with one abstract method*/
abstract class hospitals
{
    pname:string;
    age:number;
    abstract gender:string;
    abstract display():void;
    constructor(name:string,age:number,gender:string)
    {
        this.pname=name;
        this.age=age;
    }
}
class SRK extends hospitals{
    gender:string;
    virus:string;
  constructor(name:string,age:number,gender:string,virus:string)
  {
     super(name,age,gender);
     this.virus=virus;
  }
  display():void
  {
     console.log("name:"+this.pname+"<br>"+"age:"+this.age+"<br>"+"gender:"+this.gender+"<br>"+"virus"+this.virus);
  }
}
let srk=new SRK("kanika kapoor",41,"female","covid-19");
srk.display();