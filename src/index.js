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

export function remove(str) {
	let newStr = '';
	for (const char of stripCombiningMarks(str)) {
		newStr += diacriticsMap[char] || char;
	}
	return newStr;
}

export function obfuscate(str) {
	let newStr = '';
	for (const char of str) {
		const charMap = alphabetMap[char];
		newStr += charMap ?
			charMap[Math.floor(Math.random() * charMap.length)] :
			char;
	}
	return newStr;
}
