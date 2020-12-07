var a = 1
let b
let  c = -12
b=10

function foo(a, b=10) {
    a = a + b
    a += c
    // let c = 2
    return a
}

const retVal = foo(22)

const msg = `a: ${a} | b: ${b} | c: ${c} | retVal: ${retVal}`
console.log(msg)