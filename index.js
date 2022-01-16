
 var note500,note100,note50,note20,note10,note5,note2,note1=0;
 var amount=document.getElementById("amount");
 
//  amount.value;
 var btn = document.getElementById("btn");
 var btn1 = document.getElementById("earase");
var output= document.getElementById("para") 
btn1.addEventListener('click',()=>{
   output.innerHTML=" " 
   amount.innerText= " ";
})

   btn.addEventListener('click',()=>{
   amount = parseInt(amount.value);
   if(amount < 500){
        note500 =0
    }
    else{note500 = parseInt(amount/500);
        amount -= note500 * 500;
    }


    if (amount <100)
    {
        note100=0;
    }
    else{
        note100 = parseInt(amount/100)
    amount -= note100 * 100;
    }


     if(amount < 50){
         note50=0
     }
     else{
    note50 = parseInt(amount/50)

    amount -= note50 * 50;

}
// if(amount >= 20){
    if(amount < 20){
        note20=0;
    }
    else{
     note20 = parseInt(amount/20)

   amount -= note20 * 20;
}
// if(amount >= 10){
    if(amount < 10){
        note10=0
    }
    else{
    note10 = parseInt(amount/10)
        
        amount -= note10 * 10;
    }

    // amount -= note10 * 10;

// if(amount >= 5){
    if(amount < 5){
        note5=0
    }
    else{
    note5 = parseInt(amount/5)

   amount -= note5 * 5;
}


// if(amount >= 2){
    // amount -= note2 * 2;
    if(amount < 2){
        note2=0
    }
    else{
    note2 = parseInt(amount/2)
        
        amount -= note2 * 2;
}


if(amount >= 1){
    // amount = amount/notes[1]
      note1=parseInt(amount) ;

}
output.innerHTML="500 :" + note500 +"<br>"
+"100 :" + note100 +"<br>"
+"50 :" + note50 +"<br>"+
"20 :" + note20 +"<br>"
+"10 :" + note10 +"<br>"+
"5 :" + note5 +"<br>"+
"2 :" + note2 +"<br>"
+"1 :" + note1 +"<br>"

})
