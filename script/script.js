let sum = "";

function addToSum(operator){
 sum = sum + operator;
   document.getElementById("output").innerText = sum;
}

function evaluateSum(){
 sum = eval(sum);
document.getElementById("output").innerText = sum;
}

function clearSum(){
 sum = "";
document.getElementById("output").innerText = "";
}

function deleteChar(){
sum = sum.slice(0, -1);
 document.getElementById("output").innerText = sum;
}