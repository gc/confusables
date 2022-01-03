<p align="center">
<img src="https://img.shields.io/npm/v/confusables.svg?style=flat" alt="npm">
<img src="https://img.shields.io/badge/license-MIT-f1c40f.svg" alt="MIT">
<img src="https://img.badgesize.io/https://unpkg.com/confusables/dist/index.js?compression=gzip" alt="gzip size">
</p>

# Confusables

This library allows you to replace confusables in a string with their lookalike English character. 

Try it out: https://confusables.netlify.com/

## Purpose

When you need to filter/check *English* text and want any characters that look very similar to English characters, to be converted into those English characters. It does not support other languages - it's not possible to support other languages whilst remaining very practical/effective at normalizing for English.

The main purpose is for filtering profanity: users can easily bypass most filters by changing "fuck" to "fück", this stops that.

## Installation

```
yarn add confusables

npm install confusables
```

## Usage

### Removing confusables

```ts
import remove from 'confusables'; 

remove('Ἢἕļľᦞ ш٥ṟｌᑰ! Hello World!'); // => Hello World! Hello World!
remove('Iлｔèｒｎåｔïｏｎɑｌíƶａｔïǫԉ'); // => Internationalization
```

### Injecting random confusables

```ts
import { obfuscate } from 'confusables'; // with ES modules

obfuscate('Hello World!'); // => Ḣé𝑙ŀ𝟶 Ꮤᴑ𝖗łᏧ
obfuscate('Internationalization'); // => ᶦṅᵗᧉ𝘳𝓃ȧťί𝙾ቢค𝞲ἱƶ𝜶ナἰøŉ
```
