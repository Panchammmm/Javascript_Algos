function reBi(arr, n) {
    return binary(arr, n, 0, arr.length);
}

function binary(arr, n, left, right) {
    let middle = Math.floor((left + right) / 2);
    if (left > right) {
        return -1;
    }
    if (n === arr[middle]) {
        return middle;
    }

    if (n < arr[middle]) {
        return binary(arr, n, left, middle - 1);
    } else {
        return binary(arr, n, middle + 1, right);
    }
}

console.log(reBi([-2, 3, 4, 5, 6], 6)); // 4
console.log(reBi([-2, 3, 4, 5, 6], 4)); // 2
console.log(reBi([-2, 3, 4, 5, 6], -2)); // 0
console.log(reBi([-2, 3, 4, 5, 6], 5)); // 3