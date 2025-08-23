
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

//     let left=0
//     let right=0
//     let maxLength=0
//     let set=new Set()

//     for(right;right<str.length;right++){
//         while(set.has(str[right])){
//             set.delete(str[left])
//             left++
//         }
//         set.add(str[right])
//         maxLength =Math.max(maxLength,right-left+1)

//     }


//     return maxLength
// } 

//  console.log(finSub("abcbbcbb")); // 3 ("abc") 

//compressString
// function compressString(s) {
//   if (!s) return '';

//   let result = '';
//   let count = 1;

//   for (let i = 1; i <= s.length; i++) {
//      if(s[i] === s[i-1]){
//         count ++
//      }else{
//         result +=s[i-1]+(count>1?count:'')
//         count=1
//      }

//   }

//   return result;
// }
// console.log(compressString('aabbccaaa')) 

// //mostFrequentChar
// function mostFrequentChar(s) {
//     let map=new Map()
    
//     for(let char of s){
//         map.set(char,(map.get(char)||0)+1)
//     }
//     let result =[...map].reduce((acc,cur)=>{
//         return acc[1]>cur[1]?acc: cur
//        })
//     return result[0]
// }

// console.log(mostFrequentChar('aabbbcccc')) 

//compressString
// function compressString(s) {
//   if (!s) return '';
//     let result=''
//     let count=1

//     for(let i=1;i<=s.length;i++){
        
//         if(s[i] ===s[i-1]){
//             count++
//         }else{
//             console.log(count)
//             result+=s[i-1]+(count >1?count:'')
//             count=1
//         }
//     }

//   return result;
// }

// function compressString(str){
//     let count=1
//     let result=''
//     for(let i=1;i<str.length;i++){
//         if(str[i]===str[i-1]){
//             count++
//         }else{
//             result +=str[i-1]+(count>1?count:'')
//             count=1
//         }
//     }
//     // add the last sequence
//     result += str[str.length - 1] + (count > 1 ? count : '');
//     return result
// }
// console.log(compressString('aabbccaaajjjj')) 

// function isRotation(s1, s2) {
//     let a= s1.length === s2.length && (s1 + s1).includes(s2);
//     console.log((s1 + s1).includes(s2))
//     return ""
// }
// console.log(isRotation('abc','acb'))
// function removeWhitespace(s) {
//     let result=''
//   for(let char of s){
//     if(char !== ' ') result+=char
//   }
//   return result
// }
// console.log(removeWhitespace(' a b c '))

// function toTitleCase(s) {
//   let result=''
//   let data=s.split(' ')
//     for(let i=0;i<data.length;i++){
//         word=data[i].trim()
//         if(word){
//             result +=data[i].charAt(0).toUpperCase()+data[i].slice(1).toLowerCase()
//             result +=" "
//         } 
//     }
//     return result
// }

// console.log(toTitleCase('  welcome   to  code '))
// console.log(toTitleCase('  hello   WORLD  '))


// function isAnagram(inp1,inp2){
//     return inp1.split('').sort().join('') === inp2.split('').sort().join('')
//     let map =new Map()
//     for(let char of inp1){
//         map.set(char,(map.get(char)||0)+1)
//     }
//     for(let char of inp2){
//        if(! map.has(char)) return false
//        map.set(char,map.get(char)-1)
//     }
//     return true
// }

// console.log(isAnagram('a', 'a'));          // true
// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car'));      // false

// function countWords(s) {
//  let count=0
// let data=s.split(' ')
//     for(let i=0;i<data.length;i++){
//         let word=data[i].trim()
//         if(word) count++
//     }
//     return count
// }
// console.log(countWords("   Hello   world  test  ")); // Expected: 3


// function removeCharacter(s, charToRemove) {
//   let result=''
//   for(let char of s){
//     if(char !== charToRemove){
//         result +=char
//     }
//   }
//   return result
// }


//  console.log(removeCharacter('hello world','l')) 


// function findShortestWord(s) {
//   let data=s.trim().split(' ')
//   let shortestWord=data[0]
//   for(let i=0;i<data.length;i++){
//     let word=data[i].trim()
//     if(word && word.length<shortestWord.length) shortestWord=word
//   }
//   return shortestWord
// } 
// console.log(findShortestWord('jumped over the lazy dog'))

// let arr=[,,,] 
// console.log(arr.length) //3 
// console.log(arr) //3 empty items

// let arr=[1,5,45,99,25,2]
// let newArr=arr.sort((a,b)=> a-b)
// console.log(arr,newArr) //Both array will be sorted

// let array=[1,2,3,4]
// array.slice(0,array.length)
// console.log(array)

// let str=' this  is my naAme             harshid   '

// function convertToCapital(str){
//     if(!str) return
//     let text=str.split(' ') //splitting to array based on the space
//     let result=[]
//     for(let i=0;i<text.length;i++){
//         let sententce=text[i].trim() //removing extra space
//         if(sententce){
//             //firt step => first letter converting to uperCase then adding remain case small letter and adding line space
//             result.push( sententce.charAt(0).toUpperCase()+sententce.slice(1).toLowerCase() +'\n')
//         }
        
//     }
//     return result.join('').trim()

// }
// console.log(convertToCapital(str))


// let nums1 = [1,2,3]
// let nums2 = [2,5,6,1] 
// let mergeTwoArray=(nums1,nums2)=>{
//     let mergedArray=[]
//     let length=nums1.length >nums2.length ?nums1.length:nums2.length
//     for(let i=0;i<length;i++){
//         console.log("===nums1[i]=======",nums1[i],mergedArray)
//         if(nums1[i]) mergedArray.push(nums1[i])
//         if(nums2[i]) mergedArray.push(nums2[i])
//     }
//     return mergedArray
// }
// console.log(mergeTwoArray(nums1,nums2))

// Find the max count of consecutive 1’s in an array ?
// let nums=[1, 1, 0, 1, 1, 1]

// let findConsecutiveNumber=(num)=>{
//     let count=0
//     let maxLength=0
//     console.log(num)
//     for(let i=0;i<num.length;i++){
//         if(num[i]===1){
//             count++
//         }
//         else{
//             console.log(count)
//             maxLength=maxLength>count?maxLength:count
//             count=0

//         }
//     }
//     // Important: in case array ends with 1s
//     maxLength=maxLength>count?maxLength:count
//     return maxLength
// }
// console.log(findConsecutiveNumber(nums))



// function isAnagram(str1,str2){
//     if(!str1 || !str2) return false
//     if(str1.length !== str2.length) return false
//     let map=new Map()
//     for (let char of str1){
//         map.set(char,(map.get(char)|| 0)+1)
//     }
//     for (let char of str2){
//         if(!map.has(char)) return false
//         map.set(char,map.get(char)-1)
//     }
//     return true
// }

// console.log(isAnagram('asd', 'ads'));          // true
// // console.log(isAnagram('anagram', 'nagaram')); // true
// // console.log(isAnagram('rat', 'car'));      // false




// function maxLength(str){
//     let left=0;
//     let right=0;
//     let maxLength=0;
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

//  console.log(maxLength("abcbbcbb")); // 3 ("abc") 



// function isAnagram(str1,str2){
//     if(!str1 || !str2) return false
//     if(str1.length !== str2.length) return false
//     let map =new Map()
//     return str1.split('').sort().join() === str2.split('').sort().join()
//     for (let char of str1){
//         map.set(char,(map.get(char)||0)+1)
//     }
//     for (let char of str2){
//         if(!map.has(char)) return false
//         map.set(char,(map.get(char)-1))
//     }
//     return true
// }

// console.log(isAnagram('asd', 'ads'));          // true
// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car'));      // false 


// function findConsecutiveNumber(nums){
//     let count=1
//     let maxCount=1
//     let result={
//         number:nums[0],
//         nos:1
//     }
//         for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             count++;
//         } else {
//             count = 1;
//         }
//         if(count>maxCount){
//             maxCount = count;
//             result.number=nums[i]
//             result.nos=count
       
//         }
        
//     }


//     return result
// }

// let nums=[1, 1, 0, 1, 1, 1,8,8,8,8,8,14,2]
//  console.log(findConsecutiveNumber(nums))


//Binary search

// let arr=[1,13,21,34,45,52,64,77,89]

// function binarySearch(nums,num){
//     let left=0
//     let right=nums.length-1
//     while(left <= right){
//         let middle=Math.floor((left+right)/2)
//         console.log(middle)
//         if(nums[middle]===num){

//             console.log(`The element is found in ${middle} position value is ${nums[middle]}`)
//             return "Element found"
//         }else if(nums[middle] > num){
            
//             right=middle-1
//             console.log("AAAAAA")
//         }else{
//             left=middle+1
//         }
//     }
// }

// console.log(binarySearch(arr,13)) 
// //findConsecutiveNumber
// let nums=[1, 1, 0, 1, 1, 1,8,8,8,8,8,14,2]
//     function findConsecutiveNumber(arr){
//         let count=1
//         let maxCount=1
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]===arr[i-1]){
//                 count++
//             }else{
//                 count=1
//             }
//             maxCount =count >maxCount ?count:maxCount
//         }
//          return maxCount
//     }
//  console.log(findConsecutiveNumber(nums)) 


// function isAnagram(wordOne,wordTwo){
//     let map =new Map()
//     for(let char of wordOne){
//         map.set(char,(map.get(char)||0)+1)
//     }
//     for(let char of wordTwo){
//         if(!map.has(char)) return false
//         map.set(char,(map.get(char)||0)-1)
//     }
//     console.log(map)
//     return true
// }

// console.log(isAnagram('asd', 'ads'));          // true
// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car'));      // false  


// let str=' this  is my naAme             harshid   '
// function convertToCapital(str){
//     let words=str.split(' ')
//     let result =[]
//     for(let i=0;i< words.length;i++){
//         let word =words[i].trim()
//         if(word){
//             result.push(word[0].toUpperCase()+word.slice(1).toLowerCase())
//         }
//     }
//     return result.join(' ').trim()
// }

// console.log(convertToCapital(str)) 



// function isAnagram(strOne,strTwo){
//     if(strOne.length !== strTwo.length) return false
//     let map=new Map()
//     for(let char of strOne){
//         map.set(char,(map.get(char)||0)+1)
//     }
//     for(let char of strTwo){
//         if(!map.has(char)) return false
//         map.set(char,(map.get(char)||0)-1)
//     }
//     return true
// }

// console.log(isAnagram('asd', 'ads'));          // true
// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car'));      // false  


// let nums=[1, 1,1,1, 0, 1, 1, 1,8,8,8,8,14,2,1]

// function findConsecutiveNumber(numbers){
//     let count =1
//     let maxCount=1
//     let result={
//         num:1,
//         coun:1
//     }
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]===numbers[i-1]){
//             count++
//         }else{
//             count=1
//         }
//         if(count>=maxCount){
//             maxCount=count
//             result.num=numbers[i]
//             result.coun=count
//         }
//     }
//     return result

// } 
// console.log(findConsecutiveNumber(nums))

// let str='hi i am harshid basil'

// function convertToCapital(str){
//     let words=str.split(' ')
//     let result=[]
//     for(let i=0;i<words.length;i++){
//         let word=words[i]
//         if(word){
//            result.push(word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
//         }
//     }
//     return result.join(' ').trim()
// }
// console.log(convertToCapital(str))

// function reverseWords(str){
//     let words=str.split(' ')
//     let result =[]
//     for(let i=words.length-1;i>=0;i--){
//         result.push(words[i])
//     }
//     return result.join(' ')
// }
// console.log(reverseWords(str))



// const num=[[1,2],['a','b'],[3,4]]
// function flatArray(nums){
//     if(!nums) return "Something went wrong"
//     let result=[]
//     for(let i=0;i<nums.length;i++){
//         if(Array.isArray(nums[i])){
//             result =result.concat(flatArray(nums[i]))
//         }else{
//             result.push(nums[i])
//         }
//     }
//     return result
// }
// console.log(flatArray(num))

// let nums=[1,4,5,2,1,1,4,8,4,8,8,8,8]
// function getLongenstRepeatingNumber(nums){
//     if(!nums) return "Value should not be empty"
//     let map=new Map()
//     for(let num of nums){
//         map.set(num,(map.get(num)||0)+1)
//     }
//     let result =[...map.entries()].reduce((acc,val)=>{
//         return acc[1]>=val[1]?acc:val
//     })
//     return {number:result[0],count:result[1]}
// }
// console.log(getLongenstRepeatingNumber(nums))

// function maxLength(str){
//     // let left=0;
//     // let right=0;
//     // let maxLength=0;
//     // let set=new Set()

//     // for(right;right<str.length;right++){
//     //     while(set.has(str[right])){
//     //         set.delete(str[left])
//     //         left++
//     //     }
//     //     set.add(str[right])
//     //     maxLength=Math.max(maxLength,right-left+1)
//     // }
//     // return maxLength
//     let left=0
//     let right=0
//     let maxLength=0
//     let set=new Set()
//     for(right;right<str.length;right++){
//      while(set.has(str[right])){
//         set.delete(str[left])
//         left++
//      }   
//      set.add(str[right])
//      maxLength =Math.max(maxLength,right-left+1)

//     }
//     return maxLength
// }

//  console.log(maxLength("abcbbcbb")); // 3 ("abc") 