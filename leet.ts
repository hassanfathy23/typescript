var convert = function(s: string, numRows: number) {
    if(!s || numRows <= 0) return ''
    if(numRows === 1) return s

    let result: string = ''
    const step = 2 * numRows - 2

    for(let i = 0; i < numRows; i++) {
      for(let j = i; j < s.length; j += step) {
        result += s[j]

        if(i != 0 && i != numRows - 1 && (j + step - 2 * i) < s.length) {
          result += s[j + step - 2 * i]
        }
      }
    }

    console.log(result)
    return result
};

convert("PAYPALISHIRING", 3);
// convert("PAYPALISHIRING", 4);
// convert("A", 1);

// Day 34 - get the length of the last word in a string
// you will be given a string and you need to return the length
// of the last word in it, you need to put in consideration the
// white spaces at the end and start of the string
// example: "Hello World" returns 5 because the word "world"
// contains 5 letters

var lengthOfLastWord = function (s: string) {
  let newS: string[] = s.trim().split(" ");
  let lastLength = newS[newS.length - 1].length;
  console.log(lastLength);
  return lastLength;
};

// lengthOfLastWord("Hello World") // returns 5
// lengthOfLastWord("   fly me   to   the moon  ") // returns 4
// lengthOfLastWord("luffy is still joyboy") // returns 6

var searchInsert = function (nums: number[], target: number) {
  let result: number = 0;
  for (let i = 0; i < nums.length; i++) {
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

// searchInsert([1, 3, 5, 6], 5);
// searchInsert([1, 3, 5, 6], 2);
// searchInsert([1, 3, 5, 6], 7);

const removeElement = function (nums: number[], val: number) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
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

var findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
  const swap = (arr: number[], i: number, j: number) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
  };

  let mixedArray = nums1.concat(nums2);
  let result: number[] = [];

  if (mixedArray.length > 1) {
    for (let i = 0; i < mixedArray.length; i++) {
      for (let j = 0; j < mixedArray.length - 1; j++) {
        if (mixedArray[j] > mixedArray[j + 1]) {
          result = swap(mixedArray, j, j + 1);
        }
        result = mixedArray;
      }
    }
  } else {
    result = mixedArray;
  }

  if (result.length % 2 !== 0) {
    if (result.length === 1) {
      return result[0];
    }
    return result[(result.length - 1) / 2];
  } else {
    return (result[result.length / 2] + result[(result.length - 2) / 2]) / 2;
  }
};

findMedianSortedArrays([1, 3], [2]); // returns 2
findMedianSortedArrays([1, 3], [2, 4]); //returns 2.5

var reverseNumber = function (x: number) {
  let newX = x;
  if (x < 0) newX = x * -1;

  var str: string = newX.toString().split("").reverse().join("");

  var reversed = parseInt(str);
  if (reversed > Math.pow(2, 31)) return 0;

  if (x < 0) {
    return reversed * -1;
  } else {
    return reversed;
  }
};

// console.log(reverseNumber(123))
// console.log(reverseNumber(-173))
// console.log(reverseNumber(-27364537263))

const applyOperations = (nums: number[]) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] === nums[i]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  let index = 0;

  nums.forEach((num) => {
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

var removeDuplicates = function (nums: number[]) {
  let currentIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }

  return currentIndex;
};

// console.log(removeDuplicates([1, 1, 2]))
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

var isValid = function (s: string) {
  let stack = s.split("");
  if (stack.length % 2 != 0) return false;
  let arr: string[] = [];
  while (stack.length) {
    let topElem = stack.pop();
    if (topElem === ")" || topElem === "}" || topElem === "]") {
      arr.push(topElem);
    } else {
      let temp = arr.pop();
      if (
        !(
          (topElem === "(" && temp === ")") ||
          (topElem === "[" && temp === "]") ||
          (topElem === "{" && temp === "}")
        )
      ) {
        return false;
      }
    }
  }
  if (arr.length) return false;
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

var canCompleteCircuit = function (gas: number[], cost: number[]) {
  let n = gas.length;
  let gasInTank;

  let start = n - 1;
  let end = 0;

  gasInTank = gas[start] - cost[start];
  while (start >= end) {
    if (gasInTank >= 0) {
      gasInTank += gas[end] - cost[end];
      end++;
    } else {
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

var longestCommonPrefix = function (strs: string[]) {
  if (!strs.length) {
    return "";
  }

  for (let i = 0; i <= strs[0].length; i++) {
    if (!strs.every((string) => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
};

// console.log(longestCommonPrefix(["flower", "flight", "fly"])); // return "fl"
// console.log(longestCommonPrefix(["car", "dog", "racecar"])); // return ""

var romanToInt = function (s: string) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        count += 4;
        continue;
      } else if (s[i + 1] === "X") {
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
      } else if (s[i + 1] === "C") {
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
      } else if (s[i + 1] === "M") {
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

// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

var isPalindrome = function (x: number) {
  let newX = Number(x.toString().split("").reverse().join(""));

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

var twoSum = function (nums: number[], target: number) {
  let output;

  for (let i = 0; i < nums.length; i++) {
    const char = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const char2 = nums[j];
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
