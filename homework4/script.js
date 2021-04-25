function sum(){
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = 100 - a
let v = 100 - b
if (c < v){
    alert(a +  " воно є ближче до 100")
}
else if(v<c){
    alert(b +  " воно є ближче до 100")
}
else if(a=b){
    alert("Числа рівні")
}
}

