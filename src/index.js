import { characters } from './characters';
import { stripCombiningMarks } from './util';

export { characters, stripCombiningMarks };
export const diacriticsMap = {};
export const alphabetMap = {};

for (let i = 0; i < characters.length; i++) {
	const { alts, base } = characters[i];
	alphabetMap[base] = alts;
	for (const char of alts) {
		diacriticsMap[char] = base;
	}
}

export function remove(str) {
	let newStr = '';
	for (const char of str) {
		newStr += diacriticsMap[char.toLowerCase()] || diacriticsMap[char.toUpperCase()] || char;
	}
	return newStr;
}

export function obfuscate(str) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		const char = str.charAt(i);
		const charMap = alphabetMap[char];
		if (!charMap) {
			newStr += char;
			continue;
		}
		newStr += charMap[Math.floor(Math.random() * charMap.length)];
	}
	return newStr;
}
