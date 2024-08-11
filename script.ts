let a: number;
let str: string;
let bool: boolean;
let arr: [];

// what is touple ?

// example1  - true
let touple: [string, number] = ["hello", 123];

// example2  - false - here we have assigned string and number array so the length of the array would be maximum 2
//                     and the value of it exactly 1st - string and 2nd - number
// let touple:[string,number]=['hello',123,45]

let doNOTknowANY: any; // you can any assign it will not throw an error
doNOTknowANY = 12;
doNOTknowANY = "12";

let doNOTknowUNKNOWN: unknown; // any and unknown both are similar
doNOTknowUNKNOWN = 12;
doNOTknowUNKNOWN = "12";

// In TypeScript, a function with a return type of never is expected to never return a value,
// which typically means that the function either throws an error or never finishes executing (e.g., an infinite loop).

// const doNOTknowNEVER=():never=>{
//     while(true){
//         console.log('I am infinite 😈')
//     }
// }

// doNOTknowNEVER()
// console.log('hello')

function str1(): string {
  return "hello";
}
function num1(): number {
  return 123;
}
function bool1(): boolean {
  return false;
}

// void means it does not return anything if we return it throws an error
function doNOTknowVOID(): void {
  // return 'hello'
  console.log("Hii i am void function");
}

// this is enum like an object
enum family {
  father = "PAPA",
  mother = "MOTHER",
  son = "SON",
  daughter = "DAUGHTER",
}

console.log(family.father);

// union
const doNOTknowUNION = (variable: string | number) => {
  console.log(variable);
};
doNOTknowUNION(12);
doNOTknowUNION("hello Union");
// doNOTknowUNION(false) //boolean value is not assignable to parameter of type string or number

// intersection - combination of types those should be in the object or parameter or in the variable
type human = {
  city: string;
  population: number;
};

type animal = {
  food: string;
  age: number;
};

type humanAnimal = human & animal; //  type humanAnimal = human | animal

const obj: humanAnimal = {
  city: "Ahmedabad",
  population: 100000,
  food: "carrot",
  age: 20,
};

// type

type User = {
  name: string;
  age: number;
  email: string;
};

let person: User = {
  name: "Poorv",
  age: 23,
  email: "xyz@123gmail.com",
};

type sankhya = number;
type sankhya2 = number | string;
let number: sankhya = 123;
let strSankhya: sankhya2 = "123";

//  interface = In TypeScript, an interface is a way to define the shape of an object.It specifies the properties and methods that an object should have, without providing implementations for those methods.

interface User2 {
  name: string;
  age: number;
  email: string;
}

//  type and interface both are same but there is little bit different as below

// -----difference 1 -------
// type a = string and interface a{}  difference of =

// -----difference 2 -------
// type x=string;
// type x=string     //you can not assign same name in type

interface x {
  name: string;
}
interface x {
  age: number;
}

// it will automatically merge the both interface at compile time

function abcd(user: x) {
  (user.age = 21), (user.name = "neeraj chopda vs sabad nadeem");
}

// -----difference 3 -------  major defference

interface food {
  name: string;
  price: number;
}

interface meethafood extends food {
  sweetTaste: boolean;
}
interface khattafood extends food {
  khattaTaste: boolean;
}
interface teekhafood extends food {
  teekhaTaste: boolean;
}

function khattafoodyfood(food: khattafood) {
  food.name = "orange";
  food.price = 20;
  food.khattaTaste = true;
}
function meethafoodyfood(food: meethafood) {
  food.name = "mango";
  food.price = 20;
  food.sweetTaste = true;
}
function teekhafoodyfood(food: teekhafood) {
  food.name = "panipuri";
  food.price = 20;
  food.teekhaTaste = true;
}

// class
class EarPhones {
  public name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getData() {
    console.log(
      `Pendrive data is ${this.name} and each price is ${this.price}`
    );
  }
}

const P1 = new EarPhones("hp", 1200);
const P2 = new EarPhones("apple", 5000);
P1.getData();
P2.getData();

// access modifier public , private , protected

// public - access everywhere in the programme and able to change it when we want
// private - access inside the declared class can not access outside the class and can not able to modify it outside the class and access using the function inside declared class which is crated by us
// protected - access using inheritcance means class parent have protected value then we can only access in child not in other class and we can not able to modify as well

// function in typescript what we need to keep in mind
// we nedd to define what will be returned and what will be parameter type
function typeFunction(a: string, b: number): string {
  return "123";
}
typeFunction("12", 1);

// what is implicit return type
// - when we do not define what would be the return type when function will call , typescript automatically understand what is the value of return
// example
function typeFunction1(a: string, b: number) {
  return a + b;
}
typeFunction1("12", 1);

// optional parameter  - if we do not assign 2 parameter then typescript throw an error but if we assign optional parameter then there will be no error
function typeFunction2(a: string, b?: number) {
  return a + b;
}
typeFunction2("12");

// rest parameter
function typeFunction3(...rest: string[]) {
  return rest;
}
typeFunction3("amit", "suresh", "rahul", "xyz", "sahrukh");

function typeFunction4(...rest: number[]) {
  return rest;
}
typeFunction4(1, 2, 3, 4, 5);

function typeFunction5(...rest: (string | number)[]) {
  return rest;
}
typeFunction5(1, 2, 3, "rahul", "karina");

function typeFunction6(...rest: (string | number | (string | number)[] | object)[]) {
  return rest;
}
typeFunction6(1, 2,[1,2,3,"abc"],"i am string",{
    name:"shubham"
});


// type assertion

// <div></div>
// <p></p>
// <span><span/>

// when you working with dom then if you define particular html element in the para so it can easily get it , its method

function div(para:HTMLDivElement):void{
    console.log(para)
}
function p(para:HTMLParagraphElement):void{
    console.log(para)
}
function image(para:HTMLImageElement):void{
    console.log(para)
}

<HTMLDivElement>document.querySelector('div') 
document.querySelector('p') as HTMLParagraphElement


// literals - string , number , boolean
// literally value will be poorv it is not changable 
let strValue:'poorv' | "shubham"
let boolValue:false
let numberValue:123

// strValue="shubham1"
// boolValue=true
// numberValue=456
