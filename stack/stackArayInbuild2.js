class Stack{
    constructor(){
        this.arr = [];
    }
    push(val){
        this.arr.push(val)
    }
    pop(){
        this.arr.pop();
    }
    top(){
        return this.arr.length > 0 ? this.arr[this.arr.length-1] : "stack is empty" ;
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    size(){
        return this.arr.length;
    }
    print(){
        console.log(this.arr);
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