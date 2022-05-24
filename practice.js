function test(){
    let userName=document.getElementById("txtName").value;
    let userAge=document.getElementById("txtAge").value;
    let userGender=document.getElementById("selGender").value;

    console.log(userName,userAge,userGender);
}

function sum(){
    console.log(10+10);
}
sum();

let sum2 = function(){
  console.log(3+3);
}
sum2();

function sum(num1, num2) {  //num1 and num2 are arguments
  console.log(num1 + num2);
}
sum(10,10);
sum(3,3);
sum(2,6);

Using the return value

function sum(n1,n2){
  return n1 + n2;
}
const result = sum(2,4);
console.log(result);


