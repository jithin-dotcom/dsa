function Stack(){
    let arr = [];
    
    this.push = function(val){
        arr.push(val);
    }
    this.pop = function(){
        arr.pop();
    }
    this.top = function(){
       return  arr.length >= 1 ? arr[arr.length-1] : "stack is empty"; 
    }
    this.isEmpty = function(){
        return arr.length <= 0 ? true : false;
    }
    this.size = function(){
        return arr.length;
    }
    this.print = function(){
        console.log(arr);
    }
}

let myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.print();
myStack.pop();
myStack.print();
console.log(myStack.top());
console.log(myStack.isEmpty());
console.log(myStack.size());