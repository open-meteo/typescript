# Open-Meteo API Typescript SDK

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

This ia an API client to get weather data from the [Open-Meteo Weather API](https://open-meteo.com) in Typescript / Javascript. 

Instead of using JSON, the API client uses FlatBuffers to transfer data. Encoding data in FlatBuffers is more efficient for long time-series data. The schema definition files can be found on [GitHub open-meteo/sdk](https://github.com/open-meteo/sdk).

## Install

```bash
npm install openmeteo
```

## Usage

```ts
import { fetchWeatherApi } from 'openmeteo';

const params = {
    latitude: [52.54],
    longitude: [13.41],
    hourly: ['temperature_2m', 'precipitation'],
};
const url = 'https://api.open-meteo.com/v1/forecast';
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

const hourly = response.hourly()!;
const temperature_2m = hourly.variables(0)!.valuesArray();
const precipitation = hourly.variables(1)!.valuesArray();
```


[build-img]:https://github.com/open-meteo/typescript/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/open-meteo/typescript/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/openmeteo
[downloads-url]:https://www.npmtrends.com/openmeteo
[npm-img]:https://img.shields.io/npm/v/openmeteo
[npm-url]:https://www.npmjs.com/package/openmeteo
[issues-img]:https://img.shields.io/github/issues/open-meteo/typescript
[issues-url]:https://github.com/open-meteo/typescript/issues
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
