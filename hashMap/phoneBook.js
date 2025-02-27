// implement a phonebook using hash table

class PhoneBook{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(name){
        let index = 0;
        for(let i = 0; i < name.length; i++){
            index += name.charCodeAt(i);
        }
        return index % this.size;
    }
    addNumber(name,number){
        let index = this.hash(name);
        if(!this.table[index]) this.table[index] = [];
        for(let pair of this.table[index]){
            if(pair[0] === name){
                pair[1] = number;
            }
        }
        this.table[index].push([name,number]);
    }
    getNumber(name){
        let index = this.hash(name);
        if(!this.table[index]) return undefined;
        for(let pair of this.table[index]){
            if(pair[0] === name){
                return pair[1];
            }
        }
        return undefined;
    }
    hasNumber(name){
        let index = this.hash(name);
        if(!this.table[index]) return false;
        for(let pair of this.table[index]){
            if(pair[0] === name){
                return true;
            }
        }
        return false;
    }
    deleteContact(name){
        let index = this.hash(name);
        if(!this.table[index]) return -1;
        this.table[index] = this.table[index].filter((char) => char[0] !== name);
        return this.table[index];
    }
    print(){
        for(let i = 0; i < this.size; i++){
            if(this.table[i]){
                for(let char of this.table[i]){
                    console.log(`name : ${char[0]}  phoneNo : ${char[1]}`);
                }
            }
        }
    }
}

let phoneBook = new PhoneBook(10);

phoneBook.addNumber("jithin",12345);
phoneBook.addNumber("uday",325672);
phoneBook.addNumber("sojil",8329);
phoneBook.addNumber("arjunLal",9466);
phoneBook.print();
console.log("after delete");
// phoneBook.deleteContact("jithin");
phoneBook.print();
console.log(phoneBook.hasNumber("jithin"));
console.log(phoneBook.hasNumber("uday"));
console.log(phoneBook.getNumber("arjunLal"));
phoneBook.addNumber("jithjm",51821176);
phoneBook.addNumber("jithin",28940)
phoneBook.print();
console.log(phoneBook.getNumber("jithin"));
console.log("collision hamdling")
console.log(phoneBook.getNumber("jithin"));
console.log(phoneBook.getNumber("jithjm"));
