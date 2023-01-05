// console.log("your code goes here")
// import { type } from "os";
// function add(n1: number, n2: number, showResult: boolean) {
//     if (showResult) {
//         console.log(n1 + n2)
//     }
//     return n1 + n2
// }
var num1 = +'4';
var num2 = 7;
var printResult = true;
var person = {
    name: "hassan",
    age: 20,
    hobbies: ["football", "hiphop", "movies"],
    role: [2, "author"]
};
// console.log(person.hobbies)
function add(n1, n2) {
    return n1 + n2;
}
var arr = [];
arr.push({
    name: 'hassan',
    age: 20,
    hobbies: ["football", "music"],
    developer: true
});
// console.log(arr, "this is array")
var nameAgeMap = {};
nameAgeMap.hassan = 4;
nameAgeMap.ahmed = 6;
// console.log(nameAgeMap)
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
// console.log(divide({dividend: 8, divisor: 4}))
function twoPairs(a, b) {
    return [a, b];
}
console.log(twoPairs(5, 6));
