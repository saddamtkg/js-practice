// JavaScript Memory Management Example

class MemoryManager {
    constructor() {
        this.memory = {};
    }

    // allocate a value at a key
    allocate(key, value) {
        this.memory[key] = value;
    }

    // free a key
    free(key) {
        delete this.memory[key];
    }

    // get a value
    read(key) {
        return this.memory[key];
    }
}

// example usage
const mm = new MemoryManager();
mm.allocate('a', 1);
console.log(mm.read('a')); // 1
mm.free('a');
console.log(mm.read('a')); // undefined

// Simulate garbage collection by removing references
function simulateGarbageCollection() {
    for (let key in mm.memory) {
        mm.free(key);
    }
}
simulateGarbageCollection();
console.log(mm.memory); // {}
// Memory is now cleared









// JavaScript Memory

/*
? Call Stack
! Primitive Data Type
* String, Number, Boolean, Undefined, Null, Symb, BigInt
*/
let fullName = 'Ali Hossain';

let webDeveloper = fullName;
webDeveloper = 'Shovo';

console.log(fullName);
console.log(webDeveloper);

/*
? Heap
! Non Primitive Data Type
* Object, Array
*/

let student = {
  name: 'Ali',
  age: 30,
};

let people = student;
people = {
  name: 'Shovo',
  age: 31,
};
people.name = 'Shovo';
people.age = 31;

let car = ['BMW', 'Audi'];

let newCar = car;
newCar[0] = 'Toyota';

console.log(car);
console.log(newCar);
