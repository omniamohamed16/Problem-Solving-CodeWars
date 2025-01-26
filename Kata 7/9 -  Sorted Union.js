// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// solution 1 ////////////////////////

function uniteUnique(...array) {
    newarr=[]
  newset=[]
   array.map(e => e.map(x=> newarr.push(x)))
  set = new Set(newarr)
  for (const value of set){newset.push(value)}
    return  newset
 
 }


//  Solution 2 ///////////////////////



function uniteUnique(...arrays){
    newSet = new Set()
    result=[]
    for(const array of arrays){
      for(const value of array){
        if (!newSet.has(value)){
          newSet.add(value)
          result.push(value)
          }
        }
      }
      return result
    }





    // Test Cases////////

//     const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests",() =>{
//   it("Tests", () => {
//     assert.deepEqual(uniteUnique([1, 2], [3, 4]),[1, 2, 3, 4]);
//     assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),[1, 3, 2, 5, 4]);
//     assert.deepEqual(uniteUnique([4, 3, 2, 2]),[4, 3, 2]);
//     assert.deepEqual(uniteUnique([4, "a", 2], []),[4, "a", 2]);
//     assert.deepEqual(uniteUnique([], [4, "a", 2]),[4, "a", 2]);
//     assert.deepEqual(uniteUnique([], [4, "a", 2], []),[4, "a", 2]);
//     assert.deepEqual(uniteUnique([]),[]);
//     assert.deepEqual(uniteUnique([],[]),[]);
//     assert.deepEqual(uniteUnique([],[1, 2]),[1, 2]);
//     assert.deepEqual(uniteUnique([],[1, 2, 1, 2],[2, 1, 1, 2, 1]),[1, 2]);
//   })
// })

// describe("Random tests",() =>{
//   const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
//   const sol=(...rest)=>rest.length==1 ? rest[0].filter((a,i)=>i==rest[0].indexOf(a)) : uniteUnique(...[rest[0].filter((a,i)=>i==rest[0].indexOf(a)).concat(rest[1].filter((a,i)=>rest[0].indexOf(a)==-1 && rest[1].indexOf(a)==i))].concat(rest.slice(2)));
//   const base="abcdefghijklmnopqrstuvwxyz";

//   for (let i=0;i<100;i++){
//     let r=Array.from({length: randint(1,10)}, a=>Array.from({length: randint(1,10)}, b=>randint(0,1) ? randint(0,9) : base[randint(0,base.length-1)]));
//     it(`Testing for [${r.map(a=>`[${a.join(", ")}]`).join(", ")}]`,() =>{
//       let expected=sol(...r);
//       assert.deepEqual(uniteUnique(...r),expected,"It should work for random inputs too");
//     })
//   }
// })