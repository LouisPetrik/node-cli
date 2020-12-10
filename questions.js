#!/usr/bin/env node
const chalk = require('chalk')
const fs = require('fs')
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

readline.question(`What's your ` + chalk.blue('firstname') + `? \n`, (fn) => {
	readline.question(`What's your ` + chalk.blue('lastname') + `? \n`, (ln) => {
		console.log(chalk.green(`Hey ${fn} ${ln}!`))
		fs.writeFile(`${ln}`, 'Hello content!', function (err) {
			if (err) throw err
			console.log('Saved!')
		})
		readline.close()
	})
})
