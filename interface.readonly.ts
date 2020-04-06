//readonly property:Once we assigned a value we cannot change that value 
interface votes{
    votername:string;
 readonly  voternum:number;
  readonly  aadharnum:number;
}
let vote:votes={
   votername:"sirisha",
   voternum:3635236553264,
   aadharnum:514354143534
};
vote.votername="shivangi";//okkk
//vote.voternum=3671263757123;//complier error
//vote.aadharnum=37246472364723;//complier error
