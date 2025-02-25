class Stack{
    constructor(){
       this.queue = [];
    }
    push(value){
        let size = this.queue.length;
        this.queue.push(value);
        while(size--){
            this.queue.push(this.queue.shift());
        }
    }
    pop(){
        return this.queue.length ? this.queue.shift() : -1;
    }
    top(){
        return this.queue.length ? this.queue[0] : -1
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    print(){
        console.log(this.queue);
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log("removed : ",stack.pop());
stack.print();
