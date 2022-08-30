var characterReplacement = function(s, k) {
    let l = 0
    let maxF = 0
    let map = {}
    let res = 0
    
    for(let r = 0; r < s.length; r++) {
        map[s[r]] = map[s[r]] ? map[s[r]] + 1 : 1
        maxF = Math.max(maxF, map[s[r]])
        
        while((r - l + 1 - maxF) > k) {
            map[s[l]] = map[s[l]] - 1
            l++
        }
        res = Math.max(res, r - l + 1)
    }
    return res
};

// optimal solutionS