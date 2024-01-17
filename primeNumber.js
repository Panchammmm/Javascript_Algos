function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

console.log(isPrime(5)); //true
console.log(isPrime(7)); //true
console.log(isPrime(12)); //false
console.log(isPrime(3)); //true