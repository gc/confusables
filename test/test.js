const { remove, obfuscate, characters, stripCombiningMarks } = require('../dist');

console.log(remove('Iñtërnâtiônàlizætiøn'));
console.log(obfuscate('test123123'));

const { readFileSync, writeFileSync } = require('fs');
const punctuationRegEx = /[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g;
const newCharacters = readFileSync('./test/newchars', 'utf8');
const blacklistedCharacters = readFileSync('./test/blacklistedchars', 'utf8');

function testForDuplicates() {
	const items = [];
	for (let i = 0; i < characters.length; i++) {
		for (const char of characters[i].alts) {
			if (items.includes(char)) {
				console.error(`${char} is duplicated.`);
			}
			items.push(char);
		}
	}
}

function print() {
	for (let i = 0; i < characters.length; i++) {
		const { alts, base } = characters[i];
		console.log(`${base}: ${[...new Set(alts)].join('')}`);
	}
}

function checkNewChars() {
	const currentChars = characters.map(arr => arr.alts).join('');
	const newChars = strip(newCharacters);
	let newStr = '';
	for (let i = 0; i < newChars.length; i++) {
		const char = newChars[i];

		if (currentChars.includes(char) || blacklistedCharacters.includes(char)) {
			continue;
		}
		newStr += char;
	}

	writeFileSync('./test/newchars', chunk(newStr.split(''), 20).map(arr => arr.join(',')).join('\n'));
}

function chunk(entries, chunkSize) {
	const clone = entries.slice();
	const chunks = [];
	while (clone.length) chunks.push(clone.splice(0, chunkSize));
	return chunks;
}

function strip(str) {
	return stripCombiningMarks(str)
		.replace(/\s/g, '')
		.replace(/[0-9a-zA-Z]/g, '')
		.replace(punctuationRegEx, '');
}


checkNewChars();
testForDuplicates();
