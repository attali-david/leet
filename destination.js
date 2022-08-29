var destCity = function(paths) {
    let hash = {}
    
    for(let city of paths) {
        hash[city[0]] = false

        if(!hash.hasOwnProperty([city[1]])) {
            hash[city[1]] = true
        }
    }

    for(let dest in hash) { 
        if(hash[dest] === true) {
            return dest
        }
    }
};

var countConsistentStrings = function(allowed, words) {
    let set = new Set(allowed)

    let count = 0
    
    words.forEach(word => {
        let w = new Set(word)
        let test = new Set([...set, ...w])
        if(set.size === test.size) {
            count++
        }
    })

    return count
};

var maxLength = function(arr) {
    let i = 0
    let j = arr.length - 1
    let longest = 0
    
    while (i < j) {
        let test = new Set([...arr[i], ...arr[j]])
        if(test.size === (arr[i].length + arr[j].length)) {
            if (longest < test.size) {
                longest = test.size 
            }
        }
        if(j - 1 === i) {
            j = arr.length - 1
            i++
        } else {
            j--
        }
    }
    
    return longest
};


var duplicateZeros0 = function(arr) {
    let len = arr.length
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            let rest = arr.slice(i + 1)
            arr.splice(i + 1, rest.length, 0, ...rest)
            i++
        }
        arr.splice(len)
    }
};

const duplicateZeros = function(arr) {
    let count = 0
    for(let k = 0; k < arr.length; k++) {
        if (arr[k] === 0 && k < (arr.length - count + 1)) {
            console.log(`index: ${k}, count: ${count}, len: ${arr.length}`)
            count++
        }
    }

    let i = arr.length - 1 - count
    let j = arr.length - 1
    // console.log(count, i, j)

    while(i >= 0) {
        if(arr[i] === 0){
            arr[j] = arr[i]
            arr[j - 1] = 0
            j--
        } else {
            arr[j] = arr[i]
        }
        i--
        j--
    }
    console.log(arr)
}
// duplicateZeros([1,0,2,3,0,4,5,0])
// duplicateZeros([0,1,7,6,0,2,0,7])
// duplicateZeros([8,4,5,0,0,0,0,7])


// var merge = function(nums1, m, nums2, n) {
//     let last = nums1.length - 1

//     m--
//     n--

//     while(m >= 0 && n >= 0) {
//         if(nums1[m] > nums2[n]) {
//             nums1[last] = nums1[m]
//             m--
//         } 
//         else {
//             nums1[last] = nums2[n]
//             n--
//         }
//         last--
//     }
//     console.log(nums1)
// };

// merge([1,2,3,0,0,0], 3, [2, 5,6], 3)

const merge = (arr1, arr2) => {
    let i = 0
    let j = 0
    let arr = []

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            arr.push(arr1[i])
            i++
        } else {
            arr.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) {
        arr.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        arr.push(arr2[j])
        j++
    }
    console.log(arr)
    return arr
}


const mergeSort = (arr) => {
        if(arr.length <= 1) return arr
        let mid = Math.floor(arr.length/2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left, right)
    }



function binary(arr, val) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let mid = left + Math.floor((right - left + 1)/2)
        if(val < arr[mid]) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    console.log(arr[left])
    return arr[left] === val ? left : -1 
}


binary([-1,0,3,5,9,12, 15], 9)

var removeElement = function(nums, val) {
    let i = 0
    let j = nums.length - 1
    let k = 0
    
    while(i <= j) {
        if(nums[i] === val) {
            nums[i] = nums[j]
            nums[j] = '_'
            j--
            k++
        } else {
            i++
        }
    }
    return nums.length - k
};


const validMountainArray = function(arr) {
    if(arr.length < 3) return false
    let i = 0
    let j = 1
    let peak = false

    while(j < arr.length ) {
        if(i > 0 && !peak && arr[i] > arr[j]){
            peak = true
        }
        if(arr[i] >= arr[j] && !peak) return false
        if(arr[i] <= arr[j] && !!peak) return false
        i++, j++
    }
    if(!peak) return false
    return true
}


var replaceElements = function(arr) {
    let i = 0
    let j = i + 1

    while(i < arr.length - 1) {
        let max = arr[i + 1] > arr[j] ? arr[i + 1] : arr[j] 
        // console.log(`i: ${i}, j: ${j}, arr: ${arr}`)
        if(j < arr.length) {
            // console.log(`n: ${n} , j: ${arr[j]} `)
            arr[i] = max
                // console.log('replace')
            // console.log(`after: n is ${n} `)
            j++
        }
        if(j >= arr.length - 1) {
            i++
            j = i + 1
        }
    }
    arr[arr.length - 1] = -1
    return arr
};


var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i]*nums[i]
    }
    
    function merge(arr1, arr2) {
        let i = 0
        let j = 0
        let arr = []
        
        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
                arr.push(arr1[i])
                i++
            } else {
                arr.push(arr2[j])
                j++
            }
        }
        
        while(i < arr1.length) {
            arr.push(arr1[i])
            i++
        }
        
        while(j < arr2.length) {
            arr.push(arr2[j])
            j++
        }
        return arr
    }
    
    function mergeSort(arr) {
        if(arr.length <= 1) return arr
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left, right)
    }
    console.log(nums)
    return mergeSort(nums)
};

var merger = function(nums1, m, nums2, n) {
    let last = nums1.length - 1
    m--, n--
    while(n >= 0 && m >= 0) {
         if(nums2[n] > nums1[m]) {
            nums1[last] = nums2[n]
            n--
         } else {
            nums1[last] = nums1[m]
            m-- 
         }
        last--
    }
    while(n >= 0) {
        nums1[last] = nums2[n]
        n--
        last--
    }
};


 var searchMatrix = function(matrix, target) {
    if(matrix.length === 1 && matrix[0].length === 1) {
        return matrix[0][0] === target ? true : false
    }

    function binarySort(arr) {
        let left = 0
        let right = arr.length - 1

        while(left < right) {
            let mid = left + Math.floor((right - left + 1) / 2)
            let least = arr[mid][0]
            let most = arr[mid][arr[mid].length - 1]

            if(least > target) {
                right = mid - 1
            } else {
                left = mid
            }
        }

        arr = arr[left]
        left = 0
        right = arr.length - 1

        while(left < right) {
            let mid = left + Math.floor((right - left + 1) / 2)
            if(arr[mid] > target) {
                right = mid - 1
            } else {
                left = mid
            }
        }
        return arr[left] === target ? true : false
    }
    return binarySort(matrix)
};

function findDiagonalOrder(matrix) {
    const map = {}

    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[r].length; c++) {
            let curr = matrix[r][c]
            if(!map[r+c]) map[r+c] = []
            map[r+c].push(curr)
        }
    }

    let arr = []
    for(const key in map) {
        if(map[key].length !== 1 && key % 2 === 0) {
            map[key].reverse()
        }
        arr = arr.concat(map[key])
    }
    return arr
}

var spiralOrder = function(matrix) {
    let res = []
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    
    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++
        
        for(let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right--
        
        if(left > right || top > bottom) break
        
        for(let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        bottom--
        
        for(let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left++
    }
    
    
    return res
};


// var setZeroes = function(matrix) {
//     let hash = {'r': [], 'c': []}
//     for(let r = 0; r < matrix.length; r++) {
//         for(let c = 0; c < matrix[r].length; c++) {
//             if(matrix[r][c] === 0) {
//                 hash['r'].push(r)
//                 hash['c'].push(c)
//             }
//         }   
//     }
//     for(let r = 0; r < matrix.length; r++) {
//         for(let c = 0; c < matrix[r].length; c++) {
//             if(hash['r'].includes(r) || hash['c'].includes(c)) {
//                 matrix[r][c] = 0 
//             }
//         }   
//     }
// };

var setZeroes = function(matrix) {
    for(let r = 0 ; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            if(matrix[r][c] === 0) {
                mark(matrix, r, c)
            }
        }
    }
    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            if(matrix[r][c] === null) {
                matrix[r][c] = 0
            }
        }
    }
    console.log(matrix)
    return matrix
}

const mark = (matrix, r, c) => {
    for(let i = 0; i < matrix[0].length; i++) {
        if(matrix[r][i] !== 0) {
            matrix[r][i] = null
        }
    }
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][c] !== 0) {
            matrix[i][c] = null
        }
    }
}


// setZeroes([[-4,-2147483648,6,-7,0],[-8,6,-8,-6,0],[2147483647,2,-9,-6,-10]])
// setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
// setZeroes([[1,1,1],[1,0,1],[1,1,1]])


var searchMatrix = function(matrix, target) {
    const binary = (mat) => {
        let left = 0
        let right = mat.length - 1
        
        while(left < right) {
            let mid = left + Math.floor((right - left + 1) / 2)
            
            if(mat[left][0] <= target && mat[left][left.length - 1] >= target) {
                return binary(mat[left])
            } else if(mat[right][0] <= target && mat[right][right.length - 1] >= target) {
                return binary(mat[right])
            }
            
            if(mat[mid][0] > target) {
                right = mid - 1
            } else {
                left = mid
            }
        }
        console.log(left === target, mat)
        return left === target ? true : false
    }
    binary(matrix)
};

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)