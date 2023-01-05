/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var output;
    for (var i = 0; i < nums.length; i++) {
        var char = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            var char2 = nums[j];
            if (char2 + char == target) {
                output = [i, j];
            }
        }
    }
    return output;
};
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([2, 3], 5));
console.log(twoSum([2, 3, 4, 9], 11));
// console.log("your code goes here")
// function add(n1, n2, showResult) {
//     if (showResult) {
//         console.log(n1 + n2);
//     }
//     return n1 + n2;
// }
// var num1 = +'4';
// var num2 = 7;
// var printResult = true;
// var person = {
//     name: "hassan",
//     age: 20,
//     hobbies: ["football", "hiphop", "movies"],
//     role: [2, "author"]
// };
// // console.log(person.hobbies)
// Problem number 1: return reversed string
// example: let str = "hello" // result =  "olleh"
var result = null;
function reverse(str) {
    // fisrt thing we need to do is turning the string into
    // array contains every character of the string using split('') method
    var arrayOfChars = str.split("");
    // this will return ["h", "e", "l", "l", "o"]
    //then we will reverse the array using javascript array method reverse()
    var reversedArray = arrayOfChars.reverse();
    // this will return ["o", "l", "l", "e", "h"]
    //then we will turn the reversed array into string again using javascript
    // array method join('') and we will change the variable result value
    result = reversedArray.join("");
    //this will return "olleh"
    console.log(result);
}
// reverse("hello");
// problem number 2: palindrome algorithm
// a string will be passed to the function. return true if the string is
// palindrome (can be read from backword the same as forward eg. "lol", "mom")
// and return false if it's not.
// make sure that it's case insensitive
// examples: "Madam" === true && "Hello" === false
function palindrome(str) {
    // first to make this algorithm case insensitive we need to make sure
    // to turn any string given into lowercase using string method toLowerCase
    var lowercaseStr = str.toLowerCase();
    // now first string === "madam"  && secound string === "hello"
    // 2- now we need to reverse every string by turning each string into an
    // array containing every character of the string like we did in the first
    // problem using split('') and then reverse() and finally join('')
    var reversedStr = lowercaseStr.split("").reverse().join("");
    // now first string === "madam" && secound string === "olleh"
    // now we need to write if statement to return true if the reversed string
    // equal to the original string and false if it doesn't
    if (reversedStr === lowercaseStr) {
        return true;
    }
    else {
        return false;
    }
    // now first string will return true because "madam" === "madam" (palindrome)
    // and secound string will return false because "olleh" !== "hello" (not palindrome)
}
// console.log(palindrome("Madam"));
// console.log(palindrome("Hello"));
// problem 3: reverseInt.
// you will be givin a number as parameter and you need to reverse it even if it is negative
// examples: num === 623 >>> reversedNum === 326 && num === -123 >>> reversedNum === -321
function reverseInt(num) {
    // first, we can use the logic from previous propblem to solve this by turning number
    // into string using toString() method
    var numToString = num.toString();
    // now when both functions below run the first value here will be "623" and the 2nd "-123"
    // next we will turn string into array using split('') and reverse it with reverse()
    // and return back to string with join('')
    var reversedStr = numToString.split("").reverse().join("");
    // now both values are "326" and "321-" *notice how the negative sign is at the end*
    // now we need to return both strings into numbers again and we will use parseInt()
    // to do that. we can't use Number() cause it will return NaN with "321-"
    var reversedNum = parseInt(reversedStr);
    // now both values are 326 and 321 so we need to write if statement to manage
    // negative values not to turn into positive
    //last thing we need to do is if the original number is positive (num > 0) we return
    // the reversedNum unchanged but if it's negative and turned into positive in the
    // process we make sure to multiplay it by -1 to turn it into negative again
    if (num < 0) {
        return reversedNum * -1;
    }
    else {
        return reversedNum;
    }
}
// problem number 4: max character
// return the the character most repeated in a string and return how
// many times it exists
// example: "heeey my name is haaassan" >>> maxChar = "a" maxCount = 5
function maxChar(str) {
    // first we need to declare 3 variables, first one is an object in which
    // we will insert every character in the string and we will assign a number
    // to this character in it referring to the how often this character is
    // repeated, second is the max character variable and it will
    // hold the most repeated character in the string, finally the max count
    // character and this will hold how often was this max character repeated
    var charCountObj = {};
    var maxChar = "";
    var maxCount = 0;
    // then we need to write for loop to go through every character and add it
    // into the charCountObj if it's not in there, or we increase its value
    // by one if it was already there.
    // then we need to neglect any empty spaces between words and for that we
    // will write if statement to continue to the next character in the string
    // if there is any " " empty space
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char === " ") {
            continue;
        }
        charCountObj[char] = charCountObj[char] + 1 || 1;
        // now charCountObj will look like that {h: 2, e: 4, y: 2, m: 2, n: 2, a: 5, i: 1, s: 3}
        //finall, we need to write another if statement so it detect if the current character holds
        // the top value so to update the maxCount to this value and the maxChar to this char
        if (charCountObj[char] > maxCount) {
            maxCount = charCountObj[char];
            maxChar = char;
        }
    }
    // finally we return charCountObj, maxChar and maxCount
    return { charCountObj: charCountObj, maxChar: maxChar, maxCount: maxCount };
}
// console.log(maxChar("heeey my name is haaassan"))
// problem number 4: fizzbuzz
// write a function that console logs number from 1 to n.
// if the number is a multiple of 3 console log "fizz" & if
// the number is a multiple of 5 console log "buzz" && and
// if the number is a multiple of 3 and 5 console log "fizzbuzz"
function fizzbuzz(n) {
    // a number multiple for another number means that when you devide it to
    // the second number it will give you an integer
    // example 6 / 3 = 2, 2 is an integer, but: 5 / 3 = 1.67 not integer, so
    // if we want to know if a number is devisable we can use % sign and we
    // make sure that it turns 0
    // example: 6 % 3 = 0, 5 % 3 = 2
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else {
            console.log(i);
        }
    }
    // notice that the order of the if statements matters, so writing the first if
    // statement which checks if a number is divisable by 3 and 5 in the same time
    // was a must because if we write it after one of the others we would get some
    // bugs in the code
    return "completed";
}
// console.log(fizzbuzz(30));
// problem number 6: capitalize
// capitalize every word in a string
// example: "tHis Is capitaLIZed" >>> "This Is Capitalized"
function capitalize(str) {
    var arrOfWords = str.split(" ");
    var resultArr = [];
    for (var i = 0; i < arrOfWords.length; i++) {
        var word = arrOfWords[i];
        resultArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return resultArr.join(" ");
}
// console.log(capitalize("tHis Is capitaLIZed"))
// problem number 7: chunk algorithm. you will be passed 2 arguments
// to your function, the first is an array of strings, the secound is
// a number represents the maximum amount that the result subarray should
// contain. **example**: (["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 4)
// res should be [ [ 'a', 'b', 'c', 'd' ], [ 'e', 'f', 'g', 'h' ], [ 'i', 'j' ] ]
function chunk(arr, size) {
    // first we need to declare res array
    var res = [];
    // then we need to write a for loop that iterates through the givin array
    for (var i = 0; i < arr.length; i++) {
        // now we need to declare variable and assign it to the value of the
        // item we currently are performing the for loop on eg. "a" then "b" etc...
        var item = arr[i];
        // now we need to decalre another variable and it will hold the value of the
        // sub array in the result array
        var last = res[res.length - 1];
        // then we write if statement so if the last subarray in the res array doesn't
        // exist: res = [] or is full: res = [['a', 'b', 'c', 'd']] we push to the res
        // array a new array containing the item we currently performing the for loop on
        // eg. res = [['a']] for the first and res = [['a', 'b', 'c', 'd'], ['e']]
        if (!last || last.length === size) {
            res.push([item]);
            // and if there is subarray inside the res array and it's not full eg.
            // res = [['a', 'b']] we push the current item to the last subarray
            // res = [['a', 'b', 'c']]
        }
        else {
            last.push(item);
        }
    }
    // finally we return the res array
    return res;
}
// console.log(chunk(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 4))
// problem number 8: anagrams
// you will be givin 2 strings as arguments, you need to check if both strings
// are anagrams, when 2 words contains the same letters in a different order
// , they are anagrams.
// example: "earth" is anagram to 'heart'.
// you need also to put in consideration that one or both strings may be case
// sensitive and contains non alphanumerical characters like '!@$#%'.
// return true if both strings are anagrams and false if not
function anagram(str1, str2) {
    //first we need to clean each string from any non alphanumeric value
    //like "!@#$" and turn it to lowercase >>> str1 = "earth", str2 = "heart"
    str1 = str1.toLowerCase().replace(/[^a-z0-9 -]/gi, "");
    str2 = str2.toLowerCase().replace(/[^a-z0-9 -]/gi, "");
    //secound we need to declare a variable and assign it to an empty object
    //in this object, later we will push every character of the fisrt str and assign
    //each character a number of how often this character is repeated in string
    // eg. str1 = 'Earth' >>> str1CountObj = {"E": 1, "a": 1, "r": 1, "t": 1, "h": 1}
    var str1CountObj = {};
    //then we need to check if both strings are equal in length, if they are not
    //we return false so there is no need to continue the rest of the code
    if (str1.length !== str2.length) {
        return false;
    }
    //then we will write for loop to iterate through every character in the first
    //string: str1 then we fill the str1CountObj with every letter and its value
    //like we said above
    for (var i = 0; i < str1.length; i++) {
        //now for simplicity we need to decalre a variable to save each character we
        //currently performing on
        var aChar = str1[i];
        //then we fill the object by saying that if the current character isn't in the
        //strCountObj we assign a value of 1 to it and if it exists, just increase its
        //value by 1
        str1CountObj[aChar] = str1CountObj[aChar] + 1 || 1;
    }
    //now we filled the str1CountObj and it looks like that now
    //str1CountObj = {"E": 1, "a": 1, "r": 1, "t": 1, "h": 1}
    //now we need to write another for loop to iterate through the secount string
    for (var i = 0; i < str2.length; i++) {
        //and again for simplicity we will declare a variable and assign it to the value
        //of the character we currently performing on
        var bChar = str2[i];
        //now we will search for the current character in the str1CountObj we just filled
        //and if it doesn't exist, this means both strings aren't anagram
        //example: {"E": 1, "a": 1, "r": 1, "t": 1, "h": 1}: if we searched in this obj
        //for the character 'g' it will not exist, then the word which contains this character
        // isn't anagram with this word
        if (!str1CountObj[bChar]) {
            return false;
        }
        else {
            //and if it exists, we just decrease its value by 1
            // example: {"E": 1, "a": 1, "r": 1, "t": 1, "h": 1}: if we searched in this obj
            //for the character 'a', then the "a" key will decrease by 1 so now "a" = 0
            str1CountObj[bChar]--;
        }
    }
    //and if we passed all if statment without returning false, then both strings
    //are anagrams
    return true;
}
// console.log(anagram("Earth", "HeaRt!"))
// problem number 9: caesar cypher
// you will be givin a string and a number as arguments, and you need to cypher
// them with caesar method, simply every character needed to be shifted to another
// character so if the character is "a" and shift is 1 then character should be "b"
// and if shift equals to 2 it should be "c" and so far so on
// example: "abcdef", 1 >>> "bcdefg"
function caesarCypher(str, shift) {
    // firstly, we need an array full of alphabitical characters, and we need to save it
    // in a variable
    var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    // and we need to declare a variable we call res to be our result string
    var res = "";
    // then we need to write a for loop to iterate through every character in the string
    for (var i = 0; i < str.length; i++) {
        // and as always, we will save every character we iterate through in a variable char
        var char = str[i];
        // then we need to to search in our alphabitical characters array for the current char
        var idx = alpha.indexOf(char);
        // and if we didn't find the current character inside our alpha array, this means that
        // the current character is nonalphanumeric like "!@#$%^" so we will concatenate it
        //directly to the res string without any need to cypher it
        if (idx === -1) {
            res += char;
            // continue here means that we don't need to continue any of the code below, so we can
            // iterate through the nect char in the string
            continue;
        }
        // then we need to modify the index of any character we find in the alphabitical array
        // and so if the char "a" has an index of 0 in alpha array, we need to save index 0 + shift
        // and we need to make the value divisable by the alpha array length so if the shift value
        // equals to number bigger than the array length, it starts again from 0
        // example character "a" with shift 26, so 26 % alpha.length(25) === 1
        // then the index of the cyphered character is 1 which is the character "b"
        var newIdx = (idx + shift) % alpha.length;
        // and then we concatenate the cyphered character to the res string
        res += alpha[newIdx];
    }
    // finally we return res
    return res;
}
// console.log(caesarCypher("hello my name is hassan!", 1))
// problem number 10: steps
// you will be givin a number as argument, this number represents the stpes
// you need to print in a string
// example: steps(1) >>> step = "#", step(3) >>> step = "#  "
//                                               step = "## "
//                                               step = "###"
function steps(num) {
    // first we will write a main for loop to iterate through every number from
    // 1 to num
    for (var i = 1; i <= num; i++) {
        // secondly we need to declare a step string to save the result in it
        var step = "";
        // then we need to write 2 sub for loops, on of them will print "#" to the result string
        // and the other will print " " space for the result string
        //first sub for loop will take the num we currently iterating through, eg. 1 for the first
        // process, 2 for the second and will concatenate the result string with "#"
        for (var hash = i; hash > 0; hash--) {
            step += "#";
        }
        // the second sub for loop will be used to fill the rest of the result string with " " space
        // and we will calculate the number of spaces we need with the equation (num - i)
        for (var space = num - i; space > 0; space--) {
            step += " ";
        }
        // then we print every step in the main for loop
        console.log({ step: step });
    }
    return true;
}
// console.log(steps(2))
// problem number 10: reverse array
// you will be givin an array and you need to reverse it
// example: [1, 2, 3, 4] >>> [4, 3, 2, 1]
function reverseArr(arr) {
    // first we need to declare result array and we will call it reversedArr
    var reversedArr = [];
    // then we will write a for loop to iterate through the givin array **(and will iterate
    // through it from the last value all the way to the first value.)**
    for (var i = arr.length - 1; i >= 0; i--) {
        // then for simplicity sake we will declare a variable and assign its value to the value
        // we currently performing the for loop on
        var element = arr[i];
        // then we push the value to the reversed array from start using push()
        reversedArr.push(element);
    }
    // finally we return the reversed the new array
    return reversedArr;
}
// console.log(reverseArr([1, 2, 3, 4]))
// problem 11: pyramid
function pyramid(num) {
    for (var i = 1; i <= num; i++) {
        var space = " ".repeat(num - i);
        var hash = "#".repeat(i * 2 - 1);
        console.log(space + hash + space);
    }
}
// pyramid(4)
// problem 13: vowels, you will be givin a string as an argument, and your task is
// count how many vowles does it contains. vowels are "a", "e", "o", "u", "i"
// example: str = "Hello, this Is DSa prOblem" >>> res = 7
// note that you need to put in consideration that your string might contain
// capitalized character, so you might need to clean your string before starting
function vowels(str) {
    // first, we need to turn the string into lowercase tp turn any capitalized character
    // into lowercased.
    str = str.toLowerCase();
    // also we need to declare a res variable to count how many vowel are in the string
    var res = 0;
    // then we need to declare a variable to save in it an array of vowels 
    var vowels = "aeoui".split("");
    // now we need to write for loop to iterate through every character in our string
    for (var i = 0; i < str.length; i++) {
        // and we need to declare a variable to save each character we are currently
        // performing the for loop on
        var char = str[i];
        // inside the main for loop we need to write sub for loop to iterate through the
        // vowels array.
        for (var j = 0; j < vowels.length; j++) {
            // and we will save each vowel in a variable
            var vowel = vowels[j];
            // then we write if statement so if the current character in the string we iterating
            // through is equal to any of the vowels, we increase the res by one 
            if (vowel === char) {
                res++;
            }
        }
    }
    // finally, we return res
    return res;
}
console.log(vowels('Hello, this Is DSa prOblem'));
// problem 14: find index od found item
function findIndexOf(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        var arrItem = arr[i];
        if (arrItem === item) {
            return i;
        }
    }
    return -1;
}
// console.log(findIndexOf(["bananna", "apple", "pear"], "pear"))
// problem 15: binary search
function binarySearch(sortedArr, value) {
    var left = 0;
    var right = sortedArr.length - 1;
    while (left <= right) {
        var mid = Math.floor((right + left) / 2);
        var midVal = sortedArr[mid];
        if (midVal === value) {
            return mid;
        }
        else if (midVal < value) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
// console.log(binarySearch([6, 12, 23, 34, 45, 54], 45))
// problem number 16: string pattern search
function stringPatternSearch(text, pattern) {
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < pattern.length; j++) {
            var patternChar = pattern[j];
            if (patternChar !== text[i + j]) {
                break;
            }
            if (j === pattern.length - 1) {
                count++;
            }
        }
    }
    return count;
}
// console.log(stringPatternSearch("lolol", "lol"))
// problem number 17: swap algorithm
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
// console.log(swap([1, 2], 0, 1))
// problem number 18: bubble sorting
function bubbleSorting(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSorting([2, 7, 4, 3, 5, 6, 1]))
// problem number 19: selection sort
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var swapIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[swapIndex]) {
                swapIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
    }
    return arr;
}
// console.log(selectionSort([2, 4, 6, 1, 3, 5, 7]))
// problem number 20: merge algorithm
function merge(arr1, arr2) {
    var p1 = 0;
    var p2 = 0;
    var result = [];
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            result.push(arr1[p1]);
            p1++;
        }
        else {
            result.push(arr2[p2]);
            p2++;
        }
    }
    while (p1 < arr1.length) {
        result.push(arr1[p1]);
        p1++;
    }
    while (p2 < arr2.length) {
        result.push(arr2[p2]);
        p2++;
    }
    return result;
}
// console.log(merge([1, 4], [2, 3, 5, 6, 7]));
//////////// Data Structures //////////////
// problem number 21:
// class Item {
//   constructor(data, next) {
//      this.data = data
//      this.next = next
//   }
// }
// class LinkedList {
//   constructor(){
//     this.head = null;
//     this.length = 0
//   }
//   unshift(data) {
//     const newHead = new Item(data, this.head)
//     this.length++
//     this.head = newHead
//   }
//   getFirst() {
//     return this.head
//   }
//   getLast() {
//     const currentNode = this.head
//     while(currentNode && currentNode.next) {
//       currentNode = currentNode.next
//     }
//     return currentNode
//   }
//   clear() {
//     this.head = null
//     this.length = 0
//   }
//   shift() {
//     if(!this.head) {
//       return;
//     }
//     const oldHead = this.head
//     this.head = this.head.next
//     this.length--
//     return oldHead
//   }
//   pop() {
//     if(!this.head) {
//       return;
//     }
//     if(this.length === 1) {
//       return this.shift()
//     }
//     const last = this.getLast()
//     let current = this.head
//     while(current.next !== last) {
//       current = current.next
//     }
//     current.next = null
//     this.length--
//     return last
//   }
//   push(data) {
//     if(!this.head) {
//       return this.unshift(data)
//     }
//     const last = this.getLast()
//     last.next = new Item(data, null)
//     this.length++
//   }
// }
// problem number 22:
// problem number 23:
