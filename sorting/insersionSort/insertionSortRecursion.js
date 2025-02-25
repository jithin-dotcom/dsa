function insersionSortRecursion(arr,i=1,j=1){
    if(i > arr.length-1) return arr;
    
        if(j >= 0 && arr[j] > arr[j-1]){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            return insersionSortRecursion(arr,i,j-1);
        }
       
       

    return insersionSortRecursion(arr,i+1,i+1);
        
    
    
}

let arr = [6, 1, 4, -1, 2];
console.log(insersionSortRecursion(arr));




// function insertionSortRecursion(arr, i = 1, j = 1) {
//     if (i >= arr.length) return arr; // Base case: Stop when i reaches the end

//     // if (j === null) j = i; // Initialize j when starting a new i

//     if (j > 0 && arr[j] > arr[j - 1]) {
//         [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]; // Correct swap
//         return insertionSortRecursion(arr, i, j - 1); // Recursive call for j
//     }

//     return insertionSortRecursion(arr, i + 1, i+1); // Move to next i
// }

// let arr = [6, 1, 4, -1, 2];
// console.log(insertionSortRecursion(arr)); // Output: [ -1, 1, 2, 4, 6 ]
