class virus
{
    pname:string;
    pid:number;
}

interface carona extends virus{
    pgender:string;
    pvirus?:string;
}
let vir:carona={
    pname:"kanika kapoor",
    pid:234,
    pgender:"female"
};
console.log(`${vir.pname}
${vir.pid}
${vir.pgender}`);
