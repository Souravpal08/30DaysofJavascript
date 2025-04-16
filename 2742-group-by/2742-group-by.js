/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped,item)=> {
        const key = fn(item);

        //check key is exist or not
        if(!grouped[key]){
            grouped[key] = [];
        }

        grouped[key].push(item);

        //return the updated grouped object
        return grouped;
    },{});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */