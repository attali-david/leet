// function insert(intervals, newInterval) {
//     intervals.push(newInterval)
//     intervals.sort((a,b) => a[0] - b[0])
//     let cur = intervals[0]
//     let start = null

//     for(let i = 0; i < intervals.length; i++) {
//         let int = intervals[i]
//         if(cur[1] >= int[0]) {
//             if(start === null) {start = i; console.log('start', start)}
//             cur = [cur[0], Math.max(cur[1], int[1])]
//         } else {
//             if (start >= 0) {
//                 intervals.splice(start, i, cur)
//                 console.log('after', start, i, intervals)
//                 break
//             }
//             cur = int
//         }
//     }
//     console.log(intervals)
//     return intervals
// }

function intervals(intervals, newInterval) {
    let cur = newInterval
    let start = null

    for(let i = 0; i < intervals.length; i++) {
        let int = intervals[i]
        if(cur[1] >= int[0]) {
            if(start === null) {start = i; console.log('start', start)}
            cur = [cur[0], Math.max(cur[1], int[1])]
        } else {
            if (start >= 0) {
                intervals.splice(start, i, cur)
                console.log('after', start, i, intervals)
                break
            }
            cur = int
        }
    }
    console.log(intervals)
    return intervals
}




// insert([[1,3],[6,9]], [2,5])
insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8])
// Intervals are non-overlapping and sorted in ascending order.
// Output: intervals is still sorted in ascending order and non-overlapping. REturn intervals


/* 
Edge Cases:
intervals is empty
newInterval is empty
intervals.length === 1 
*/

// let int = newInterval
    
// for(let i = 0; i < intervals.length; i++) {
//     let current = intervals[i]
//     let start = null
//     if(current[1] >= int[0]) {
//         int = [int[0], Math.max(int[1], current[1])]
//         if (!start) start = i
//     } else if (!!start && current[1] >= int[0]) {
//         intervals.splice(start, i, int)
//     }
// }