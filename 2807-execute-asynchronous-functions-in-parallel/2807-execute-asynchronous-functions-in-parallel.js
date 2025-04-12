/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        functions.forEach((fn, index) => {
            fn()
            .then(val => {
                results[index] = val;
                completed++;
                if (completed === functions.length) {
                    resolve(results);
                }
            })
            .catch(reject); // if any promise rejects, we reject immediately
        });

        if (functions.length === 0) {
            resolve([]); // edge case: empty input
        }
    });
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */