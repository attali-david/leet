// var lengthOfLongestSubstring = function(s) {
//     let hash = new Set()
//     let len = 1
//     if(s.length === 0) return 0
    
//     for(let l = 0; l < s.length - 1; l++) {
//         hash.add(s[l])
//         let r = l + 1
//         while(!hash.has(s[r]) && r < s.length) {
//             hash.add(s[r])
//             len = Math.max(len, hash.size)
//             r++   
//         }
//         hash.clear()
//     }
//     return len
// };

// var lengthOfLongestSubstring = function(s) {
//     let hash = new Set()
//     let len = 0
//     let l = 0
//     let start = 0
    
//     while(l < s.length) {
//         if(!hash.has(s[l])) {
//             hash.add(s[l])
//             len = Math.max(len, hash.size)
//             l++  
//         } else {
//             l = start++
//             hash.clear()
//         }
//     }
//     console.log(len)
//     return len
// };

// not functional
// var lengthOfLongestSubstring = function(s) {
//     let hash = new Set()
//     let len = 0
//     let l = 0
//     let r = 1
//     hash.add(s[l])

//     while(r < s.length) {
//         len = Math.max(len, hash.size)
//         if(hash.has(s[r])) {
//             hash.delete(s[l])
//             l++
//         } else {
//             hash.add(s[r])
//             r++
//         }
//     }
//     console.log(len)
//     return len
// };

var lengthOfLongestSubstring = function(s) {
    let hash = new Set()
    let len = 0
    let l = 0
    
    for(let r = 0; r < s.length; r++) {
        while(hash.has(s[r])) {
            hash.delete(s[l])
            l++
        }
        hash.add(s[r])
     
        len = Math.max(len, hash.size)
    }
    return len
};

lengthOfLongestSubstring("abdcabcaf")