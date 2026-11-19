

// console.log("Hello, World!");

// let tame  = " Leon S. Keneddy";
// var name1= ' Ada Wong';

// function greet(name, namer) {
//     console.log("Hello," + name);
//     console.log("Hello," + namer);
// }


// greet(tame, name1);


// const o = prompt("Enter a number: ");
// if (o%2==0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }


// function fact(n){
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * fact(n-1);
//     }
// }
// console.log(fact(5)); 

// function concatenate(str1, str2, ...remains) {
//     for (let i = 0; i < remains.length; i++) {
//     console.log(str1 + str2 + remains[i]);
// }

// }
// let string1 = "hasta";
// let string2 = " la vista";
// console.log(concatenate(string1, string2, "lalekop", "erosmas"));

// function sapw() {
//     let counter = 0;
//     return function() {
//         counter++ ;
//         return counter;
// }

// }

// let synap = sapw()
// console.log(synap);
// console.log(synap);
// console.log(synap);


// const arrow = (a, b) => {
//     console.log(a + b);
// }
// arrow(21, 2112);

// const user = {
//     name: "Ada Wong",
//     age: 30,
//     f() {
//         console.log(this.name);
//     },
//     namez: function() {
//         console.log(this.name);
//     },
//     sole: () => {
//         console.log(this.name);
//     },
//     aej: () => {
//         console.log(this.age);
//     }
// }
// console.log(this)

// console.log(user.name);
// user.f();
// user.namez();
// user.sole();
// user.aej();
// const ooo = user.aej;
// console.log(ooo);

// const operate = {
//     name: "benjamin nentanyahu",
//     age : "90",
//     ethnicity: "🧃",
//     country: "israel"
// }


// for (const key in operate){
//     console.log(operate[key]);
// }

// const admin = structuredClone(operate);

// admin.name = "trump";
// admin.age = "77";
// admin.ethnicity = "reptilian";
// console.log(admin);
// console.log(operate);


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.say = function() {
//     console.log(this.name);
//   };
// }

// const user = new Person("hulala", 29);
// user.say();


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype = function() {
//   nationality: "Hooligan"; 
// }

// Person.prototype.getNationality = function() {
//   return this.nationality;
// };

// const obj = {
//   string: "hello",
//   number: 42,
//   boolean: true,
//   array: [1, 2, 3],
//   f: function() {
//     console.log("This is a method");
//   }
// }





// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + " " + (arr[i] % 2 === 0 ? "even" : "odd"));}
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i] + " even");
//     } else {
//         console.log(arr[i] + " odd");
//     }
// }

// const square = arr.map((value) => {
//   return value*value
// })

// const cube = arr.map((value) => {
//   return value*value*value
// })

// console.log(square);
// console.log(cube);




// const cart = [
//   {name: "Samsung QLED", price: 1800},
//   {name: "asus zephyrus dual 16", price: 7000},
//   {name: "bhagvat gita", price: 30},
//   {name: "organic fruits", price: 20},
//   {name: "foot massager", price: 900},
// ];
// const total = cart.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue.price;
// }, 0);

// console.log(total);

// const greater = cart.find((item) => item.price > 7000);
// console.log(greater);

// const nums = [2, 23, 4, 67, 1, 5, 23, 5, 9, 12, 9, 2, 5];
// const result = nums.find((num) => num === 5);
// const result1 = nums.findIndex((num) => num === 9 );
// const result2 = nums.findLastIndex((num) => num === 2 );
// console.log(result + result1 + result2)



// const arrrraayyy =  [2, 23, 4, 67, 1, 5, 23, 5, 9, 12, 9, 2, 5];
// const alpha = ["f", "h", "J", "R", "r", "q", "!", "k", "A", "a"]

// console.log(arrrraayyy.sort())
// console.log(alpha.sort())


// const cart = [
//   {name: "Samsung QLED", price: 1800},
//   {name: "asus zephyrus dual 16", price: 7000},
//   {name: "bhagvat gita", price: 30},
//   {name: "organic fruits", price: 20},
//   {name: "foot massager", price: 900},
// ];

// const result = cart.sort((a, b) => a.price - b.price);
// console.log(result)

// const car = {
//   'car' : 'veneno',
//   'brand': 'lamborghini',
//   'make' : '2011',
//   'type' : 'hypercar'
// }

// const type = car.type;
// const make = car.make;

// console.log(type, make)


 