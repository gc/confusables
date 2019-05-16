import { characters } from './characters';
import { stripCombiningMarks } from './util';

export { characters, stripCombiningMarks };
export const diacriticsMap = {};
export const alphabetMap = {};

for (const { base, alts } of characters) {
	alphabetMap[base] = alts;
	for (const char of alts) {
		diacriticsMap[char] = base;
	}
}

export const remove = str =>
	[...stripCombiningMarks(str)].reduce((newStr, char) =>
		newStr + diacriticsMap[char] || char, '');

export const obfuscate = str =>
	[...str].reduce((newStr, char) => {
		const charMap = alphabetMap[char];
		return newStr + (charMap ?
			charMap[Math.floor(Math.random() * charMap.length)] :
			char);
	}, '');
