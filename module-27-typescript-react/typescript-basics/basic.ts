// primitives: number string boolean
// complex types array / object
//functions paramateres

import { type } from "os";

let age: number;

// integer and float is okay
age = 12.1;

let userName: string;

userName = "Jeff";

let isInstructor: boolean;

isInstructor = true;

// complex types

//this tell typescript we want to have an array of strings
let hobbies: string[];

hobbies = ["jeff"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Luke",
  age: 28,
};

let people: {
  name: string;
  age: number;
}[];

// type inference

//this infers the type to be a string, we should use type inference when possible
let course = "react - the complete guide";

// this will be wrong
// course = 12345;

// union types (more then one type)
let newCourse: string | number = "the new course";

newCourse = 12345;

// type aliases
type Person = {
  name: string;
  age: number;
};

let personOne: Person;

personOne = {
  name: "John",
  age: 45,
};

// function & types

// the last number is the return value from the function, this can be left (type inference)
function add(a: number, b: number): number {
  return a + b;
}

//this function doesnt return anything = void (used only in conjunction with functions)
function printOutput(value: any): void {
  console.log(value);
}

printOutput("john");

//! generics

// type safe yet flexible, the <T> is the generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b"], "c");
