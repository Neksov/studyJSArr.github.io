'use strict';
let isNumber = function(n){ //проверка входящих prompt
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let a = document.querySelector('#a'),
      b = document.querySelector('#b'),
      sumBtn = document.querySelector('#sum'),
      mult = document.querySelector('#mult'),
      res = document.querySelector('#res');


const calculator = {
  sum: function(a,b){
    sumBtn.addEventListener('click',()=>{
    if(isNumber(a) || isNumber(b)){
        this.a = a.value;
        this.b = b.value;
        res = a + b;
        console.log(res);
      }else{
      console.log("Введите число");
    }});
},
  mult: function(){
    // ваш код
  },
  show: function(){
    // ваш код
    sum();
  },
};

console.log(calculator);
// calculator.sum(a,b); 


