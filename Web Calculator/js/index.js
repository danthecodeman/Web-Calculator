$(function(){
  //stores input to calculator
  let inputs=[""];
  //string that stores current input
  let totalString;
  //operator array
  let operators1=["+","-","/","*"];
  let operators2=["."];
  //numbers array
  let nums=[0,1,2,3,4,5,6,7,8,9];
  //update function with new value
  function getValue(input){
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicate '.' ");
    }
    else if(inputs.length===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  //updates display
  function update(){
    totalString=inputs.join("");
    $("#steps").html(totalString);
  }
  //evaluates total 
  function getTotal(){
    totalString=inputs.join("");
    $("#steps").html(eval(totalString));
  }
  
  $("a").on("click", function(){
    if(this.id==="AC"){
      inputs=[""];
      update();
    }
    else if(this.id==="CE"){
      inputs.pop();
      update();
    }
    else if(this.id==="="){
      getTotal();
    } else {
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*")===-1){
         getValue(this.id);
         } else {
           getValue(this.id);
         }
    }
  });
});
