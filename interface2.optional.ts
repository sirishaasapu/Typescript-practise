interface patients{
    pname:string;
    age:number;
    gender:string;
    virus?:string;
    
}
let patient1:patients={
pname:'kanika kapoor',
age:41,
gender:"female"
};
let patient2:patients={
    pname:'kanika kapoor',
    age:41,
    gender:"female",
    virus:"covid-19"
    };
    console.log(`${patient2.pname}
    ${patient2.age}
    ${patient2.gender}
    ${patient2.virus}
    `);

    