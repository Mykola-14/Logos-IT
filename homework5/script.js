function sum(){
let a = 'hello';
let b = prompt("Enter word code");
if(a==b){
    alert("Ви відгадали, Вітаю")
}
else{
    alert("На жаль, ви не відгадали")
}
let answer = confirm("Бажаєте продовжити?")
if (answer == true){
    return sum()
}
}
