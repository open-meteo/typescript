# Open-Meteo API Typescript SDK

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> My awesome module

## Install

```bash
npm install openmeteo
```

## Usage

```ts
import { openmeteo } from 'openmeteo';

openmeteo('hello');
//=> 'hello from my package'
```

## API

### myPackage(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.


Notes:
flatc -o src/ --ts ~/Documents/open-meteo/format/*.fbs

[build-img]:https://github.com/open-meteo/typescript/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/open-meteo/typescript/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/openmeteo
[downloads-url]:https://www.npmtrends.com/openmeteo
[npm-img]:https://img.shields.io/npm/v/openmeteo
[npm-url]:https://www.npmjs.com/package/openmeteo
[issues-img]:https://img.shields.io/github/issues/open-meteo/typescript
[issues-url]:https://github.com/open-meteo/typescript/issues
[codecov-img]:https://codecov.io/gh/open-meteo/typescript/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/open-meteo/typescript
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
