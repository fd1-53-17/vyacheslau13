function selfCount (){
    var counter=0;
    function countIncrement(){
        counter++; 
    console.log(counter);
    }
    return countIncrement;
}
var myFun=selfCount();
  myFun();
  myFun();
  myFun();
  var myFun2=selfCount();
  myFun2();
  myFun2();
  myFun2();