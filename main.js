// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:


// Output:



// str = "abcadeecfb"
// let s= new Set()
// for(let a=0; a<str.length; a++){
//     s.add(str[a])
// }
// let res =""
// for(let ch of s){
//     res += ch
// }
// console.log(res);

s="abcadeecfb"
let map = new Map()
for(let i=0;i<=s.length;i++){
if(map.has(s[i])){
let value = map.get(s[i])
map.set(s[i], value+1)
}
else{
    map.set(s[i], 1)
}
}
for(let [k,v] of map){
    console.log(k+"="+v);

}
