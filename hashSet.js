
var MyHashSet = function() {
    this.set = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.set.indexOf(key) == -1) this.set.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = this.set.indexOf(key)
    this.set.splice(index, 1)
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let index = this.set.indexOf(key)
    return index > -1 ? true : false
};

var obj = new MyHashSet()
obj.add(1)
obj.add(2)
obj.add(3)
obj.add(1)
console.log(obj)
var param_3 = obj.contains(1)
console.log(param_3)

obj.remove(1)
console.log(obj)
var param_3 = obj.contains(1)
console.log(param_3)
