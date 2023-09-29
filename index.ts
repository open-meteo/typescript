// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module/* , options */)
module.exports = require("./main.ts")

import { WeatherApi } from './com/openmeteo/weather-api'


async function test() {
    var params =  {
        latitude: [52.52, 48.1, 48.4],
        longitude: [13.41, 9.31, 8.5],
        hourly: ['temperature_2m', 'precipitation'],
        timezone: 'auto',
        current: ['temperature_2m','precipitation'],
        format: 'flatbuffers'
    }
    var response = await fetch("https://api.open-meteo.com/v1/forecast?"+ new URLSearchParams(params))
    console.log(response)

    let result = WeatherApi.getSizePrefixedRootAsWeatherApi(response.arrayBuffer)
    console.log(result.latitude)
}

test()