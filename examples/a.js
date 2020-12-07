/* 
    Scope with For Loops: w/w/o use strict
 */

// "use strict"

for (k=0; k<5;k++) {

}
console.log(k)

for (var i=0; i<5;i++) {

}
console.log(i)

let j
for (let j=0; j<5;j++) {

}
console.log(j)

const arr = [1,2,3]
console.log(typeof arr[0])
let tally = 0
for (const val in arr) {
    console.log(typeof val)
    tally += val
}
console.log(tally)