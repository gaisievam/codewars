// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//SOLUTION:
function nameShuffler(str){
    let fn = '', ln = '', mode ='fn';
    
    for (let i = 0; i < str.length; i++){
      if(str[i] === ' '){
        mode = 'ln';
        continue;
      }
      if(mode === 'fn') fn += str[i];
      else ln += str[i];
    }
    return `${ln} ${fn}`;
  }