// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.


// Solution 1////////////////////////////
function solve(arr) {
    let ele = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (arr.indexOf(-element) == -1) { ele = element }
    }
    return ele
};


// Solution 2 ///////////////////////////
 solve = (arr) => arr.find(value => !arr.includes(-value))




 