var slno=1;
 function color(){
     document.getElementById("from").style.boxShadow="0px 0px 5px red";
     document.getElementById("to").style.boxShadow="";
     document.getElementById("amount").style.boxShadow="";
 
 
 }
 function colorone(){
     document.getElementById("from").style.boxShadow="";
     document.getElementById("to").style.boxShadow="0px 0px 5px red";
     document.getElementById("amount").style.boxShadow="";
 }
 function colortwo(){
     document.getElementById("from").style.boxShadow="";
     document.getElementById("to").style.boxShadow="";
     document.getElementById("amount").style.boxShadow="0px 0px 5px red";
 }  
 var from=document.getElementById("from").value;
     var to=document.getElementById("to").value;
     var amount=document.getElementById("amount").value;
 function transfer(e){
     var from=document.getElementById("from").value;
     var to=document.getElementById("to").value;
     
     var amount=document.getElementById("amount").value;
 
     var qw=document.getElementById("transfered");
             
     var table=document.getElementById("details");
     
     if(from==""){
         document.getElementById("demo").innerHTML="please enter the sender name";
         document.getElementById("demo").style.color="red";
        
        }
        if(to==""){
         document.getElementById("demoone").innerHTML="please enter the receiver name";
         document.getElementById("demoone").style.color="red";
         
        }
        if(amount=="" ||amount==0){
         document.getElementById("demotwo").innerHTML="please enter the valid amount";
         document.getElementById("demotwo").style.color="red";
         
        }
        for(var i=1;i<11;i++){
            if(from==table.rows[i].cells[1].innerHTML){
                console.log(table.rows[i].cells[1].innerHTML);
               var s=table.rows[i].cells[3].innerHTML;
            }
         }
        
       
         console.log(typeof(s));
         console.log(typeof(amount));
         if(parseInt(amount) > parseInt(s)){
             document.getElementById("demotwo").innerHTML="Insufficient Balance";
             document.getElementById("demotwo").style.color="red";
             
         }
         
          if(!(from=="" && to!=="" && amount=="")) {  
          var newrow=qw.insertRow();
             var cell1=newrow.insertCell(0);
             var cell2=newrow.insertCell(1);
             var cell3=newrow.insertCell(2);
             var cell4=newrow.insertCell(3);
             cell1.innerHTML=slno;
             cell2.innerHTML=from;
             cell3.innerHTML=to;
             cell4.innerHTML=amount;
             
                       
          }
         document.get
         slno++;
         const d = new Date();
         setTimeout(function(){
             alert("amount is debited from"+from+ 'to'+to+ 'account'+d)
         },3000)
     }
     
