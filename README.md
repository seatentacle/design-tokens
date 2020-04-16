# SeaTentacle Design Tokens

[![GitHub license](https://img.shields.io/github/license/seatentacle/design-tokens?style=flat-square)](https://github.com/seatentacle/design-tokens/blob/master/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@seatentacle/design-tokens?style=flat-square)](https://www.npmjs.com/package/@seatentacle/design-tokens)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Design tokens are a set of visual design attributes needed to create custom themes. It should be used instead literal values such as background colors, font size, etc.

## Installation

Run the npm command to add the package to your project.

```sh
npm i --save @seatentacle/design-tokens
```

## Usage

The first step is to add the package import to the file where you want to use design tokens.

To use standard tokens, just copy this line to the top of your file.

```js
import { defaultTokens } from '@seatentacle/design-tokens'
```

You can call the token you need by simply typing `defaultTokens` and using dot-notation, continue typing the name of the desired token, for example: `defaultTokens.backgroundButtonInfo`.

## Format

Tokens are wratten in JavaScript and primarily intended for use with `css-in-js` libraries such as [styled-components](https://styled-components.com). Also, for the convenience of using tokens in TypeScript, the package contains the declaration files `.d.ts`.

## License

The code is licensed under [MIT](https://github.com/seatentacle/design-tokens/blob/master/LICENSE)
