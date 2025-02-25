function removeMiddle(arr,curr=0,mid=Math.floor(arr.length/2)){
    if(curr === mid){
        return arr.pop();
    }
    let temp = arr.pop();
    removeMiddle(arr,curr+1,mid);
    arr.push(temp);
}


let arr = [4, 15, 2, 10, 8];
removeMiddle(arr);
console.log(arr);