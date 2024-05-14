const calculator =
document.getElementById("display");


function enter(input){
  calculator.value  += input;
}

function abc(){
  calculator.value  = "" ;
}

function calculate(){
  calculator.value  =eval(calculator.value);
}

function raiseTo(){
  calculator.value= Math.pow(parseFloat(calculator.value),2)
}

function deleteCalc(){
  calculator.value = calculator.value.toString().slice(0, -1);
  
}

