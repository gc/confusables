import { characters } from './characters';
import { stripCombiningMarks, getSymbols, removeLNP } from './util';

const confusablesMap = {};
const alphabetMap = {};
const removeCache = {};

for (const { base, alts } of characters) {
	alphabetMap[base] = getSymbols(alts);
	for (const char of getSymbols(alts)) {
		confusablesMap[char] = base;
	}
}

/**
 * Removes confusable unicode characters from a string.
 * @param {string} str The text to remove confusables from.
 * @returns {string}
 */
export function remove(str) {
	if (removeLNP(str).length === 0) return str;
	if (removeCache[str]) return removeCache[str];
	let newStr = '';
	for (const char of getSymbols(stripCombiningMarks(str))) {
		newStr += confusablesMap[char] || char;
	}
	removeCache[str] = newStr;
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


export { characters, stripCombiningMarks, getSymbols, removeLNP, confusablesMap, alphabetMap };
