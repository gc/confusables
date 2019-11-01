<p align="center">
<img src="https://img.shields.io/npm/v/confusables.svg?style=flat" alt="npm">
<img src="https://img.shields.io/badge/license-MIT-f1c40f.svg" alt="MIT">
<img src="https://img.badgesize.io/https://unpkg.com/confusables/dist/index.js?compression=gzip" alt="gzip size">
</p>

# Confusables

This library allows you to easily remove confusables from a string, into normal english characters.

Try it out: https://confusables.netlify.com/

## Installation

```
yarn add confusables

npm install confusables
```

## Usage

`const { remove } = require('confusables');`
`import { remove } = from 'confusables';`

```js
remove('Ἢἕļľᦞ ш٥ṟｌᑰ! Hello World!'); // => Hello World! Hello World!
remove('Iлｔèｒｎåｔïｏｎɑｌíƶａｔïǫԉ'); // => Internationalization
```

## What are confusables?

> Confusable characters are those that may be confused with others (in some common UI fonts), such as the Latin letter "o" and the Greek letter omicron "ο". Fonts make a difference: for example, the Hebrew character "ס" looks confusingly similar to "o" in some fonts (such as Arial Hebrew), but not in others.

> [Source](https://unicode.org/cldr/utility/confusables.jsp)
