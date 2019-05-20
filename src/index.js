import { characters } from './characters';
import { stripCombiningMarks } from './util';

export { characters, stripCombiningMarks };
export const confusablesMap = {};
export const alphabetMap = {};

for (const { base, alts } of characters) {
	alphabetMap[base] = alts;
	for (const char of alts) {
		confusablesMap[char] = base;
	}
}

/**
 * Removes confusable unicode characters from a string.
 * @param {string} str The text to remove confusables from.
 * @returns {string}
 */
export function remove(str) {
	let newStr = '';
	for (const char of stripCombiningMarks(str)) {
		newStr += confusablesMap[char] || char;
	}
	return newStr;
}

/**
 * Randomly mixes up a string with random confusable characters.
 * @param {string} str The text to obfuscate.
 * @returns {string}
 */
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
