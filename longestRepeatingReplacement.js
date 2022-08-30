var characterReplacement = function(s, k) {
    let left = 0
    let len = 0
    let hash = {}
    let temp = k
    hash[s[left]] = 1
    
    for(let right = 1; right < s.length; right++) {
        console.log('START', s[right], hash)
        if(hash[s[right]]) hash[s[right]] = hash[s[right]] + 1
        while(!hash[s[right]] && temp > 0) {
            console.log('while')
            temp--
            hash[s[left]] = hash[s[left]] + 1
            len = Math.max(len, hash[s[left]])
            continue 
        }
        len = Math.max(len, hash[s[left]])
        if(!hash[s[right]] && temp === 0) {
            left = right - k
            right = left + 1
            hash = {}
            console.log('TEST', hash)
            hash[s[left]] = 1
        }
        console.log('END', hash)
    }
    console.log(len)
    return len
};

characterReplacement("AABABBA", 1)