function oneThroughTwenty(){
  let number=1
  while (number <= 20){
    console.log(number)
      number++
    }
  }
 //call function oneThroughTwenty 
  oneThroughTwenty()


function evensToTwenty() {
    for (let numero=0; numero <= 20; numero=numero+2)
      console.log(numero)
   }

  //call function evensToTwenty
  evensToTwenty()

function oddsToTwenty() {
    for (let numero=1; numero <= 20; numero=numero+2)
      console.log(numero)
    }
    
    //call function oddsToTwenty
    oddsToTwenty()

function multiplesOfFive() {
  for (let numero=5; numero <= 100; numero=numero+5)
    console.log(numero)
 }

//call function multiplesOfFive
multiplesOfFive()

function squareNumbers() {
  for (let numero=1; numero*numero <= 100; numero=numero+1)
    console.log(numero*numero)
 }
  
  //call function squareNumbers
  squareNumbers()

function countingBackwards() {
    for (let numero=20; numero > 0; numero=numero-1)
      console.log(numero)
  }
   
   //call function countingBackwards
   countingBackwards()

function evenNumbersBackwards() {
  for (let numero=20; numero > 0; numero=numero-2)
    console.log(numero)
  }
   
   //call function evenNumbersBackwards
   evenNumbersBackwards()

   function oddNumbersBackwards() {
    for (let numero=19; numero > 0; numero-=2)
       
        console.log(numero)
  }
   
   //call function oddNumbersBackwards
   oddNumbersBackwards()

   function multiplesOfFiveBackwards() {
    for (let numero=100; numero > 0; numero-=5)
       
        console.log(numero)
   }
   
   //call function multiplesOfFiveBackwards
   multiplesOfFiveBackwards()

   function squareNumbersBackwards() {
    for (let numero=100; numero*numero >= 1; numero=numero-1)
    if (numero*numero <=100)  
    console.log(numero*numero)
   }
    
    //call function squareNumbers
    squareNumbersBackwards()
