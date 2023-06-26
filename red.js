
let words = ['ari','is','really','goofy','ari', 'is','goofy','ari']

let dict = words.reduce((acc, cur, index) => {

    let nextWord = words[ index + 1 ]

    if (!nextWord) return acc

    if ( !acc[cur] ) 
	acc[cur] = [];
    
    if(! ( acc[cur].includes( nextWord )))
    	acc[cur].push(nextWord);
    return  acc
    
}, {});


console.log(dict)


