// find first non repeating charter in string

function firstNonRepeatingChar(arr){
    let freq = {};
    for(let char of arr){
        freq[char] = (freq[char] || 0) + 1;
    }
    for(let char of arr){
        if(freq[char] === 1) return char;
    }
    return -1;
}

let arr = [10,2, 5, 3, 5, 10, 3, 3, 5,10,10,4];
console.log(firstNonRepeatingChar(arr));