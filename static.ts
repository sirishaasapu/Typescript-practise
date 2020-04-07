class circle
{
 static pi:number=3.14;
 static area(radius:number)
 {
     return this.pi * radius * radius;
 }
}
circle.pi;//static member accessed
circle.area(2);