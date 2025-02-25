// implementing queue using linkedlist

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(value){
        let node = new Node(value);
        if(!this.front){
            this.front = node;
            this.rear = node;
        }else{
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }
    dequeue(){
        if(!this.front){
            return -1;
        }
        let removedValue = this.front.value;
        this.front = this.front.next;
        if(!this.front) this.rear = null;
        this.size--;
        return removedValue;

    }
    peek(){
        return this.front ? this.front.value : -1; 
    }
    isEmpty(){
        return this.size === 0;
    }
    print(){
        if(!this.front) return -1;
        let current = this.front;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue()
queue.print();
console.log("rem : ",queue.dequeue());