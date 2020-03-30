
/*function overloading :multiple functions having same function name but difference in parameter type*/
function add(a:number, b:number): number;
function add(a:string,b:string):string;
function add(a: any, b:any): any {
    return a + b;
}
add(10, 20); 
add("hello","guys");
add(12,3);
//rest parameter
function fun(a:string,...b:string[])
{
 return a+" "+b.join(",");
}
fun("hello","sirisha","asapu");
fun("whatsup","guys");