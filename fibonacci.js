function fib(n) {

    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}
console.log(fib(5)); // [0,1,1,2,3]
console.log(fib(7)); // [0,1,1,2,3,5,8]
console.log(fib(10)); // [0,1,1,2,3,5,8,13,21,34]