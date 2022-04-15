// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

function stringToUrl(string){
  return string.split(" ").join("%20")
}

// with recursion

function stringToUrlRecursive(string){
  if (string === ""){
    return
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

// with filter

function dedupeFilter(arr){
  return arr.filter((x, i) => arr.indexOf(x) === i)
}
