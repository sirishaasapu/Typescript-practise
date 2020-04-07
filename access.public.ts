 class ATM{
     protected accountno:number;
     public name:string;
     private pinNo:number;
     constructor(acc:number,name:string,pin:number)
     {
          this.accountno=acc;
          this.name=name;
          this.pinNo=pin;
     }
     display():void{
         console.log(this.pinNo);
     }
 }
 class axis extends ATM{
     constructor(acc:number,name:string,pin:number)
     {
       super(acc,name,pin);
     }
     display():void
     {
        console.log("accno"+this.accountno+"name:"+this.name);
     }
     
    }
    let atm=new ATM(41351423,"hsh",716371);
    atm.display();
    let ax=new axis(1213123131,"sirisha",1535);
    ax.name="hello";
    ax.display();
    //ax.pinNo=1637512356;//error because it is a private access specifier
    //ax.accountno=2163416741;//error because it is protected access specifier