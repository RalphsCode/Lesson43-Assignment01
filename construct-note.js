// add whatever parameters you deem necessary

function constructNote(str1, str2) {
    // Create a frequency counter for letters in str2
    const frequencyCounter = {};
    
    // Populate the frequency counter with characters from str2
    for (let letter of str2) {
        frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
    }
    
    // Check if str1 letters are in the frequency counter
    for (let letter of str1) {
        if (!frequencyCounter[letter]) {
            return false; // If the character is not available or count is 0
        }
        frequencyCounter[letter]--; // Use up one occurrence of the character
    }
    
    return true; // If all characters in str1 were found in str2
}   // END ConstructNote()


// Naive version:
function constructNoteNaive(str1, str2) {
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    
    if (arr1.length > arr2.length) {
        console.log("The second array does not have enough elements.")
        return false;
    }
    for (let i=0; i<arr1.length; i++) {
        const found = arr2.indexOf(arr1[i]);
        // returns an index number
        console.log("i:", i, "found:", found);
        if (found == -1) { 
            return false
        } else {
            arr2.splice(found, 1);
        }
    }   // END for loop
        
        // If made it this far, all letters in arr1 were found
        return true;
}   // END ConstructNote()

module.exports = constructNote;