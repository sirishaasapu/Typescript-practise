import {car as carsss} from  './module';
class honda extends carsss{
    constructor(name:string,num:string)
    {
      super(name,num);
    }
    run(speed:number):number
    {
        return 1200000;
    }
}
let hond=new honda("HONDA","AP212736"); 
hond.run(0);
