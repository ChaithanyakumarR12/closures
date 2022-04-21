function Counter(){
    var counter = 0;
    function IncreaseCounter() {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }
  function out(l){
  let a;
  inner(22);
  function inner(b){
      a=l*b;
  }
  console.log(a);
}
out(22);
function outc(){
    let c=0;
     innerc=function(){
         console.log(++c);
     }
}
outc();
innerc();
innerc();
innerc();

var a = 12;
(function () {
  alert(a);
})();
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);