const { characters } = require('./characters.js');

const diacriticsMap = {};
const alphabetMap = {};

for (let i = 0; i < characters.length; i++) {
   const { alts, base } = characters[i];
   alphabetMap[base] = alts;
   for (const char of alts) {
      diacriticsMap[char] = base;
   }
}

function clean(str) {
   let newStr = '';
   for (const char of str) {
      newStr += diacriticsMap[char.toLowerCase()] || diacriticsMap[char.toUpperCase()] || char;
   }
   return newStr;
}

function obfuscate(str) {
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

exports.characters = characters;
exports.diacriticsMap = diacriticsMap;
exports.alphabetMap = alphabetMap;
exports.clean = clean;
exports.obfuscate = obfuscate;
