function postFix(str){
    let stack = [];
    for(let char of str){
       if(!isNaN(char)){
         stack.push(Number(char));
       }else{
        let b = stack.pop();  
        let a = stack.pop();
          switch(char){
            case "+" : stack.push(a+b);
                break;
            case "-" : stack.push(a-b);
                break;
            case "*" : stack.push(a*b);
                break;
            case "/" : stack.push(a/b);
                break;
          }
       }
    }
    return stack.pop()
}
let str = "52+83-*";
console.log(postFix(str));