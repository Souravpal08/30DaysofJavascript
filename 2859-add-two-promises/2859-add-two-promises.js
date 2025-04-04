/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2]);

    return val1+val2;
};
const promise1 = new Promise (resolve => setTimeout(()=>resolve (2), 20));
const promise2 = new Promise (resolve => setTimeout(()=> resolve (5),60))

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */