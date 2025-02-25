function bubbleSortRecursive(arr,i=0,j=0){
    if(i === arr.length) return arr;
    if(j < arr.length-1-i){ 
        if(arr[j] > arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        }
        return bubbleSortRecursive(arr,i,j+1);
    }else{
        return bubbleSortRecursive(arr,i+1,0);
    }

}

let arr = [0, 25, 12,0, 22, 11,-1,35,-2];
console.log(bubbleSortRecursive(arr));