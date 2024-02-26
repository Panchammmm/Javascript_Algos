function reFact(n) {
    if (n === 0) {
        return 1;
    }
    return n * reFact(n - 1);
}

console.log(reFact(5));
console.log(reFact(3));
console.log(reFact(1));