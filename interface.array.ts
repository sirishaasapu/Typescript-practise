interface fruits
{
  [index:string]:string;
}
let fru:fruits;
fru["A"]="Apple";
fru["B"]="Banana";
console.log(fru["A"]+fru["B"]);