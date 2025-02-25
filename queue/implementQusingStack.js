class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(value){
        this.stack1.push(value);
    }
    dequeue(){
        if(!this.stack2.length){
            if(!this.stack1.length) return -1;
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    front(){
        if(!this.stack2.length){
            if(!this.stack1.length) return -1;
            while(this.stack1.length){
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length-1];
    }
    isEmpty(){
        return !this.stack1.length && !this.stack2.length;
    }
    print(){
        if(this.stack2.length){
            console.log(...this.stack2.reverse(),...this.stack1);
        }
        else{
            console.log(this.stack1);
        }
    }

}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue();
queue.print();