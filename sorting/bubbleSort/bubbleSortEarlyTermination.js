function bubbleSortEarlyTermination(arr){
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped = true;
            }
        }
        if(swapped === false) break;

    }
    return arr;
}

let arr = [64, 25, 12,0, 22, 11,-1,35,0];
console.log(bubbleSortEarlyTermination(arr));