interface hospital1{
    pname:string;
    page:number;
    pgender:string;
}
interface hospital2
{
    display():void;

}
class gandhi1 implements hospital1,hospital2{
    pname:string;
    page:number;
    pgender:string;
    constructor(name:string,age:number,gen:string)
    {
        this.pname=name;
        this.page=age;
        this.pgender=gen;
    }

    display()
    {
        console.log(`patient name:${this.pname}
        patient age:${this.page}
        patient gender:${this.pgender}
        `);
    
    }

}
let Gan=new gandhi1("sara ali khan",23,"female");
Gan.display();
