function bubbleSort(arr){
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

let arr = [0,9,2,7,4,1,6];
console.log(bubbleSort(arr));