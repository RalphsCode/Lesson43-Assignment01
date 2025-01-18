// add whatever parameters you deem necessary

function isSubsequence(str1, str2) {
    // Create pointers for each str
    let i = 0;
    let j = 0;
    
    // Loop for as long as we still have elements in the strings
    while (i < str1.length && j < str2.length) {
        // If characters match, move str1 pointer
        if (str1[i] === str2[j]) {
            i++;
        }
        // Always move str2 pointer
        j++;
    }
    
    // If we've gone through all characters in str1, it's a subsequence
    return i === str1.length;
}   // END isSubsequence()

module.exports = isSubsequence;