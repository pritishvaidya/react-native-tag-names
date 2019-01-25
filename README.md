# react-native-tag-names [![Build Status](https://travis-ci.com/pritishvaidya/react-native-tag-names.svg?branch=master)](https://travis-ci.com/pritishvaidya/react-native-tag-names) [![Maintainability](https://api.codeclimate.com/v1/badges/ce315d506c9864c0180c/maintainability)](https://codeclimate.com/github/pritishvaidya/react-native-tag-names/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ce315d506c9864c0180c/test_coverage)](https://codeclimate.com/github/pritishvaidya/react-native-tag-names/test_coverage) <a href="https://github.com/pritishvaidya/react-native-tag-names/blob/master/README.md"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>

> List of standard React Native Tags

Includes React Native tags list JSON files.

## Install

```
$ npm i react-native-tag-names --save
```


## Usage

```js
const RNTags = require('react-native-tag-names');

console.log(RNTags);
//=> ["DrawerLayoutAndroid", "ImageBackground", "InputAccessoryView", ...]
```

Void (self-closing) tags:

```js
const voidRNTags = require('react-native-tag-names/void');

console.log(voidRNTags);
//=> ["ActivityIndicator", "Button", "Checkbox",, ...]
```


## License

MIT © [Pritish Vaidya](https://pritishvaidya.com)
