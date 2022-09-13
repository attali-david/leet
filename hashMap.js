
var MyHashMap = function() {
    this.map = []
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let int
    if(this.map.find((i, index) => {
        if(i[0] === key) {
            int = index
        } 
    }) == -1) {
        this.map.push([key, value])
    } else {
        this.map[int] = [key, value]
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    
};


var obj = new MyHashMap()
obj.put([1, 2])
console.log(obj)
// var param_2 = obj.get([1, 2])
// obj.remove(key)
