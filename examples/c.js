function world() {console.log('global')}

function hello() {
    function world() {
        console.log('local!')
    }
    world()
}

hello()

let num1 = 1
let num2 = 2

function  mul(num1, num2) {
    
    return num1 * num2
}

let a = 3
let b = 4

console.log(mul(a,b))