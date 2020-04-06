interface employee
{
     empname:string;
     empid:number;
     empsalary:number;
}
let emp:employee={empname:"sirisha",empid:505,empsalary:30000};
console.log(`employee name:${emp.empname}
employee Id:${emp.empid}
employee salary:${emp.empsalary}`);