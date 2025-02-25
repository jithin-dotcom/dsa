class Queue{
    constructor(){
        this.arr = [];
    }
    enqueue(val){
        this.arr.push(val);
    }
    dequeue(){
        return this.isEmpty() ? -1 : this.arr.shift();
    }
    front(){
        return this.isEmpty() ? -1 : this.arr[0];
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

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.isEmpty());
console.log(queue.front());
console.log(queue.size());