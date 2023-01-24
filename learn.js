"use strict";

// 5 / 28

function myConcat(arg) {
    let result = ''

    for(let i = 1; i < arguments.length; i++) {
        result += arguments[i] + arg
    }

    console.log(result)
    return result
}

myConcat(',', 'red', 'orange', 'blue');


// const fnOut = outside(4)
// const fnIn = fnOut(5)

// function outside(n) {
//     function inside(x) {
//         console.log({n: n, x: x})
//         return n + x
//     }

//     console.log({n: n})
//     return inside
// }


// (function() {

//     const obj = {
//         name: 'hassan',
//         age: 21,
//         hobby: 'listening to music'
//     }

//    for(const [i, j] of Object.entries(obj)) {
//     console.log(i, j)
//    }
// })()

const number = +'2' + +'4' // + unary plus