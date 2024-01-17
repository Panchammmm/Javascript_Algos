function recursiveFib(n) {

    if (n < 2) {
        return n;
    }

    return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log(recursiveFib(3)); // 0,1,1,2
console.log(recursiveFib(5)); // 0,1,1,2,3,5
console.log(recursiveFib(10)); // 