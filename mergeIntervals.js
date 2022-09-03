var merge = function (intervals) {
    if (!intervals.length) return intervals
    let arr = []
    intervals.sort((a, b) => a[0] - b[0])

    for (let i = 1; i < intervals.length; i++) {
        let preCur = intervals[i - 1]
        let cur = intervals[i]
        if (preCur[1] >= cur[1]) {
            if (preCur)
                arr.push([preCur[0], preCur[1]])
        } else {
            arr.push([intervals[i][0], intervals[i + 1][1]])
        }
        arr.push(intervals[i])
    }
console.log(arr)
return arr
};

merge([[1, 3], [2, 6], [8, 10], [15, 18]])
merge([[1, 4], [4, 5]])

// in progress