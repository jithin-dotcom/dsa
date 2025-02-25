function validParenthesis(str){
   let stack = [];
   let map = {
     ")" : "(",
     "}" : "{",
     "]" : "["
   }
   for(let char of str){
       if(char in map){
         let opening = stack.length ? stack.pop() : "#";
         if(opening !== map[char]) return false
       }else{
          stack.push(char);
       }
   }
   return stack.length === 0;
}

let str = "{()}{([])}{}";
console.log(validParenthesis(str));