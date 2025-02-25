// reverse first k elements of a queue

class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(value){
        this.queue.push(value);
    }
    dequeue(){
        return this.queue ? this.queue.shift() : -1;

    }
    peek(){
        return this.queue ? this.queue[0] : -1;
    }
    reverseNumber(k){
        k = k % this.queue.length;
        this.queue = this.queue.slice(k).concat(this.queue.slice(0,k));
        return this.queue;
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    print(){
        console.log(this.queue);
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
queue.reverseNumber(2);
queue.print();
