// add whatever parameters you deem necessary
function countPairs(arr, targetSum) {
    // Create a dictionary to store the seen values
    const seen = {};
    let count = 0;
  
    // loop thru the arr
    for (const num of arr) {
      const complement = targetSum - num;
      
      if (seen[complement]) {
        // Add to the count
        count++;
      }
      // flag the num as seen
      seen[num] = true;
    }   // END for loop
  
    return count;
  } // END countPairs
  
  module.exports = countPairs;