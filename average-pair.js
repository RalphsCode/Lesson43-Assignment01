/** Write a function called averagePair. 
 * Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array 
 * where the average of the pair equals the target average. 
 * There may be more than one pair that matches the average target. */

// add whatever parameters you deem necessary

function averagePair(arr, targetAvg) {
    // Need at lease 2 elements in the arr
    if (arr.length < 2) return false;
    
    // Initialize left and right pointers
    let left = 0;
    let right = arr.length - 1;
    
    // Loop for as long as we have values available in tha arr
    while (left < right) {
        // Calculate current average
        let currentAvg = (arr[left] + arr[right]) / 2;
        
        // If we found the target average, return true
        if (currentAvg === targetAvg) {
            return true;
        }
        // If current average is too small, move left pointer to the right
        else if (currentAvg < targetAvg) {
            left++;
        }
        // If current average is too large, move right pointer to the left
        else {
            right--;
        }
    }
    
    // If got this far, there are no pairs
    return false;

}   // END averagePair()

module.exports = averagePair;
