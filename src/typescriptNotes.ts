/// FUNDAMENTALS

/// Any
function render(document: any) {
  console.log(document);
}

/// Arrays

// This could cause errors if a function expecting
// this array expects only numbers.
// let numbers = [1, 2, "3"]

// this would type check arrays with numbers
let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n.toExponential);

/// Tuples

// Description: A tuple represents an ordered list of values of potentially different types.
// It's like a fixed-length array where each element has a specific type.
// Use Cases: Use tuples when you need to represent a group of related values with specific types in a specific order. For example, you could create a tuple to represent a person's name (string) and age (number).
// Notes:
// Internally, they are represented using plain Javascript arrays.
// ** A bug would be using user.push(2) for example on the user array.
// A good rule of thumb would be to restrict your tuple to only two values (like key value pairs) because
// anything more than that will make it difficult to understand.

// 13, "Luis"
let user: [number, string, boolean, number] = [1, "Luis", true, 0];
user[1].slice;
user[0].toString;

//// Enum:

// Description: An enum (enumeration) type defines a set of named constants.
// It restricts the possible values a variable can hold to the specific elements listed within the enum.

// Use Cases: Use enums to represent fixed sets of choices or options in your program. This makes your code more readable and prevents typos compared to using string literals directly. For example, you could define an enum for days of the week or color options.

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {
  Small = 5.5,
  Medium = 7.5,
  Large,
}
let mySize: Size = Size.Medium;

//// Functions:

// Definition: Functions in TypeScript are declared similar to JavaScript, but with optional type annotations for parameters and return values. This improves code readability and helps catch potential type errors. This is useful when building an API for others to use.

// Use "": void" as the return type if you're not going to return a value.
// By default, functions returns undefined.

function calculateLiftTotal(SquatMax: number, DeadliftMax: number): number {
  let max = SquatMax + DeadliftMax;
  if (max !== 1500) {
    return max;
  }
  return max + 1;
}

calculateLiftTotal(200, 400);

// if you want to use optionally use the function parameter, you can add a "?" next to the parameter.
// OR set it to a default value.

function calculateTotal(SquatMax: number, DeadliftMax = 0): number {
  let max = SquatMax + DeadliftMax;
  if (max !== 1500) {
    return max;
  }
  return max + 1;
}

calculateTotal(200);

//// Objects:

// Object Definition: Objects in TypeScript can be defined using curly braces {}.
// You can optionally define types for object properties using key - value pairs with types.

// Interfaces:
// - Interfaces in TypeScript act like blueprints for objects.They define the expected properties and their types.

// Benefits of Types:
// - Enforced structure: Interfaces ensure objects adhere to the defined structure, preventing missing or incorrect properties.
// - Improved documentation: Interfaces act as self-documenting contracts for how objects should be used.

let lifter: {
  readonly id: number;
  name: string;
  total: number;
  goodLift: boolean;
  totalValid: (squatMax: number) => void;
} = {
  id: 1,
  name: "Luis",
  total: 400,
  goodLift: true,
  totalValid: (squatMax: number) => {
    console.log(squatMax);
  },
};

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Alice",
  age: 30,
};

// Exercise 1.0

// For each of these values, what type will the TypeScript compiler infer?
let a = 100; // number
let b = "Coffee"; // string
let c = [true, false, false]; // boolean[]
let d = { age: numbers }; // {age: 20}
let e = [3]; // number[]
let f; // any
let g = []; //any[]
