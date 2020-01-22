/* eslint-disable  @typescript-eslint/no-explicit-any */
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { characters } from '../src';
import { regexLineBreakCombiningMarks, regexSymbolWithCombiningMarks } from '../src/util';

const newCharacters = readFileSync(join(__dirname, 'newchars'), { encoding: 'utf-8' });
const punctuationRegEx = /[~`!@#$%^&*(){}[\];:"'<,.>?/\\|_+=-]/g;
const blacklistedCharacters = readFileSync(join(__dirname, 'blacklistedchars'), {
	encoding: 'utf-8'
});

const stripCombiningMarks = (str: string) =>
	str.replace(regexLineBreakCombiningMarks, '').replace(regexSymbolWithCombiningMarks, '$1');

function chunk(entries: any[], chunkSize: number) {
	const clone = entries.slice();
	const chunks = [];
	while (clone.length) chunks.push(clone.splice(0, chunkSize));

	return chunks;
}

function strip(str: string) {
	return stripCombiningMarks(str)
		.replace(/\s/g, '')
		.replace(/[0-9a-zA-Z]/g, '')
		.replace(punctuationRegEx, '');
}

function checkNewChars() {
	const currentChars = [...characters.values()].flatMap(confusablesSet => [...confusablesSet]);
	const newChars = strip(newCharacters);
	const newC: any[] = [];
	for (const char of newChars) {
		if (currentChars.includes(char) || blacklistedCharacters.includes(char)) {
			continue;
		}
		if (!newC.includes(char)) newC.push(char);
	}

	writeFileSync(
		'./test/newchars',
		chunk(newC, 30)
			.map(a => a.join(''))
			.join('\n'),
		{ encoding: 'utf-8' }
	);
}

checkNewChars();
