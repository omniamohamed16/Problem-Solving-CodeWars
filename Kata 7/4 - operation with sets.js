// We need a function that receives two arrays, each of them with elements that occur only once. We need to know:

// Number of elements that are present in both arrays
// Number of elements that are present in only one array
// Number of remaining elements in arr1 after extracting the elements of arr2
// Number of remaining elements in arr2 after extracting the elements of arr1
// Example
// arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr2 = [2, 4, 6, 8, 10, 12, 14]
// The result is: [4, 8, 5, 3]

// 4 elements present in both arrays: 2, 4, 6, 8
// 8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
// 5 elements remaning in arr1: 1, 3, 5, 7, 9
// 3 elements remaning in arr2: 10, 12, 14



// solution-1 ////////////////////////////////////////
function process2Arrays(arr1, arr2) {
    arr3 = []
    arr4 = []
    arr5 = []
    arr6 = []

    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) { arr3.push(arr1[i]) } else { arr4.push(arr1[i]), arr5.push(arr1[i]) }}

    for (let i = 0; i < arr2.length; i++) {
      if (arr1.includes(arr2[i]) == false) { arr4.push(arr2[i]), arr6.push(arr2[i]) }}

    return [arr3.length, arr4.length, arr5.length, arr6.length]
}



// Solution 2 Using Sets ///////////////////////////


function process2Arrays(arr1, arr2) {
    set1 = new Set(arr1)
    set2 = new Set(arr2)

    const commonElements = [...set1].filter(x => set2.has(x));
    const uniqueEle = [...set1,...set2].filter(x => !(set1.has(x)&& set2.has(x)))
    const remainingSet1 = [...set1].filter(x=> !(set2.has(x)))
    const remainingSet2= [...set2].filter(x=> !(set1.has(x)))

    return [commonElements.length , uniqueEle.length , remainingSet1.length , remainingSet2.length]
  }

