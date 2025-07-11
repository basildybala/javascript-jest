
//Reverse String
// let str='abcjd'
// function reverseStr(str){
//     let reverse=str.split('').reverse().join('')
//     return reverse
// } 
// console.log(reverseStr(str))



//Is Palindrom or not
// let ispalindrom=(str)=>{
//     return str === str.split('').reverse().join('')
// }
// console.log(ispalindrom('hello'))

//Remove Duplicate from String


// function duplicateFromStr(str){
//     //  let obj={}
//     //  let result=''
//     //  for(let char of str){
//     //     if(!obj[char]){
//     //         obj[char]=char
//     //         result +=char
//     //     }
//     //  }
//     //  console.log(obj)
//     //  return result
//      return [...new Set(str)].join('')
// }
// console.log(duplicateFromStr('abcabc'))




//First Not repeating code
// function firstNonRepeatingChar(str) {
//     let map=new Map()
//   for(let char of str){
//     map.set(char,(map.get(char)||0)+1)
//   }
//   for(let [char,count] of map){
//     if(count ===1) return char
//   }
//  return ""
// }
// console.log(firstNonRepeatingChar('aabbcc'));     // Output: ""
// console.log(firstNonRepeatingChar('leetcode'));   // Output: "l"
// console.log(firstNonRepeatingChar('loveleetcode')); // Output: "v"
// console.log(firstNonRepeatingChar('z'));          // Output: "z"



// //Reverse Words
// function reverseWords(s) {
//     let result=''
//   let arr=s.split(' ').reverse()
//     for(let word of arr){
//         if(word) result +=word + ' '
//     }
//   return result
// }
// console.log(reverseWords('JavaScript'));              // "JavaScript"
// console.log(reverseWords('  hello world  '));         // "world hello"
// console.log(reverseWords('a good   example'));        // "example good a"
// console.log(reverseWords('  multiple   spaces here')); // "here spaces multiple"

//Checking two strings are anagrama or not 
// function isAnagram(s, t) {
// //   return s.split('').sort().join('')===t.split('').sort().join('')
// let map=new Map()
//     for(let char of s){
//         map.set(char,(map.get(char)||0)+1)
//     }
//     for(let char of t){
//         if(!map.has(char)) return false
//         map.set(char,map.get(char)-1)
//         if(map.get(char) <0)return false
//     }
//     return true
// }
// console.log(isAnagram('a', 'a'));          // true
// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car'));      // false

// function lengthOfLongestSubstring(s) {
//     let set = new Set();
//     let left = 0;
//     let right = 0
//     let maxLength = 0;

//     for (right; right < s.length; right++) {
//         while (set.has(s[right])) {
//             set.delete(s[left]);
//             left++;
//             console.log(left)
//         }
//         set.add(s[right]);
        
//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// }
// function finSub(str){
//     let left =0
//     let right=0
//     let maxLength=0
//     let set=new Set()
//     for(right;right<str.length;right++){
//         while(set.has(str[right])){
//             set.delete(str[left])
//             left++
//         }
//         set.add(str[right])
//         maxLength=Math.max(maxLength,right-left+1)
//     } 
//     return maxLength
// }

// console.log(finSub("abcbbcbb")); // 3 ("abc")
// // console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
// // console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
// // console.log(lengthOfLongestSubstring(""));         // 0
// // console.log(lengthOfLongestSubstring("dvdf"));     // 3 ("vdf")

// module.exports =reverseStr

// function finSub(str){
//     let maxLength=0
//     let left=0
//     let right=0
//     let set=new Set()
//     for(right;right<str.length;right++){
//         while(set.has(str[right])){
//             set.delete(str[left])
//             left++
//         }
//         set.add(str[right])
//         maxLength=Math.max(maxLength,right-left+1)
//     }

//     return maxLength
// } 

// console.log(finSub("abcbbcbb")); // 3 ("abc")