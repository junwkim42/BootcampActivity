/*
Write a function that takes in an integer and outputs the sum of all the numbers from 1 to that integer.

Ex:
Input: 2
Output: 3 (because 1 + 2 = 3)

Input: 4
Output: 10  (because 1 + 2 + 3 + 4 = 10)

Input: 10
Output: 55
*/
function addupto(num){
    var save = 0;
    if (num > 0){
        for(var i = 1; i < num + 1; i++){
            save += i;
        }
    }
    else if (num < 0){
        for (var i = 1; i > num - 1; i--){
            save += i;
        }
    }
    else{
        return 1;
    }
    return save;
}
console.log("addupto test");
console.log("addupto(0) : " + addupto(0));
console.log("addupto(5) : " + addupto(5));
console.log("addupto(-5) : " + addupto(-5));
/*
Write a function that takes in an array of numbers and outputs the maximum number.

Ex:
Input: [ 1, 2, 3 ]
Output: 3

Input: [ 3, 6, 4, 5, 2, 1 ]
Output: 6

Input: [ 3, 3, 3 ]
Output: 3
*/

function maxNumArray(arr){
    var save = arr[0];
    if (save == undefined){
        return ;
    }
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > save){
            save = arr[i];
        }
    }
    return save;
}
console.log("maxNumArray test");
console.log("maxNumArray() : " + maxNumArray([]));
console.log("maxNumArray : " + maxNumArray([1,2,10,-15,5]));



/*
Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
*/

function numVowel(str){
    var count = 0;
    var lowstr = str.toLowerCase();

    if (str == undefined){
        return ;
    }
    for(var i = 0; i < lowstr.length; i++){
        if (lowstr[i] == "a" || lowstr[i] == "e" || lowstr[i] == "i" || lowstr[i] == "o" || lowstr[i] == "u"){
            count++;
        }
    }
    return count;
}

console.log("numVowel test");
console.log("numVowel() : " + numVowel(""));
console.log(`numVowel("HELLO WORLD BOOTCAMP IS FUN") : ` + numVowel("HELLO WORLD BOOTCAMP IS FUN"));