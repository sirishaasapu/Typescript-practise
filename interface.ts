interface emp{
    (ename:string,
    eid:number,
    esalary:number)
}
function funm(ename:string,eid:number,esalary:number):string
{
return `employee name:${ename}
employee Id:${eid}
employee salary:${esalary}`;
}
let empp:emp=funm;
empp("sirisha",505,20000);