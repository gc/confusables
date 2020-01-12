import { characters } from './characters';
import { clean, checkLNP } from './util';

/** The current cache of all the supported alphabet characters  */
export const alphabetMap = new Map<string, string[]>();

/** The current cache of all the supported confusable characters */
export const confusablesMap = new Map<string, string>();

/** A cache of removed characters for optimal memory performance */
export const removeCache = new Map<string, string>();

for (const [base, alts] of characters.entries()) {
	alphabetMap.set(base, [...alts]);

	for (const char of alts) {
		confusablesMap.set(char, base);
	}
}

/**
 * Removes confusable unicode characters from a string.
 * @param str The text to remove confusables from.
 */
export function remove(str: string) {
	const previous = removeCache.get(str);
	if (typeof previous === 'string') return previous;
	if (checkLNP(str)) return str;

	let newStr = '';

	for (const char of clean(str)) {
		newStr += confusablesMap.get(char) || char;
	}

	removeCache.set(str, newStr);

	return newStr;
}

/**
 * Randomly mixes up a string with random confusable characters.
 * @param str The text to obfuscate.
 */
export function obfuscate(str: string) {
	let newStr = '';

	for (const char of str) {
		const charMap = alphabetMap.get(char);
		newStr += charMap ? charMap[Math.floor(Math.random() * charMap.length)] : char;
	}

	return newStr;
}

export { characters, clean, checkLNP };
export default remove;
