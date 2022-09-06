function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let arr = []

    let current = intervals[0]

    for(let i = 0 ; i < intervals.length; i++) {
        let int = intervals[i]
        if(current[1] >= int[0]) {
            current = [current[0], Math.max(current[1], int[1])]
        } else {
            arr.push(current)
            current = int
        }
        if (i == intervals.length - 1)  {
            arr.push(current)
        }
    }
    return arr
}

// merge([[1, 3], [2, 6], [8, 10], [15, 18]])
// merge([[1, 4], [4, 5]])
// merge([[1,3]])
// merge([[1,4],[1,4]])
// merge([[1,4],[5,6]])
