/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let myval = init;
    for (let i=0; i<nums.length; i++ ){
        myval = fn(myval, nums[i]);
    }
    return myval;
};