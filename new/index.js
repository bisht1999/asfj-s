let multiply = function(x,y){
    console.log(x*y);
  }
  let multiplyByTwo=multiply.bind(this,2);
  multiplyByTwo(7);
  
   multiplyByTwo=multiply.bind(this,5);
  multiplyByTwo(7);
  