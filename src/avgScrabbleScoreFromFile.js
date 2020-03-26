let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');

let ScrabbleFile  = process.argv[2];
var text = fs.readFileSync(ScrabbleFile, 'utf-8');


/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */
function avgScrabbleScoreFromFile(fileName) {
  let scrabble_words = fileName.trim().split(/\s*\b\s*/);
  return avgScrabbleScore(scrabble_words);
  // return scrabble_words;
  }


if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');
  console.log(avgScrabbleScoreFromFile(text))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = avgScrabbleScoreFromFile;
