/*
Algo challenge today!!!!
Write a function that takes in an array of numbers and outputs the
average of all the numbers.
Ex:
Input: [ 1 , 4 , 7 ]
Output: 4
Input: [ 10, 5 ]
Output: 7.5
*/

function averageofArray(arr)
{
    var save = 0;
    if (!arr){
        return save;
    }
    for (var i = 0; i < arr.length ; i++){
        save += arr[i];
    }
    return (save/arr.length);
}