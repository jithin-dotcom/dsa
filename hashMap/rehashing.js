// implement rehashing  automatically

class HashMap{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }
    hash(key){
        let index = 0;
        for(let i = 0; i < key.length; i++){
            index += key.charCodeAt(i);
        }
        return index % this.size;
    }
    set(key,value){
        let index  = this.hash(key);
        if(!this.table[index]){
           this.table[index] = [];
        }
        this.table[index].push([key,value]);
        this.count++;
        if(this.count/this.size >= 0.7){
            this.rehash();
        }
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
    rehash(){
        let oldBucket = this.table;
        this.size *= 2;
        this.table = new Array(this.size);
        this.count = 0;
        for(let bucket of oldBucket){
            if(bucket){
                for(let [key,value] of bucket){
                    this.set(key,value);
                }
            }
        }
    }
    print(){
        for(let i = 0; i < this.size; i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
        
    }
}

let map = new HashMap(5);
map.set("apple",100);
map.set("banana",72);
map.set("orange",60);
map.set("grapes",50);
map.set("grapfr",200);
map.set("waterMelon",35);

console.log(map.get("grapfr"));
map.print();