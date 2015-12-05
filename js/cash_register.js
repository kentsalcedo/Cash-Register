var cashRegister = (function(){

  var cashRegisterBalance = 0;
  var result = {};
  var myDisplay = document.getElementById('display');
  var inputValue = myDisplay.innerHTML;

  // clears display but not balance
  result.clear = function(){
    calculator.clearMemory();
  };

  // getter
  result.getBalance = function(){
    return cashRegisterBalance;
  };

  // setter
  result.deposit = function(moneyIn){
      cashRegisterBalance += moneyIn;
      return cashRegisterBalance;
  };

  //setter
  result.withdraw = function(moneyOut){
      cashRegisterBalance -= moneyIn;
      return cashRegisterBalance;
  };

  result.getInputValue = function(){
    return inputValue;
  };

  result.setInputValue = function(n){
   inputValue = n;
  };


  return result;

})();


console.log(calculator.getMemory(), ' is the number stored in memory');

var buttonOne = document.getElementById("one");

//event listeners

buttonOne.addEventListener('click', function(){
  //document.getElementById("display").innerHTML = "Hello World";
  //document.getElementById("display").innerHTML += "1";

  if (calculator.getTotal() === undefined){
    calculator.load(1);
    //calculator.setMemory(1);
    console.log('1 has been pushed and total WAS a undefined');
    document.getElementById("display").innerHTML += "1";
  }
  else {
    calculator.setMemory(1);
    console.log('1 has been pushed and total is a NOT undefined');
    document.getElementById("display").innerHTML += "1";
  }
  console.log(calculator.getMemory(), ' is the number stored in memory');
  console.log(calculator.getTotal(), 'is the current total');

});

var buttonTwo = document.getElementById("two");
buttonTwo.addEventListener('click', function(){
  //document.getElementById("display").innerHTML = "Hello World";
  //document.getElementById("display").innerHTML += "1";

  if (calculator.getTotal() === undefined){
    calculator.load(2);
    calculator.setMemory(2);
    console.log('2 has been pushed and total is a undefined');
    document.getElementById("display").innerHTML += "2";
  }
  else {
    calculator.setMemory(2);
    console.log('2 has been pushed and total is a NOT undefined');
    document.getElementById("display").innerHTML += "2";
  }
  console.log(calculator.getMemory(), ' is the number stored in memory');
  console.log(calculator.getTotal(), 'is the current total');

});


var buttonThree = document.getElementById("three");
buttonThree.addEventListener('click', function(){
    //document.getElementById("display").innerHTML = "Hello World";
    document.getElementById("display").innerHTML += "3";
    console.log('3 has been pushed');
    calculator.setMemory(3);
    console.log(calculator.getMemory(), ' is the number stored in memory');
});

var buttonFour = document.getElementById("four");
buttonFour.addEventListener('click', function(){
    //document.getElementById("display").innerHTML = "Hello World";
    document.getElementById("display").innerHTML += "4";
    console.log('4 has been pushed');
    calculator.setMemory(4);
    console.log(calculator.getMemory(), ' is the number stored in memory');
});

var buttonFive = document.getElementById("five");
buttonFive.addEventListener('click', function(){
    //document.getElementById("display").innerHTML = "Hello World";
    document.getElementById("display").innerHTML += "1";
    console.log('5 has been pushed');
    calculator.setMemory(5);
    console.log(calculator.getMemory(), ' is the number stored in memory');
});

var buttonSix = document.getElementById("six");
buttonSix.addEventListener('click', function(){
    //document.getElementById("display").innerHTML = "Hello World";
    document.getElementById("display").innerHTML += "1";
    console.log('6 has been pushed');
    calculator.setMemory(6);
    console.log(calculator.getMemory(), ' is the number stored in memory');
});

var buttonSeven = document.getElementById("seven");
buttonSeven.addEventListener('click', function(){
    //document.getElementById("display").innerHTML = "Hello World";
    document.getElementById("display").innerHTML += "1";
    console.log('7 has been pushed');
    calculator.setMemory(7);
    console.log(calculator.getMemory(), ' is the number stored in memory');
});

var buttonEight = document.getElementById("eight");
buttonEight.addEventListener('click', function(){
    //document.getElementById("display").innerHTML = "Hello World";
    document.getElementById("display").innerHTML += "1";
    console.log('8 has been pushed');
    calculator.setMemory(8);
    console.log(calculator.getMemory(), ' is the number stored in memory');
});

var buttonNine = document.getElementById("nine");
buttonNine.addEventListener('click', function(){
    //document.getElementById("display").innerHTML = "Hello World";
    document.getElementById("display").innerHTML += "1";
    console.log('9 has been pushed');
    calculator.setMemory(9);
    console.log(calculator.getMemory(), ' is the number stored in memory');
});

var buttonPlus = document.getElementById("plus");
buttonPlus.addEventListener('click', function(){
    document.getElementById("display").innerHTML = ' + ';
    calculator.setArith(calculator.add(calculator.getMemory()));
    //calculator.add(calculator.getMemory());
    console.log(calculator.getTotal(), 'is the current total');
});

var buttonEquals = document.getElementById("equals");
buttonEquals.addEventListener('click', function(){
    //debugger;
    //document.getElementById("display").innerHTML = "Hello World";
    // console.log( calculator.getMemory(), 'is the memory right now');
    // console.log( calculator.getTotal(), 'is the total right now');
    // console.log( calculator.compute );

    // console.log( calculator.getTotal(), 'is the total after');
    // console.log('= has been pushed');

    document.getElementById("display").innerHTML = calculator.compute(calculator.getMemory());
});


// tester to see if I can call functions from calculator.js
//  calculator.cashRegisterLinkTest();