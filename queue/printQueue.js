// implement print queue using array

class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(doc){
        this.queue.push(doc);
    }
    dequeue(){
        if(this.queue.length === 0){
            return -1;
        }
       return  this.queue.shift();
    }
    peek(){
        return this.queue.length ? this.queue[0] : -1
    }
    isempty(){
        return this.queue.length === 0;
    }
    print(){
        if(this.queue.length === 0){
            return -1;
        }
        console.log(this.queue);
    }
}

let printQueue = new Queue();
printQueue.enqueue("document 1");
printQueue.enqueue("document 2");
printQueue.enqueue("document 3");
printQueue.print();
printQueue.dequeue();
printQueue.print();