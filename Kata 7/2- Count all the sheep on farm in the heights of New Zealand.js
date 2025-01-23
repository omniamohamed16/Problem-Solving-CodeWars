// Every Friday and Saturday night, farmer counts sheep coming back to his farm (sheep returned on Friday stay and don't leave).

// Sheep return in groups both of the days -> You will be given two arrays with these numbers (one for Friday and one for Saturday night). Array entries are integers, equal zero or higher - in case a given array is empty, farmer did not count the sheep or got sick (we treat this as no sheep returned that night).

// Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.

// Example 1: Input: [1, 2], [3, 4], 15 --> Output: 5

// Example 2: Input: [3, 1, 2], [4, 5], 21 --> Output: 6

// Example 3: Input: [0], [4, 15], 31 --> Output: 12

// Example 4: Input: [], [4], 15 --> Output: 11

// solution//////////////////////////////////////////////


function lostSheep(friday,saturday,total){
    if (friday.length == 0 ) { friday.push(0)}
    if  (saturday.length == 0 ) {saturday.push(0)}
  fridaysheep = friday.reduce((acc , counter)=> acc+ counter)
  saturdaysheep = saturday.reduce((acc , counter)=> acc+ counter)
  final = (fridaysheep + saturdaysheep) - total
  return Math.abs(final)
}


// sample test 
const { assert } = require('chai');

describe('Example tests', () => {
  it('Basic Tests', () => {
    assert.strictEqual(lostSheep([1,2],[3,4],15),5);
    assert.strictEqual(lostSheep([3,1,2],[4,5],21),6);
    assert.strictEqual(lostSheep([5,1,4],[5,4],29),10);
    assert.strictEqual(lostSheep([11,23,3,4,15],[7,14,9,21,15],300),178);
    assert.strictEqual(lostSheep([2,7,13,17],[23,56,44,12,1,2,1,],255),77);
    assert.strictEqual(lostSheep([2,5,8],[11,23,3,4,15,112,12,4],355),156);
    assert.strictEqual(lostSheep([1,1,1,2,1,2],[2,1,2,1,2,1],30),13);
    assert.strictEqual(lostSheep([5,10,15],[11,23,3,4,15],89),3);
    assert.strictEqual(lostSheep([3,6,9,12],[3,2,1,2,3,1],44),2);
    assert.strictEqual(lostSheep([],[],15),15);
  });
});

