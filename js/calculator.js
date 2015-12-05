// test 1 works
// test 1 var calculator = {};

var calculator = (function(){

var memory = 0;
var total;
var calc = {};
var arithToBePerform;
var firstInput = false;

calc.setArith = function(meth){
  arthToBePerform = meth;
};

calc.compute = function(){
  return arthToBePerform;
};

calc.load = function(n){
  firstInput = true;
  total = n;
};

calc.setsFirstInput = function(){
  firstInput = false;
};

calc.getTotal = function(){
  return total;
};

calc.setTotal = function(n){
  total = n;
};

calc.add = function(n){
  return total += n;
};

calc.minus = function(n){
  console.log('hello minus');
  return total -= n;
};

calc.multiply = function(n){
  console.log('hello multiply');

  return total *= n;
};

calc.divide = function(n){

  return total /= n;
};

calc.setMemory = function(n){
  memory = n;
};

calc.getMemory = function(){
  return memory;
};

calc.clearMemory = function(){
  memory = 0;
};

calc.cashRegisterLinkTest = function(){
  console.log('Hooray, this works. Both calculator.js and cash_register.js have been loaded in the html file and this function has been called from cash_register. ballmer\'s peak ftw!!!!');
};

return calc;

})();

// outside of calculator iife


// various tests to make sure the files worked and are linked properly


// calculator.add(6);

console.log(calculator.getTotal());



// test 2 works
// var x = calculator().load();

// test 1 works
// var x = calculator().load();