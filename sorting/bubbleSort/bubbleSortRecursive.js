function bubbleSortRecursive(arr,j=0,i=0){
   if(i === arr.length-1) return arr;
   if(j < arr.length-i-1){
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
      return bubbleSortRecursive(arr,j+1,i);
   }else{
      return bubbleSortRecursive(arr,0,i+1);
   }
}

let arr = [0, 25, 12,0, 22, 11,-1,35,-2];
console.log(bubbleSortRecursive(arr));