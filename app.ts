// console.log("your code goes here")

function add(n1: number, n2: number, showResult: boolean) {
    if (showResult) {
        console.log(n1 + n2)
    }
    return n1 + n2
}

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


