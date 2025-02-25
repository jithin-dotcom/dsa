// priority queue using mim-stack

class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(value,priority){
        let node = {value,priority};
        let added =  false;
        for(let i = 0; i < this.queue.length; i++){
            if(priority < this.queue[i].priority){
                this.queue.splice(i,0,node);
                added = true;
                break;
            }
        }
        if(!added) this.queue.push(node);
    }
    dequeue(){
        if(!this.isEmpty()) return -1;
        return this.queue.shift();
    }
    peek(){
        return this.isEmpty ? -1 : this.queue[0];
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    print(){
        if(this.isEmpty()) return -1;
        for(let i = 0; i < this.queue.length; i++){
            console.log(this.queue[i].value);
        }
        
    }
}

let priQ = new Queue();
priQ.enqueue(10,3);
priQ.enqueue(20,1);
priQ.enqueue(30,2);
priQ.print();