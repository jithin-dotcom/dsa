class Stack{
    constructor(){
        this.arr = [];
    }
    push(val){
        this.arr.push(val);
    }
    pop(){
        return this.arr.pop();
    }
    top(){
        return this.arr.length ? this.arr[this.arr.length-1] : -1;
    }
    isEmpty(){
        return this.arr.length > 0;
    }
    size(){
        return this.arr.length;
    }
    removeMiddle(curr=this.size()-1,mid=Math.floor(this.size()/2)){
 
       if(curr === mid){
          return this.pop();
       }
       let temp = this.pop();
       this.removeMiddle(curr-1,mid);
       this.push(temp);
    }
    print(){
        console.log(this.arr);
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
stack.removeMiddle();
stack.print();
