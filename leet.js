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
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
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
//   console.log(twoSum([2, 3, 4], 6))
//   console.log(twoSum([2, 3], 5))
//   console.log(twoSum([2, 3, 4, 9], 11))
