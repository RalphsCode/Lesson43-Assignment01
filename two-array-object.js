// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    // Create the object that we will return
    const outObj = {};
    
    // Loop over the keys array
    for(let i = 0; i < keys.length; i++) {
        // if there is a corresponding value
        if(i < values.length) {
            outObj[keys[i]] = values[i];
        } else {
            // no corresponding value element in the values array
            outObj[keys[i]] = null;
        }
    }
    // Return the new object/dictionary
    return outObj;
}   // END twoArrayObject

module.exports = twoArrayObject;