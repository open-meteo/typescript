import { ByteBuffer } from 'flatbuffers';
import { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response';

async function weather_api(
  url: string,
  params: any
): Promise<WeatherApiResponse[]> {
  const urlParams = new URLSearchParams(params);
  urlParams.set('format', 'flatbuffers');
  const response = await fetch(`${url}?${urlParams.toString()}`);
  const bb = await response.arrayBuffer();
  const fb = new ByteBuffer(new Uint8Array(bb));

  // TODO: retry, error handling

  const results: WeatherApiResponse[] = [];
  let pos = 0;
  while (pos < fb.capacity()) {
    fb.setPosition(pos);
    const len = fb.readInt32(fb.position());
    results.push(
      WeatherApiResponse.getSizePrefixedRootAsWeatherApiResponse(fb)
    );
    pos += len + 4;
  }
  return results;
}

export { weather_api };
