var str ="this hat is the greatest";
var letterCnt = [];

// 1st solution
function first_sol(str){
    var letterCnt = [];
    for (var i = 0; i < str.length; i++)
    {
        var char = str[i];
        if (letterCnt[char]){
         letterCnt[char]++;
        }
        else{
            letterCnt[char] = 1;
        }   
    }
    for (var j in letterCnt){
        if (letterCnt[j] == 1){
        return j;
        }
    }
}

// 2nd solution
function second_sol(str){
    var letterCnt = [];
    for (var i = 0; i < str.length; i++){
        var c = str.charAt(i);
        if (str.indexOf(c) === i && str.indexOf(c, i+1) === -1){
            return c;
        }
    }
}