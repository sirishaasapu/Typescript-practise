let x :number|string="asnasbasd";//we can declare multiple type of variables like this
let y:boolean|number=false;
let z:any=2168173;
const a:boolean|string="ahsdab";

//function of multi types :union
function fun(a:(string|number))
{
        console.log(a);
}
fun(123);
fun("sirisha");
//fun(true);//it is an error