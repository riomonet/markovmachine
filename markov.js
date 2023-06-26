/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/
    constructor(text) {
	let dict;
	let words = text.split(/[ \r\n]+/);
	this.words = words.filter(c => c !== "");
	this.removePunctuation();
	this.makeChains();
	// this.makeText(dict);
  }

   /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

    removePunctuation() {
	this.words = this.words.map(word => {
	    return word.replace(/[.!?,]/g,'')
	})
    }
    
    makeChains() {

	this.dict = this.words.reduce((acc, cur, index) => {
	    let nextWord = this.words[ index + 1 ]
	    
	    if ( !acc[cur] ) 
		acc[cur] = [];
	    
	    if (!nextWord){
		acc[cur].push(null);
		return acc
	    }
	    
	    if(! ( acc[cur].includes( nextWord )))
    		acc[cur].push(nextWord);
	    return  acc
    
	}, {});
    }

  /** return random text from chains */

    makeText(numWords = 100) {

	let choices,idx, nextWord, wordList = [];
	let curWord = this.getFirst();
	wordList.push(curWord)

	for (let i = 0; i < numWords; i++) {

	    choices = this.dict[curWord]
	    if (choices == null)
		break;
	    idx = this.getRandIdx(choices.length)
	    nextWord = choices[idx];
	    wordList.push(nextWord)
	    curWord = nextWord
	}
	console.log(wordList.join(' '))
    }


    getFirst() {

	const idx = this.getRandIdx(this.words.length)
	const firstWord = this.words[idx];
	return firstWord;
    }

    getRandIdx(max) {
	return (Math.floor(Math.random() * max));
    }

}

module.exports = { MarkovMachine }
