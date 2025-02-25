let arr = [1,2,3,2,1];
let num = 0;
for(let i = 0; i < arr.length; i++){
    num ^= arr[i];
}
console.log(num); 