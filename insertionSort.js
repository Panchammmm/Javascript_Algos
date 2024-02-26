function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++){
        let numToInsert = arr[i];
        let SE = i-1; // sorted element
        while( SE >= 0 && arr[SE] > numToInsert)
        {
            arr[SE+1] = arr[SE];
            SE = SE-1;
        }
        arr[SE+1] = numToInsert;
    }
}

const arr = [-6,20,8,-2,4];
insertionSort(arr);
console.log(arr);