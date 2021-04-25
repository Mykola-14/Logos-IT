setrandom = () =>{
let a = Math.floor(Math.random() * 10);
console.log(a);
let b = Number(prompt("enter your Number"));
if (a==b){
    alert("Вітаємо , ви вгадали")
}
else{
    alert("Ви не вгадали");
}
}