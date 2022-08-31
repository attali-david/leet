var totalFruit = function(fruits) {
    let hash = {}
    let left = 0
    let max = 0
    let sum = 0
    
    for(let r = 0; r < fruits.length; r++) {
            if(hash[fruits[r]]) {
                hash[fruits[r]] += 1
            }
                else {
                    hash[fruits[r]] = 1
                }
                sum++
        while(Object.keys(hash).length > 2) {
            hash[fruits[left]] -= 1
            if (hash[fruits[left]] === 0) delete hash[fruits[left]]
            left++
            sum--
        }
       max = Math.max(max, sum) 
    }
    return max
};

totalFruit([0,1,2,2])