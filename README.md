# Open-Meteo API Typescript SDK

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

This is an API client to get weather data from the [Open-Meteo Weather API](https://open-meteo.com) in Typescript / Javascript.

Instead of using JSON, the API client uses FlatBuffers to transfer data. Encoding data in FlatBuffers is more efficient for long time-series data. The schema definition files can be found on [GitHub open-meteo/sdk](https://github.com/open-meteo/sdk).

Features:
- Simple access to weather data
- Get weather data for multiple locations in one call
- Automatic retry on error
- Reduced bandwidth and fast parsing using FlatBuffers and Zero Copy
- Type annotated

## Install

```bash
npm install openmeteo
```

## Usage

Note: The Open-Meteo [API documentation](https://open-meteo.com/en/docs) generates the required Typescript code automatically.

```ts
import { fetchWeatherApi } from 'openmeteo';

const params = {
    latitude: [52.54],
    longitude: [13.41],
    current: 'temperature_2m,weather_code,wind_speed_10m,wind_direction_10m',
    hourly: 'temperature_2m,precipitation',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min'
};
const url = 'https://api.open-meteo.com/v1/forecast';
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const current = response.current()!;
const hourly = response.hourly()!;
const daily = response.daily()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
    current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature: current.variables(0)!.value(), // Current is only 1 value, therefore `.value()`
        weatherCode: current.variables(1)!.value(),
        windSpeed: current.variables(2)!.value(),
        windDirection: current.variables(3)!.value()
    },
    hourly: {
        time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature: hourly.variables(0)!.valuesArray()!, // `.valuesArray()` get an array of floats
        precipitation: hourly.variables(1)!.valuesArray()!,
    },
    daily: {
        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        weatherCode: daily.variables(0)!.valuesArray()!,
        temperatureMax: daily.variables(1)!.valuesArray()!,
        temperatureMin: daily.variables(2)!.valuesArray()!,
    }
};

// `weatherData` now contains a simple structure with arrays for datetime and weather data
for (let i = 0; i < weatherData.daily.time.length; i++) {
  console.log(
    weatherData.daily.time[i].toISOString(), 
    weatherData.daily.weatherCode[i], 
    weatherData.daily.temperatureMax[i], 
    weatherData.daily.temperatureMin[i]
);
}
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
