var arr = [1,2,3,4]
var answer = Number(prompt("Введіть число"));
if (answer == 1){
	arr.unshift(arr[3]);
	arr.pop()
	console.log (arr);
}
else if(answer == 2){
	arr.unshift(arr[2], arr[3]);
	arr.pop()
	arr.pop()
	console.log (arr);
}
else if(answer == 3){
	arr.unshift(arr[1], arr[2], arr[3]);
	arr.pop()
	arr.pop()
	arr.pop()
	console.log (arr);
}
else if(answer == 4){
	console.log(arr);
}




