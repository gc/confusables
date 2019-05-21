const { remove, obfuscate, characters, stripCombiningMarks } = require('../dist');
const assert = require('assert');

const { readFileSync, writeFileSync } = require('fs');
const punctuationRegEx = /[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g;
const newCharacters = readFileSync('./test/newchars', { encoding: 'utf-8' });
const blacklistedCharacters = readFileSync('./test/blacklistedchars', { encoding: 'utf-8' });

assert.strictEqual(remove('Iлｔèｒｎåｔïｏｎɑｌíƶａｔïǫԉ'), 'Internationalization');
assert.strictEqual(remove('ᴎᴑᴅᴇȷʂ'), 'NoDEJs');
assert.strictEqual(remove('hambúrguer'), 'hamburguer');
assert.strictEqual(remove('hŒllœ'), 'hOElloe');
assert.strictEqual(remove('ABCDEFGHIJKLMNOPQRSTUVWXYZé'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZe');
assert.strictEqual(remove('Ἢἕļľᦞ ш٥ṟｌᑰ'), 'Hello World');
assert.strictEqual(remove('᧚ỏņꊰṵśảƅĺɘʂ'), 'confusables');
assert.strictEqual(remove('Ƈ০ⓃբỦⓢἊƄʟἕᔕ'), 'CoNfUsAbLeS');
assert.strictEqual(remove('ƇȮṆⒻꓵSΛБᒹἜᔢ'), 'CONFUSABLES');
assert.strictEqual(remove('Àᴮ©¹²³ᕽȲⓏᾌ⧂⦶Ἀ'), 'ABC123XYZAOOA');
assert.strictEqual(remove('գẮȥฝѕꊼếὠḍČ∱ŖνẞցTўⒽդʆủᛖɫΚἰסṕ'), 'qAzWsXewdCfRvBgTyHnJuMlKiOp');
assert.strictEqual(remove('Ἢἕļľᦞ ш٥ṟｌᑰ! Hello World!'), 'Hello World! Hello World!');
assert.strictEqual(remove('ᾌḆՇḎᎬғƓҥĮʝᵏረӎⁿ៰ᑬℚƦȘፕǕ٧ẂᵡΥⓏᾄᑲćđɇ⒡ḡȟ׀ϳⓚוɱпṏpｑⓡᶊṱῠงὤӽ⒴ⓩ¹ᒿ³ᶣ5Ϭ7890'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890');


function testForDuplicates() {
	const items = [];
	for (let i = 0; i < characters.length; i++) {
		for (const char of characters[i].alts) {
			if (items.includes(char)) {
				console.log(characters[i].base);
				return console.error(`${char} is duplicated.`);
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
	const newC = [];
	for (const char of newChars) {
		if (currentChars.includes(char) || blacklistedCharacters.includes(char)) {
			continue;
		}
		if (!newC.includes(char)) newC.push(char);
	}

	writeFileSync('./test/newchars', chunk(newC, 30).join('\n'), { encoding: 'utf-8' });
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
