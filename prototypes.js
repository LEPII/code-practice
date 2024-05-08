let person = { name: 'Mosh' };
let objectBase = Object.getPrototypeOf(person)
// person._proto_ (parent o               f person)

// this will return an object with properties of the second argument. 
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// arguments for defineProperty is (obj, prop, descriptor) static method defines a new property directly on an object, 
// or modifies an existing property on an object, and returns the object.
Object.defineProperty(person, "name", {
    writable: false, // whether or not the value changes.
    enumerable: false, // can't read it on Object.keys
    configurable: false
    // by default all properties are writable, enumerable and configurable.  
});

delete person.name // - nothing will happen with configurable == false

console.log(descriptor)