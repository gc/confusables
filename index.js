const { characters } = require('./characters.js');

let diacriticsMap = {};
let alphabetMap = {};

for (let i = 0; i < characters.length; i++) {
   const alts = characters[i].alts;
   const base = characters[i].base;
   alphabetMap[base] = alts;
   for (let j = 0; j < alts.length; j++) {
      diacriticsMap[alts[j]] = base;
   }
}

function clean(str) {
   let newStr = '';
   for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      newStr += diacriticsMap[char] || char;
   }
   return newStr;

   return str.replace(/[^\u0000-\u007e]/g, c => diacriticsMap[c] || c);
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
