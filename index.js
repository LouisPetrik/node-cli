#!/usr/bin/env node
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`What's your firstname? \n`, (fn) => {
	readline.question(`What's your lastname? \n`, (ln) => {
		console.log(`Hey ${fn} ${ln}!`)
		readline.close()
	})
})
