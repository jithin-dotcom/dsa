class HashMap{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let index = 0;
        for(let i = 0; i < key.length; i++){
            index += key.charCodeAt(i);
        } 
        return index % this.size;
    }
    set(key,value){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
       
        this.table[index].push([key,value]);
    }
    get(key){
        let index = this.hash(key);
        if(!this.table[index]) return undefined;
        for(let pair of this.table[index]){
            if(pair[0] === key){
                return pair[1];
            } 
        }
    
        return undefined;
    }
    has(key){
        let index = this.hash(key);
        if(!this.table[index]) return false;
        for(let pair of this.table[index]){
            if(pair[0] === key){
                return true;
            }
        }
        return false;
    }
    delete(key){
        let index = this.hash(key);
        if(!this.table[index]) return -1;
        this.table[index] = this.table[index].filter((pair) => pair[0] !== key);
        
    }
    // countFrequency(){
    //     let freq = {};
    //     for(let char of this.table){
    //       if(char){
    //         for(let i = 0; i < char.length; i++){
    //             freq[char[i][0]] = (freq[char[i][0]] || 0) + 1;
    //         }
    //       }   
    //     }
    //     return freq;
    // }
    print(){
        for(let i = 0; i < this.size; i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

let map = new HashMap(5);
map.set("name","jithin");
map.set("name","jenny");
map.set("name","sharddha");
map.set("age",30);
map.set("age",30);

map.print();
console.log(map.get("name"));
console.log(map.get("age"));
map.delete("age");
console.log(map.get("age"));
console.log(map.has("age"));
// console.log(map.countFrequency());
