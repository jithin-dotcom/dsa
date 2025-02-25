class Node{
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class LinkedList{
    constructor(){
       this.top = null;
       this.length = 0;
    }
    push(value){
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.length++;
    }
    pop(){
        this.top = this.top.next;
        this.length--;
    }
    peek(){
        return this.top ? this.top.value : "stack is empty";
    }
    isEmpty(){
        return this.top === null;
    }
    size(){
       return this.length;
    }

    print(){
        if(!this.top) return "stack is empty";
        let current = this.top;

        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

let stack = new LinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log("popped stack");
stack.pop();


stack.print();
console.log("top : ",stack.peek());
console.log("is empty : ",stack.isEmpty());
console.log("size : ",stack.size());


