"use strict"


let input=document.querySelector("input")

let button=document.querySelector("button")
let ul=document.querySelector("#products ul")
let icon=document.querySelector("#products i")



 button.addEventListener("click",function(){
 let inputValue=input.value;

 let li=document.createElement("li");

 li.className="list-group-item my-2";

 li.innerText=inputValue;

 ul.append(li);

 input.value="";
 })


icon.addEventListener("click",function(){
    // let li=document.createElement("li");
    // li.remove("li")
    ul.remove("li");







})










