//Tuple:New datatype it is a set of different datatypes
//it will store a value of that particular type
const tup:[number,string]=[21,"sirisha"];//tuple with two datatypes
tup[0];
tup[1];//accessing
const value:[string,number,boolean]=["helleo",23,true];//tuple with three datatypes

const val:[number,string,string,number]=[21,"sirisha","asapu",505];//it will allow like this

let animal:[string,number];//declaration 
animal=["cat",2];//initialization

//push elements to tuple
//typescript allow values tp push without delcaration for added values like[string,number] 
tup.push(23,"shivangi");
tup.push(29,"mohsin");
//tup.push(21,"krystle",true); it will shows an error

//tuple array
let veg:[string,number][];
veg=[["brinjal",30],["potato",20],["Tomato",30]];

//concatenation:array method #concat
let nonveg:[string,number]=["chicken",100];
nonveg[0]=nonveg[0].concat("fry");
