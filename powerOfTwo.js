function powerOfTwoBitWise(n) {
    
    if( n < 1) {
        return false;
    }
    return (n & (n-1)) === 0;
}

console.log(powerOfTwoBitWise(5));
console.log(powerOfTwoBitWise(4));
console.log(powerOfTwoBitWise(8));
console.log(powerOfTwoBitWise(9));
console.log(powerOfTwoBitWise(1));