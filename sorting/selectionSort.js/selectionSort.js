function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let midIndex = i;
        for(let j = i+1; j < arr.length; j++){
           if(arr[j] < arr[midIndex]){
             midIndex = j;
           }
        }
        if(midIndex !== i){
            [arr[midIndex],arr[i]] = [arr[i],arr[midIndex]];
        }
    }
    return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));