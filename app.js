// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

function stringToUrl(string){
  return string.split(" ").join("%20")
}

// // with recursion

function stringToUrlRecursive(string){
  if (string === ""){
    return ""
  }
  return stringToUrlRecursive
}


// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

function dedupe(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        arr.splice(j, 1)
      }
    }
  }
  return arr
}

// with set

function dedupeSet(arr){
  return [...new Set(arr)]
}

// with filter

function dedupeFilter(arr){
  return arr.filter((x, i) => arr.indexOf(x) === i)
}

// with recursion

function dedupeRecursion(arr, newArr = []){
  if(arr === []){
    return "empty arr";
  }
}

// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

function compress(x){
  let arr = []
  let counter = 1
  for (let i = 0; i < x.length; i ++){
    if(x[i] === x[i + 1]){
      counter ++
    }
    else {
      if (counter > 1){
        arr.push(counter)
      }
      arr.push(x[i])
      counter = 1
    }
  }
  return arr.join("");
}


console.log(compressRec("aaabccdddda"))

// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

function unique(string){
  for (let i = 0; i < string.length; i ++){
    for (let j = i + 1; j < string.length; j ++){
      if (string[i] === string[j]){
        return false;
      }
      else {
        return true;
      }
    }
  }
}

function uniqueSet(string){
  return ([...new Set(string)].join("") === string)
}

// console.log(uniqueSet("copyright"))

// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

function selecSort(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if (arr[i] > arr[j]){
        let arrHigh = arr[i];
        arr[i] = arr[j];
        arr[j] = arrHigh;
      }
    }
  }
  return arr;
}

// recursive sort