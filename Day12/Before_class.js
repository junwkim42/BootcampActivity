/*
Write a function that takes in a single word as a string and returns true if it’s a palindrome and
false otherwise (a palindrome is spelled the same way forwards and backwards).
Ex:
Input: "noon"
Output: true
Input: "horse"
Output: false
Input: "racecar"
Output: true
*/
function isPalindrome(str){
    if (str == "" || str == undefined)
    {
        return false;
    }
    var j = str.length - 1;
    for(var i = 0; i < j; i++){
        if (str[i] != str[j]){
            return false;
        }
        j--;
    }
    return true;
}

console.log(isPalindrome("noon"));
console.log(isPalindrome("horse"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome(""));
console.log(isPalindrome());