// find kth largest element in an  array

function kthLargest(arr,k){
   for(let i = 0; i < k; i++){
    let maxIndex = i;
    for(let j = i+1; j < arr.length; j++){
        if(arr[j] > arr[maxIndex]){
            maxIndex = j;
        }
    }
    if(maxIndex !== i){
        [arr[i],arr[maxIndex]] = [arr[maxIndex],arr[i]];
    }
   }
   console.log("arr : ",arr);
   return arr[k-1];
}

let arr = [1,2,1,8,0,5];
let k = 3;
console.log(kthLargest(arr,k));