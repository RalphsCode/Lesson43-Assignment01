// add whatever parameters you deem necessary

function separatePositive(arr) {
    // Create left & right pointers
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        // Move left pointer right if a positive number
        if (arr[left] > 0) {
            left++;
        // Move right pointer left if a negative number
        } else if (arr[right] < 0) {
            right--;
        // If left is negative and right is positive, swap them
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            // move the pointers
            left++;
            right--;
        }
    } // END while loop
    
    return arr;
}   // END seperatePositive()

module.exports = separatePositive;