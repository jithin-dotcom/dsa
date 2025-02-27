// count frequency of each element of array

function countFrequency(arr){
   let freq = {};
   for(let num of arr){
      freq[num] = (freq[num]||0) + 1;
   }
   return freq;
}
let arr = [10, 5, 3, 5, 10, 3, 3, 5,10,10];
console.log(countFrequency(arr));