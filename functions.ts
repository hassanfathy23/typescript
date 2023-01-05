// console.log("your code goes here")

// import { type } from "os";

// function add(n1: number, n2: number, showResult: boolean) {
//     if (showResult) {
//         console.log(n1 + n2)
//     }
//     return n1 + n2
// }

const num1: number = +'4';
const num2: number = 7;
const printResult: boolean = true

// const result = add(num1, num2, printResult)

// console.log(result)

type personType = {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
}

const person: personType = {
    name: "hassan",
    age: 20,
    hobbies: ["football", "hiphop", "movies"],
    role: [2, "author"],
}

// console.log(person.hobbies)




function add(n1: number, n2: number): number {
    return n1 + n2;
}

// console.log(add(+"3", 4))


type obj = {
 name: string,
 age: number,
 hobbies: string[],
 developer: boolean
}

const arr: obj[] = []

arr.push({
    name: 'hassan',
    age: 20,
    hobbies: ["football", "music"],
    developer: true
})

// console.log(arr, "this is array")

const nameAgeMap: {[index: string]: number} = {}
nameAgeMap.hassan = 4
nameAgeMap.ahmed = 6

// console.log(nameAgeMap)

function divide({dividend, divisor}: {dividend: number, divisor: number}): number {
    return dividend / divisor
}

// console.log(divide({dividend: 8, divisor: 4}))

function twoPairs<s, t>(a: s, b: t) {
    return [a, b]
}

console.log(twoPairs<number, number>(5, 6))
