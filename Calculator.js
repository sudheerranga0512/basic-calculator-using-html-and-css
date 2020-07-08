var value1="\t",value2="\t",value3="0",value4="off";
function my1(){ 
    if(value4=="on"){  
    var b=document.getElementById("b1").value; 
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`;  
    value1=value1+b;
    } 
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`; 
        value2=value2+b;
    } 
}
}  
function my2(){ 
    if(value4=="on"){  
    var b=document.getElementById("b2").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}   
function my3(){  
    if(value4=="on"){ 
    var b=document.getElementById("b3").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}   
function my4(){ 
    if(value4=="on"){  
    var b=document.getElementById("b4").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}   
function my5(){ 
    if(value4=="on"){  
    var b=document.getElementById("b5").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}  
function my6(){ 
    if(value4=="on"){  
    var b=document.getElementById("b6").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}  
function my7(){ 
    if(value4=="on"){  
    var b=document.getElementById("b7").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}  
function my8(){ 
    if(value4=="on"){  
    var b=document.getElementById("b8").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}  
function my9(){ 
    if(value4=="on"){  
    var b=document.getElementById("b9").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}  
function my0(){ 
    if(value4=="on"){  
    var b=document.getElementById("b0").value;  
    if(value3=="0"){
    document.getElementById("demo").innerHTML = `${+value1}${b}`; 
    value1=value1+b;}
    else{ 
        document.getElementById("demo").innerHTML = `${+value2}${b}`;
        value2=value2+b;
    }  
}
}  
function sub(){ 
    if(value4=="on"){
    var a=document.getElementById("bsub").value;  
    value3=a;
    document.getElementById("demo").innerHTML=value3;
    }
} 
function div(){ 
    if(value4=="on"){
    var a=document.getElementById("bdiv").value;  
    value3=a;
    document.getElementById("demo").innerHTML=value3;
    }
} 
function mul(){ 
    if(value4=="on"){
    var a=document.getElementById("bmul").value;  
    value3=a;
    document.getElementById("demo").innerHTML=value3;
    }
} 
function sum(){ 
    if(value4=="on"){
    var a=document.getElementById("bsum").value;  
    value3=a;
    document.getElementById("demo").innerHTML=value3;
    }
}  
function on(){ 
    var a=document.getElementById("on").value; 
    document.getElementById("demo").innerHTML="on"; 
    value1="0";
    value2="0"; 
    value4="on";
} 
function off(){ 
    var a=document.getElementById("off").value;
    document.getElementById("demo").innerHTML=""; 
    value4="off";
}
function equal(){   
    if(value4=="on"){ 
    if(value3=="+"){ 
            document.getElementById("demo").innerHTML = parseInt(value1) + parseInt( value2); 
            value1=parseInt(value1) + parseInt( value2);
            value2=0;

    } 
 else if(value3=="-"){
            document.getElementById("demo").innerHTML = parseInt(value1) - parseInt( value2); 
            value1=parseInt(value1) - parseInt( value2);
            value2=0;

            } 
else if(value3=="*"){
                document.getElementById("demo").innerHTML = parseInt(value1) *  parseInt( value2); 
                value1=parseInt(value1) * parseInt( value2);
                value2=0;

                } 
    else  if(value3=="/"){
                    document.getElementById("demo").innerHTML = parseInt(value1) /  parseInt( value2); 
                    value1=parseInt(value1) / parseInt( value2);
                    value2=0;

                    }   
  else{
      document.getElementById("demo").innerHTML="ERRORS";
  } 
}
}