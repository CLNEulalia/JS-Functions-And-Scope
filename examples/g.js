arr = new Array();
m   = new Map();

let secret = "My dog's name is Wilkinson"
let decodeCipher, encodeCipher

var encode = function(s) {
    let arr = new Array()
    for (i=0; i < s.length; i++) {
        char = s[i]    
        if (!arr.includes(char)) {
            arr.push(char)
        }
    }
    
    decodeCipher = new Map(arr.entries())
    encodeCipher = new Map()
    decodeCipher.forEach((v,k) => encodeCipher[v] = k)

    arr = new Array()
    for (i=0; i < s.length; i++) {
        arr.push(encodeCipher[s[i]])
    }
    return arr
}

let encodedSecret = encode(secret)

var decode = (arrCode) => {
    let arr = new Array()
    for (i=0; i<arrCode.length; i++) {
        arr.push(decodeCipher.get(arrCode[i]))
    }
    return arr.join('')
}

let decodedSecret = decode(encodedSecret)

console.log(secret)
console.log(encodedSecret)
console.log(decodedSecret)

