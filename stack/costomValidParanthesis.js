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
        return this.arr.length > 0 ? this.arr[this.arr.length-1] : "stack is empty";
    }
    isEmpty(){
        return this.arr.length === 0;
    }
    size(){
        return this.arr.length;
    }
    validParanthses(str){
        
        let map = {
            ")":"(",
            "}":"{",
            "]":"["
        }
        for(let char of str){
            if(char in map){
                let opening = this.isEmpty() ? "#" : this.pop();
                if(opening !== map[char]){
                    return false;
                }
            }else{
                this.push(char);
            }
        }
        return this.isEmpty();

    }
    print(){
        console.log(this.arr);
    }

}

let stack = new Stack();

console.log(stack.validParanthses("[][([{}])]"));