
var n = 20; 
var fibonacci = [0, 1]; 

for (i = 2; i < n; i ++) {
fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci.slice(0,n));






















// /*function fib(n) { /* ваш код */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757