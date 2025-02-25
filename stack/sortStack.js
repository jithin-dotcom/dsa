// sorting a stack using recursion 

function sortStack(stack){
   if(stack.length === 0) return stack;
   let top = stack.pop();
   sortStack(stack);
   let temp = [];
   while(stack.length > 0 && stack[stack.length-1] > top){
      temp.push(stack.pop());
   }
   stack.push(top);
   while(temp.length > 0){
      stack.push(temp.pop());
   }
   return stack;
}

let stack = [3, 1, 4, 2, 5];
console.log(sortStack(stack)); 