import {car} from  './module';
class honda extends car{
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
