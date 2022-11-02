// "use strict";

// (function add(x = 0, y = 0, z = 0) {
//     console.log(x, y, z)
// })()

// console.log(function1(4, 5, 6))

//  (() => {
//     console.log("hello, world")
// })()

const hassan = {
  firstName: "hassan",
  lastName: "fathy",
};

// console.log(hassan.firstName)

// hello = "hello"
// console.log(hello)

import { name } from "./file.js";

// console.log(name)

const popAfter3Sec = () => {
  setTimeout(() => {
    console.log("this will pop up after 3 seconds");
  }, 3000);
};

// console.log(popAfter3Sec())

const cancelAfter3Sec = () => {
  setInterval(() => {
    console.log("this will last for 3 seconds");
  }, 3000);
};

// console.log(cancelAfter3Sec())

const myArr = [
  { name: "X00", price: 30 },
  { name: "X01", price: 40 },
  { name: "X02", price: 70 },
  { name: "X03", price: 90 },
  { name: "X04", price: 20 },
  { name: "X05", price: 110 },
  { name: "X06", price: 100 },
  { name: "X07", price: 200 },
  { name: "X08", price: 220 },
  { name: "X09", price: 250 },
  { name: "X10", price: 300 },
];

const newArray = myArr.sort((v1, v2) => {
  if (v1.price > v2.price) return 1;
  if (v1.price < v2.price) return -1;
  return 0;
});

//   console.log(newArray)

const car = {
  name: "fiat",
  color: "red",
  price: 80000,
};

// console.log(car.name)

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  myFunction: function () {
    return this.firstName + " " + this.lastName;
  },
};

const newPerson1 = Object.entries(person);
const newPerson2 = Object.values(person);
//   console.log(newPerson)

//   const _id = Symbol("id")
//   person[_id] = 38474

//   console.log(person[_id])

//   console.log(person.myFunction())

// const myFunction = () => {
//     return this
// }

// console.log(myFunction)

// const hello = this

// console.log(hello)

let points = [40, 100, 1, 5, 25, 10];
let newPoints = [];
let set = new Set(["1", "2", "3"]);
let text = "this is visual";

// console.log("6".padStart(4, 0))

// console.log(text.split(" "))

// console.log(Math.pow(4, 4))

// console.log([78, 34, ...points])

// console.log(text.search(/su/i))

typeof "Jhon";

// console.log(set.values())

// console.log(set.has("3"))

// points.forEach((v) => {
//     console.log(v)
// })

// for(let i = 0; i < points.length; i++) {
//     newPoints.push({
//         point: points[i],
//         order: i + 1
//     })
// }

// console.log(newPoints)

// for(let i = points.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1))
//     let k = points[i]
//     points[i] = points[j]
//     points[j] = k
// }

// const getMaxValue = (points) => {
//     return Math.max.apply(null, points)
// }

const now = Date.now();

const newDate = new Date("2022 10 24 09:50:50");

// console.log(now)
// console.log(newDate.getTime())

const timing = newDate.getTime() - now;
// console.log(timing)

// setTimeout(() => {
//      console.log("timing")
// }, timing)

const tenMin = 1000 * 60 * 10; //1000 milliseconds * 60 = 60 seconds * 10 mins = 10 min

const alert = () => {
  if (Date.now() === newDate.getTime()) {
    console.log("time is over");
  }
};

const confirmationCode = (min, max) => {
  return Math.floor(Math.random() * (max - min) - min) + min;
};

const amount = [1500, 2500, 3500, 10500];
const dataObject = [
  { Count: 1, Percentage: 10, Description: "test 1", Name: "bob" },
  { Count: 2, Percentage: 45, Description: "test 2", Name: "bob 2" },
  { Count: 5, Percentage: 19, Description: "test 3", Name: "bob 3" },
  { Count: 10, Percentage: 50, Description: "test 4", Name: "bob 4" },
];

for (let i = 0; i < dataObject.length; i++) {
  dataObject[i].amount = amount[i];
}

// console.log(dataObject)

const colors = ["red", "green", "yellow"];

// colors.forEach((color, index, x) => console.log(color, index, x));

const nums = [1, 2, 3]
const doubledNums = []

nums.forEach(v => {
    doubledNums.push(v * 2)
})

console.log(doubledNums)
