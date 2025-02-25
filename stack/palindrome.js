function palindrome(str){
    let stack = [];
    let rev = "";
    for(let char of str){
        stack.push(char);
    }
    while(stack.length > 0){
        rev += stack.pop();
    }
    return str === rev;
}

let str = "jithtij";
console.log(palindrome(str));