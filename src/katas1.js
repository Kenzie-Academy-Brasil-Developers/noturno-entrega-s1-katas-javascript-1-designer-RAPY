function oneThroughTwenty(){
  let meuRetorno = [];
  let number=1
    while (number <= 20){
      meuRetorno.push(number)
      number++ 
    }
    return meuRetorno;
}
//call function oneThroughTwenty
 console.log(oneThroughTwenty()); 


function evensToTwenty() {
  let meuRetorno = [];
    for (let numero=1; numero <= 20; numero=numero+2)
      meuRetorno.push(numero)
      return meuRetorno; 
}
//call function evensToTwenty
  console.log(evensToTwenty());

function oddsToTwenty() {
  let meuRetorno = [];   
    for (let numero=1; numero <= 20; numero=numero+2)
      meuRetorno.push(numero)
      return meuRetorno;
}
      
//call function oddsToTwenty
  console.log(oddsToTwenty());

function multiplesOfFive() {
  let meuRetorno = [];   
    for (let numero=5; numero <= 100; numero=numero+5)
      meuRetorno.push(numero)
      return meuRetorno;
}
              
//call function multiplesOfFive
  console.log(multiplesOfFive());

function squareNumbers() {
  let meuRetorno = [];
  for (let numero=1; numero*numero <= 100; numero=numero+1)
      meuRetorno.push(numero*numero)
      return meuRetorno;
}
//call function squareNumbers
console.log(squareNumbers());

function countingBackwards() {
  let meuRetorno = []; 
  for (let numero=20; numero > 0; numero=numero-1)
    meuRetorno.push(numero)
    return meuRetorno;
}
         
//call function countingBackwards
console.log(countingBackwards());

function evenNumbersBackwards() {
  let meuRetorno = [];    
  for (let numero=20; numero > 0; numero=numero-2)
      meuRetorno.push(numero)
      return meuRetorno;
  }
//call function evenNumbersBackwards
  console.log(evenNumbersBackwards());

function oddNumbersBackwards() {
  let meuRetorno = [];
  for (let numero=19; numero > 0; numero-=2)
    meuRetorno.push(numero)
      return meuRetorno;
}
//call function oddNumbersBackwards
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
  let meuRetorno = [];
  for (let numero=100; numero > 0; numero-=5)
      meuRetorno.push(numero)
      return meuRetorno;
}
//call function multiplesOfFiveBackwards
  console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
  let meuRetorno = [];  
  for (let numero=100; numero*numero >= 1; numero=numero-1)
      if (numero*numero <=100)
      meuRetorno.push(numero*numero)
      return meuRetorno;
}      
//call function squareNumbers
  console.log(squareNumbersBackwards());
