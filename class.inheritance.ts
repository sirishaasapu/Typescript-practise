class hospital{
    pname:string;
    page:number;
    pgender:string;
    constructor(name:string,age:number,gen:string)
    {
     this.pname=name;
     this.page=age;
     this.pgender=gen;
    }
}
class gandhi extends hospital{//inherited class using extends keyword
    virus:string;
   constructor(name:string,age:number,gen:string,virus:string)
   {
    super(name,age,gen);//inherited properties using super keyword
    this.virus=virus;
   }
   display():void{  //method declartion
       console.log(`patient name:${this.pname}
       patient age:${this.page}
       patient gender:${this.pgender}
       suffering with:${this.virus}
       `);
   }
}
let Gandhi=new gandhi("kanika kapoor",41,"female","covid-19");//object creation
Gandhi.display();//method calling