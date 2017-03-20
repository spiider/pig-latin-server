const VOWEL_PATTERN   = /[aeiou]/ig
    , Y_VOWEL_PATTERN = /[aeiouy]/ig;

/*
  Basically, the Pig Latin system used here works as follows:

  Words that start with a vowel (A, E, I, O, U) simply have "WAY" appended to the end of the word.
  Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "AY" is appended. ('Y' is counted as a vowel in this context)
  The algorithm incorporates the following features and special case functionality:

  Ensures proper capitalization
  Correct upper case and lower case formatting
  Correctly translates "qu" (e.g., ietquay instead of uietqay)
  Differentiates between "Y" as vowel and "Y" as consonant
  (e.g. yellow = elloyay and style = ylestay) — (except for a very few exceptions)
  Correctly translates contractions
  Hyphenated words are treated as two words
  Words may consist of alphabetic characters only (A-Z and a-z)
  All punctuation, numerals, symbols and whitespace are not modified
*/

const isConsoanant = (word) => {
  let haveQU = true
    , pos    = 0
    , idx;

  //TODO: re-write this
  if(/[y]/ig.test(word[0])) {
    word = word.substr(1) + word.substr(0, 1)
  }

  // Find how many consonants before the first vowel.
  while(haveQU) {
    idx = word.indexOf(word.match(Y_VOWEL_PATTERN)[pos]);
    if(/qu/ig.test(word[idx-1]+word[idx].toLowerCase())) {
      pos++;
    } else {
      haveQU = false;
    }
  }

  return word.substr(idx) + word.substr(0, idx) + 'ay';
}

/**
 * Check if word start with vowel and append way
 * @param  String word [description]
 * @return Boolean       [description]
 */
const isVowelFirstChar = (word) => (word[0].match(VOWEL_PATTERN) ) ? word + "way" : isConsoanant(word);

const translate = (text) => {
  let _text = isVowelFirstChar(text);
  return _text;
}

export { translate };
