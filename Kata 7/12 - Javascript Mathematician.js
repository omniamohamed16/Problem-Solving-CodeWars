// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

// The function should contain at least 1 argument per set.

// calculate(1)(1)       // should return 2
// calculate(1,1)(1)     // should return 3
// calculate(1,1)(1,-1)  // should return 2
// calculate(2,4)(3,7,1) // should return 17

// Solution ////////////
function calculate(...args1) {
    const sum1 = args1.reduce((acc, val) => acc + val, 0);
    return function(...args2) {
  
      const sum2 = args2.reduce((acc, val) => acc + val, 0);
      return sum1 + sum2;
  };
}



// Solution 2 ECS6 /////

calculate = (...args1) => (...args2) =>[...args1 , ...args2].reduce((acc,curr)=> acc + curr)


