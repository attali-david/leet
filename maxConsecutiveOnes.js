var longestOnes = function(nums, k) {
    let hash = {}
    let maxF = 0
    let len = 0
    let left = 0
    
    for(let right = 0; right < nums.length ; right++) {
        if(hash[nums[right]]) hash[nums[right]]++
        else hash[nums[right]] = 1
        if(nums[right] === 1) maxF = Math.max(maxF, hash[nums[right]])
        while((right - left + 1 - maxF) > k) {
            hash[nums[left]]--
            left++
        }
        len = Math.max(len, (right-left + 1))
        console.log(hash, maxF, len)
    }
    console.log(len)
    return len
};

longestOnes([0,0,0,0]
    ,0)