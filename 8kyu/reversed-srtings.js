// //DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//SOLUTION:
function solution(str){
    let s = '';
    for (let i = str.length - 1; i >= 0; i--){
      s += str[i];
    }
    return s;
  }