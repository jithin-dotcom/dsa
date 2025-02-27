// apply quick sort in with in place sorting( O(1) space complexity ) without creating extra array


function quickSort(arr,low=0,heigh=arr.length-1){
    if(low < heigh){
        let pivotIndex = partition(arr,low,heigh);
        quickSort(arr,low,pivotIndex-1);
        quickSort(arr,pivotIndex+1,heigh);
    }
    return arr;
}

function partition(arr,low,heigh){
    let pivot = arr[heigh];
    let i = low - 1;
    for(let j = low; j < heigh; j++){
        if(arr[j] < pivot){
           i++;
           [arr[j],arr[i]] = [arr[i],arr[j]];
        }
    }
    [arr[i+1],arr[heigh]] = [arr[heigh],arr[i+1]];
    return i+1;
}

let arr = [6, 3, 8, 5, 2, 7, 4, 1];
console.log(quickSort(arr));