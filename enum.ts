//Enum:new datatype : enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
//3 types 
//1.numeric enum
/*Numeric enums are number-based enums i.e. they store string values as numbers. */

//start with enum 0 value
enum cost{
     gold,
     sliver,
     platinum,
     alluminum
}
cost[0];//gold
cost[1];//sliver
cost[3];//alluminum

//start with enum 1 

enum id
{
    id=1,
    id1,
    id2
}
id[1];//id
id[2];//id1
id[2];//id2


enum fruits{
    apple=300,
    banana=50,
    grapes=100,
    orange=200
}
fruits[300];//apple
  
//2.String enum
//String enums are similar to numeric enums, except that the enum values are initialized with string values rather than numeric values.
enum fru{
    firstname="sirisha",
    lastname="asapu",
    village="vilasavilli"
}
//access
fru.firstname;//sirisha
fru['village'];//vilasavilli

//3.hetrogenous
//combo of both numeric and string

enum employee{
    ename="sirisha",
    id=505,
    address
}
//access
employee.ename;//sirisha
employee.id;//505
employee.address;//2

//reverse mapping//typescript supports reverse mapping
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  
  PrintMedia.Magazine;   // returns  3
  PrintMedia["Magazine"];// returns  3
  PrintMedia[3];         // returns  Magazine
  PrintMedia.Newspaper;//1
  