// check if 2 arrays have common elements

function commonElements(arr1,arr2){
    let freq = {};
    let common = [];
    for(let char of arr1){
       freq[char] = (freq[char] || 0) + 1;
    }
    for(let char of arr2){
        if(freq[char]){
            common.push(char);
        }
    }
    return common;

}

let arr1 = [1,2,3,4,5,6];
let arr2 = [5,6,7,8];
console.log(commonElements(arr1,arr2));