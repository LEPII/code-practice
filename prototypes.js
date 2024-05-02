let person = { name: 'Mosh' };
let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');