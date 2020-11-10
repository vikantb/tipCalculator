

function calculate(){

    // fetch bill amount
    var bill=Math.abs(Number(document.getElementById("bill").value));
       document.getElementById("bill").value=bill.toFixed(2);

    // fetch tip percentage 
    var tip=Math.abs(Number(getTip()));
      document.getElementById("tip").value=tip;

    // fetch number of people
    var people=Math.abs(Number(getPeople()));
      document.getElementById("people").value=people;
     
      if(people==0)
       return ; 
    var totaltip= (bill*tip)/100 ;
    var totalmoney= totaltip+bill;

    var tpp= totaltip/people;
    var totalpp=totalmoney/people;


    document.getElementById("tipp").innerHTML="$"+tpp.toFixed(2);  
    document.getElementById("total").innerHTML="$"+totalpp.toFixed(2);    
}

// to get tip percentage
function getTip(){
    return document.getElementById("tip").value;
}
// to increase tip percentage by 1
function setTipInc(){
   var tipC=Number(getTip());
   tipC =tipC+1;
   document.getElementById("tip").value=tipC;
   calculate();
}
// to decrease tip percentage by 1
function setTipDec(){
    var tipC=Number(getTip());
    tipC =tipC-1;
    document.getElementById("tip").value=tipC;
    calculate();
 }
// to get number of people
function getPeople(){
    return document.getElementById("people").value;
}
// to increase number of people by 1
function setPeopleInc(){
   var peopleC=Number(getPeople());
   peopleC =peopleC+1;
   document.getElementById("people").value=peopleC;
   calculate();
}
// to decrease number of people by 1
function setPeopleDec(){
    var peopleC=Number(getPeople());
    if(peopleC>1)
     peopleC =peopleC-1;
    document.getElementById("people").value=peopleC;
    calculate();
 }