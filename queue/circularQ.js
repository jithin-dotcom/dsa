class Queue{
    constructor(size){
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }
    enqueue(value){
        if((this.rear+1) % this.size  === this.front){
            return -1;
        } 
        if(this.front === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }
    dequeue(){
        if(this.front === -1){
            return -1;
        }
        let removedElement = this.queue[this.front];
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.front + 1) % this.size;
        }
        return removedElement;

    }
    peek(){
        return this.front >= 0 ? this.queue[this.front] : -1;
    }
    isEmpty(){
        return this.front === -1;
    }
    print(){
        if(this.front === -1){
            return -1;
        }
        let i = this.front;
        while(true){
            console.log(this.queue[i]);
            if(i === this.rear) break;
            i = (i + 1) % this.size;
        }
    }
}

let circQ = new Queue(4);
circQ.enqueue(10);
circQ.enqueue(20);
circQ.enqueue(30);
circQ.enqueue(40);
circQ.print();
circQ.dequeue();
console.log("after dequeue : ")
circQ.print();