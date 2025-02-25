function reverseString(str){
    let stack = [];
    let reverseStr = "";
    for(let char of str){
       stack.push(char);
    }
   while(stack.length > 0){
    reverseStr += stack.pop();
   }
   return reverseStr;
}

let str = "jithin";
console.log(reverseString(str));