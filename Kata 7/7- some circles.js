// <!-- Write a function that takes as its parameters one or more numbers which are the diameters of circles.

// The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".

// You don't know how many circles you will be given, but you can assume it will be at least one. -->


// <!-- solution -->

function sumCircles(...num) {
    pi = Math.PI
    area = num.map(e => area = pi * (Math.pow((e/2), 2))).reduce((acc, curr) =>acc+curr) 
    rounded = Math.round(area)
    return `We have this much circle: ${rounded}`
}