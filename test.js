const { characters } = require('./index');

function testForDuplicates() {
   const items = [];
   for (let i = 0; i < characters.length; i++) {
      const { alts, base } = characters[i];
      for (const char of alts) {
         if (items.includes(char)) {
            console.error(`${char} is duplicated.`);
         }
         items.push(char);
      }
   }
}

function print() {
   const items = [];
   for (let i = 0; i < characters.length; i++) {
      const { alts, base } = characters[i];
      console.log(`${base}: ${[...new Set(alts)].join('')}`);
   }
}

testForDuplicates();
