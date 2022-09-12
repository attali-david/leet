var insert = function(intervals, newInterval) {
    let res = []
    for(let i = 0; i < intervals.length; i++) {
        let int = intervals[i]
        if(newInterval[1] < int[0]) {
            res.push(newInterval, ...intervals.splice(i))
            console.log(res)
            return res
        } else if (newInterval[0] > int[1]) {
            res.push(int)
        } else {
            console.log('test', newInterval)
            newInterval = [Math.min(int[0], newInterval[0]), Math.max(int[1], newInterval[1])]
            console.log('here', newInterval)
        }
    }
    res.push(newInterval)
    console.log(res)
    return res
};

insert([[1,3],[6,9]], newInterval = [2,5])