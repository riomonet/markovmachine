/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require('./markov.js')
const axios = require('axios')
const fs = require('fs')

const type =  process.argv[2];
const dest =  process.argv[3];

if (type == 'file') {
    console.log('Generated text from file', dest, '...')
    readFile(dest)
}
if (type == 'url'){
    console.log('Generated text from that url ...')
    readUrl(dest)
}


function readUrl (url) {

    axios.get(url)
	.then(res => {
		chainOps(res.data)
	})
	.catch(error => console.log(error.message))
}


function readFile (path) {
    fs.readFile (path, 'utf8', (err,data) => {
	if (err) {
	    console.log(err)
	    process.kill(1)
	}
	chainOps(data)
    })
}

function chainOps(data) {
    mm = new MarkovMachine(data)
    mm.makeText()
}




