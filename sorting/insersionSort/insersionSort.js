function insersionSort(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }else{
                break;
            }
        }
    }
    return arr;
}

let arr = [6, 1, 4, -1, 2];
console.log(insersionSort(arr));