// DESCRIPTION: 
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//SOLUTION:
function defineSuit(card) {
    const s = {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    } 
    return s[card.charAt(card.length-1)]
  }