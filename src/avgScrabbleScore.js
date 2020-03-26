let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
let sum =0 ;
for (let word of words) {
  sum+=scrabbleScore(word);
}
let avg = parseInt(sum/words.length); //round it down
return avg;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');
  console.log(avgScrabbleScore(['hello','my','name','is','Satchel'])===7);
  console.log(avgScrabbleScore(['Im','the','best','in','the','world'])===5);
  console.log(avgScrabbleScore(['alexander','the','great'])===9);




  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScore;
