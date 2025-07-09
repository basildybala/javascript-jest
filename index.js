
//Reverse String
let str='abcjd'
function reverseStr(str){
    let reverse=str.split('').reverse().join('')

    return reverse
} 
console.log(reverseStr(str))

module.exports =reverseStr