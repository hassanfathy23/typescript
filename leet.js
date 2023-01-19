console.log("complied");
// Day 37 - plusOne
// you have a large integer represented in an array and you
// need to increment the number by one and return it as array
// example: [1, 2, 3] returns [1, 2, 4] because the array
// [1, 2, 3] represents the number 123 and 123 + 1 = 124
// so we return it as array [1, 2, 4]
// you also need to put in consideration big integers that 
// may cause you a problem when adding up one to them
var plusOne = function (digits) {
    var number = BigInt(digits.join(''));
    console.log(number);
    number = BigInt(1) + number;
    console.log(number);
    var newArr = number.toString().split('').map(Number);
    console.log(newArr);
    return newArr;
};
plusOne([1, 2, 3]);
// plusOne([4,3,2,1])
// plusOne([9])
var maxArea = function (height) {
    var max = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        var total = (right - left) * Math.min(height[right], height[left]);
        max = Math.max(total, max);
        if (height[right] > height[left]) {
            left++;
        }
        else {
            right--;
        }
    }
    console.log(max);
    return max;
};
// maxArea([1,8,6,2,5,4,8,3,7])
// maxArea([1,1])
// maxArea()
var myAtoi = function (str) {
    if (!str)
        return 0;
    var INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    str = str.trim();
    var i = 0;
    var isNegative = str[0] === "-";
    var isPositive = str[0] === "+";
    if (isNegative || isPositive) {
        i++;
    }
    var number = 0;
    while (i < str.length && str[i] >= "0" && str[i] <= "9") {
        number = number * 10 + (+str[i] - +"0");
        i++;
    }
    number = isNegative ? -number : number;
    if (number < INT_MIN) {
        return INT_MIN;
    }
    else if (number > INT_MAX) {
        return INT_MAX;
    }
    else {
        console.log(number);
        return number;
    }
};
// myAtoi("1234");
// myAtoi("  1234");
// myAtoi("  -1234 word");
var convert = function (s, numRows) {
    if (!s || numRows <= 0)
        return "";
    if (numRows === 1)
        return s;
    var result = "";
    var step = 2 * numRows - 2;
    for (var i = 0; i < numRows; i++) {
        for (var j = i; j < s.length; j += step) {
            result += s[j];
            if (i != 0 && i != numRows - 1 && j + step - 2 * i < s.length) {
                result += s[j + step - 2 * i];
            }
        }
    }
    console.log(result);
    return result;
};
// convert("PAYPALISHIRING", 3);
// convert("PAYPALISHIRING", 4);
// convert("A", 1);
// Day 34 - get the length of the last word in a string
// you will be given a string and you need to return the length
// of the last word in it, you need to put in consideration the
// white spaces at the end and start of the string
// example: "Hello World" returns 5 because the word "world"
// contains 5 letters
var lengthOfLastWord = function (s) {
    var newS = s.trim().split(" ");
    var lastLength = newS[newS.length - 1].length;
    console.log(lastLength);
    return lastLength;
};
// lengthOfLastWord("Hello World") // returns 5
// lengthOfLastWord("   fly me   to   the moon  ") // returns 4
// lengthOfLastWord("luffy is still joyboy") // returns 6
// day 36 - search insert
// you will be given sorted array of numbers and target number as arguments
// and you need to return the index of the number in the array if
// found or the index the number was supposed to be in if it was
// in the array
// example 1: nums = [1, 3, 5, 6], target = 5 returns 2 because the index
// of the target value 5 in the array nums is 2
// example 2: nums = [1, 3, 5, 6] target = 2 returns 1 because the target
// value 2 is not present in the array but if it was it'd be after the value
// 1 and before the value 3 in the secound index (1)
var searchInsert = function (nums, target) {
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result = i;
        }
        if (nums[i] < target) {
            if (nums[i + 1] > target || !nums[i + 1]) {
                result = i + 1;
            }
        }
    }
    console.log(result);
    return result;
};
// searchInsert([1, 3, 5, 6], 5); // returns 2
// searchInsert([1, 3, 5, 6], 2); // returns 1
// searchInsert([1, 3, 5, 6], 7); // returns 4
var removeElement = function (nums, val) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }
    return j;
};
// removeElement([3, 2, 2, 3], 3);
// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
// Day 33 - sort two array and find median and return it
// you will be given 2 arrays of numbers as arguments, you need
// to concatenate them into one array and sort them and you
// need to return the median value
// example: [1, 3], [2] return 2 because [1, 2, 3] 2 is the median
// [1, 3], [2, 4] return 2.5 because [1, 2, 3, 4] (2 + 3) / 2 = 2.5
var findMedianSortedArrays = function (nums1, nums2) {
    var swap = function (arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    };
    var mixedArray = nums1.concat(nums2);
    var result = [];
    if (mixedArray.length > 1) {
        for (var i = 0; i < mixedArray.length; i++) {
            for (var j = 0; j < mixedArray.length - 1; j++) {
                if (mixedArray[j] > mixedArray[j + 1]) {
                    result = swap(mixedArray, j, j + 1);
                }
                result = mixedArray;
            }
        }
    }
    else {
        result = mixedArray;
    }
    if (result.length % 2 !== 0) {
        if (result.length === 1) {
            return result[0];
        }
        return result[(result.length - 1) / 2];
    }
    else {
        return (result[result.length / 2] + result[(result.length - 2) / 2]) / 2;
    }
};
findMedianSortedArrays([1, 3], [2]); // returns 2
findMedianSortedArrays([1, 3], [2, 4]); //returns 2.5
var reverseNumber = function (x) {
    var newX = x;
    if (x < 0)
        newX = x * -1;
    var str = newX.toString().split("").reverse().join("");
    var reversed = parseInt(str);
    if (reversed > Math.pow(2, 31))
        return 0;
    if (x < 0) {
        return reversed * -1;
    }
    else {
        return reversed;
    }
};
// console.log(reverseNumber(123))
// console.log(reverseNumber(-173))
// console.log(reverseNumber(-27364537263))
var applyOperations = function (nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] === nums[i]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    var index = 0;
    nums.forEach(function (num) {
        if (num !== 0) {
            nums[index++] = num;
        }
    });
    while (index < nums.length) {
        nums[index++] = 0;
    }
    return nums;
};
// console.log(applyOperations([1, 2, 2, 1, 1, 0]))
// console.log(applyOperations([1, 0]))
var removeDuplicates = function (nums) {
    var currentIndex = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i - 1] != nums[i]) {
            nums[currentIndex] = nums[i];
            currentIndex++;
        }
    }
    return currentIndex;
};
// console.log(removeDuplicates([1, 1, 2]))
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
var isValid = function (s) {
    var stack = s.split("");
    if (stack.length % 2 != 0)
        return false;
    var arr = [];
    while (stack.length) {
        var topElem = stack.pop();
        if (topElem === ")" || topElem === "}" || topElem === "]") {
            arr.push(topElem);
        }
        else {
            var temp = arr.pop();
            if (!((topElem === "(" && temp === ")") ||
                (topElem === "[" && temp === "]") ||
                (topElem === "{" && temp === "}"))) {
                return false;
            }
        }
    }
    if (arr.length)
        return false;
    return true;
};
// console.log(isValid("()"));
// console.log(isValid("(){}[]"));
// console.log(isValid("[)"));
// Day 32 - gas station algorithm
// you will be given 2 array as arguments, the first is array of
// numbers refer to the amount of gas you can fill you car from this certain
// gas station and the other array numbers refer to the cost that you afford
// to reach the next gas station, you need to write an algorithm to return the index
// of the gas station you need to start from so you can pass by every gas station
// of the five or return -1 if it's not possible(your car is out of gas)\
var canCompleteCircuit = function (gas, cost) {
    var n = gas.length;
    var gasInTank;
    var start = n - 1;
    var end = 0;
    gasInTank = gas[start] - cost[start];
    while (start >= end) {
        if (gasInTank >= 0) {
            gasInTank += gas[end] - cost[end];
            end++;
        }
        else {
            start--;
            gasInTank += gas[start] - cost[start];
        }
    }
    return gasInTank >= 0 ? start : -1;
};
// console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])) /// returns 3
// console.log(canCompleteCircuit([2,3,4], [3,4,3])) /// returns -1
// day 31 - longest common prefix
// you will be givin array of strings and you need to return a string for the
// longest common prefix you find or an empty strings if none found
// example 1: ["flower", "flight", "fly"] return "fl" because it exist
// at the start of each string in the array
// example 2: ["car", "dog", "racecar"] return "" because they don't share
// a prefix
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return "";
    }
    var _loop_1 = function (i) {
        if (!strs.every(function (string) { return string[i] === strs[0][i]; })) {
            return { value: strs[0].slice(0, i) };
        }
    };
    for (var i = 0; i <= strs[0].length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return strs[0];
};
// console.log(longestCommonPrefix(["flower", "flight", "fly"])); // return "fl"
// console.log(longestCommonPrefix(["car", "dog", "racecar"])); // return ""
// Day 35 - roman integer
// you will be given a string as argument and you need to turn it
// from roman integer into a normal one.
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
var romanToInt = function (s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            if (s[i + 1] === "V") {
                count += 4;
                continue;
            }
            else if (s[i + 1] === "X") {
                count += 9;
                continue;
            }
            count += 1;
        }
        if (s[i] === "V") {
            if (s[i - 1] === "I") {
                continue;
            }
            count += 5;
        }
        if (s[i] === "X") {
            if (s[i - 1] === "I") {
                continue;
            }
            if (s[i + 1] === "L") {
                count += 40;
                continue;
            }
            else if (s[i + 1] === "C") {
                count += 90;
                continue;
            }
            count += 10;
        }
        if (s[i] === "L") {
            if (s[i - 1] === "X") {
                continue;
            }
            count += 50;
        }
        if (s[i] === "C") {
            if (s[i - 1] === "X") {
                continue;
            }
            if (s[i + 1] === "D") {
                count += 400;
                continue;
            }
            else if (s[i + 1] === "M") {
                count += 900;
                continue;
            }
            count += 100;
        }
        if (s[i] === "D") {
            if (s[i - 1] === "C") {
                continue;
            }
            count += 500;
        }
        if (s[i] === "M") {
            if (s[i - 1] === "C") {
                continue;
            }
            count += 1000;
        }
    }
    return count;
};
// console.log(romanToInt("III")); // 3
// console.log(romanToInt("LVIII")); // 58
// console.log(romanToInt("MCMXCIV")); //1994
var isPalindrome = function (x) {
    var newX = Number(x.toString().split("").reverse().join(""));
    if (x === newX) {
        return true;
    }
    return false;
};
// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(10))
// day 30 - return array of indexes of values that equal target value
// you will be givin an array of numbers and target number as arguments
// and you need to return an array of indexes of the values that equals
// the target value when sumed up
// example twoSum([2, 3, 4], 6) output >>> [0, 2] because 2 + 4 = 6
// and the index of 2 is 0, index of 4 is 2.
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
// console.log(twoSum([2, 3, 4], 6)) // [0, 2]
// console.log(twoSum([2, 3], 5)) // [0, 1]
// console.log(twoSum([2, 3, 4, 9], 11)) // [0, 3]
