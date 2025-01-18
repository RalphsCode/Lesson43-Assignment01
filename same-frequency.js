// add whatever parameters you deem necessary

function sameFrequency(num1, num2) {
    // Convert numbers to strings to manipulate individual digits
    const str1 = num1.toString();
    const str2 = num2.toString();
    
    // if digit/string lengths are not the same
    if(str1.length !== str2.length) {
        return false;
    };
    
    // Create frequency counters for each of the numbers
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    
    // frequencies for num1
    for(let digit of str1) {
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
    }
    
    // freqencies for num2
    for(let digit of str2) {
        frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }
    
    // Do a comparisson between nums, loop thru num1
    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    
    // If we made it this far we have the same no. of digits in the two numbers
    return true;

}   // sameFrequency()

module.exports = sameFrequency;
