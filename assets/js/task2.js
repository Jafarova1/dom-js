"use strict"

let button1=document.querySelector("Toplama")
let button2=document.querySelector("Vurma")
let button3=document.querySelector("Bölmə")
let button4=document.querySelector("Çıxma")

let input1=document.querySelector(".nums number1");
let input2=document.querySelector(".nums number2");
let result=document.querySelector(".result input")



button1.addEventListener("click",function(){
let input1Value=input1.value;
let input2Value=input2.value;
let resultValue=result.value;
let sum=0;
var numString = userNum + "";
for ( var i = 0; i < numString.length; i++ ){
  sum = sum + Number(numString.charAt(i));
};
result.value = sum;   



   

})
button1.addEventListener("click",function(){
 let  result=input.value
 result=num1+num2
 console.log(result)
    
 
 })