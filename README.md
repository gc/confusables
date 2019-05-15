<p align="center">
<img src="https://img.shields.io/npm/v/confusables.svg?style=flat" alt="npm">
<img src="https://img.shields.io/badge/license-MIT-f1c40f.svg" alt="MIT">
<img src="https://img.badgesize.io/https://unpkg.com/confusables/dist/index.js?compression=gzip" alt="gzip size">
</p>

# Confusables

This library allows you to easily remove confusables from a string.

> Confusables is currently in early development. Anything may change at any time. The public API should not be considered stable until version 1.0.0.

## Installation

```
yarn add confusables

npm install confusables
```

## Usage

```js
const { remove, obfuscate } = require('confusables');

const weirdString = 'Ἢἕļľᦞ ш٥ṟｌᑰ! Hello World!';

const normalString = remove(weirdString);

console.log(normalString); // Hello World! Hello World!
```

## What are confusables?

>Confusable characters are those that may be confused with others (in some common UI fonts), such as the Latin letter "o" and the Greek letter omicron "ο". Fonts make a difference: for example, the Hebrew character "ס" looks confusingly similar to "o" in some fonts (such as Arial Hebrew), but not in others.

>[Source](https://unicode.org/cldr/utility/confusables.jsp)
