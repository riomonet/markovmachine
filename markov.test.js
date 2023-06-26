const { MarkovMachine } = require('./markov.js')





describe('Markov Machine Functions', function () {



    test('string to list test', () => {

	let mm = new MarkovMachine('Hi my name is Air');
	expect(mm.words.length).toEqual(5);
    }) ; 

    test('null string', () => {
    	let mm = new MarkovMachine('');
	expect(mm.words.length).toEqual(0);
	expect(mm.dict).toBeUndefined;

	
    });
    
    test('remove punctuation test', () => {

    })

    test('random index generator', ()=> {
	
    })


    
    
})
