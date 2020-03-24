let example1 : boolean=true;//boolean variable type
let example2:number=335;//number variable type
let example3:string="true";//string variable type
//any means it will take any type of variables
let examp:any=123;
let exampl:any="jxcj";
let example:any=false;
//function parameters
function fun(a:number,b:number)
{
    return a+b;
}
//type notation in objects
var emp:{
    id:number;
    ename:string;
};
emp={
    id:505,
    ename:"sirisha"
};

//void :datatype must be null or undefined
//Not return any value
let y:void=null;
let z:void;
let p:void=undefined;
//let x:void=1;//error
function funn():void
{
console.log("hello");
}
funn();

//never :datatype not be null or undefined
let Q:never;
//let A:never=null;//error
//let A:never=undefined;//error


