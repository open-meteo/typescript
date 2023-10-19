import { ByteBuffer } from 'flatbuffers';
import { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response';

async function test_api_fetch() {
  const params = {
    latitude: '52.52,48.1,48.4',
    longitude: '13.41,9.31,8.5',
    hourly: 'temperature_2m,precipitation,windspeed_10m',
    timezone: 'auto',
    current: 'temperature_2m,precipitation',
    format: 'flatbuffers',
  };
  const urlParams = new URLSearchParams(params).toString();
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${urlParams}`
  );
  const bb = await response.arrayBuffer();
  const fb = new ByteBuffer(new Uint8Array(bb));

  const result = WeatherApiResponse.getSizePrefixedRootAsWeatherApiResponse(fb);
  return result;
}

export { test_api_fetch, WeatherApiResponse };
// const myPackage = (taco = ''): string => `${taco} from my package`;
