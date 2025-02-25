// sorting a stack using mergesort

function mergeSortStack(stack){
    if(stack.length <= 1) return stack;
    let mid = Math.floor(stack.length/2);
    let left = stack.slice(0,mid);
    let right = stack.slice(mid);
    return merge(mergeSortStack(left),mergeSortStack(right));
}

function merge(left,right){
    let sortedStack = [];

    while(left.length && right.length){
        if(left[left.length-1] > right[right.length-1]){
            sortedStack.push(left.pop());
        }else{
            sortedStack.push(right.pop());
        }
    }
    while(left.length) sortedStack.push(left.pop());
    while(right.length) sortedStack.push(right.pop());
    return sortedStack;

}

let stack = [3, 1, 4, 2, 5];
console.log(mergeSortStack(stack));