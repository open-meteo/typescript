import { ByteBuffer } from 'flatbuffers';
import { WeatherApiResponse } from '@openmeteo/sdk/weather-api-response';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

async function fetchRetried(
  url: string,
  retries = 3,
  backoffFactor = 0.5,
  backoffMax = 2,
  fetchOptions: RequestInit = {}
): Promise<Response> {
  const statusToRetry = [500, 502, 504];
  const statusWithJsonError = [400, 429];
  let currentTry = 0;
  let response = await fetch(url, fetchOptions);

  while (statusToRetry.includes(response.status)) {
    currentTry++;
    if (currentTry >= retries) {
      throw new Error(response.statusText);
    }
    const sleepMs =
      Math.min(backoffFactor * 2 ** currentTry, backoffMax) * 1000;
    await sleep(sleepMs);
    response = await fetch(url, fetchOptions);
  }

  if (statusWithJsonError.includes(response.status)) {
    const json = await response.json();
    if ('reason' in json) {
      throw new Error((json as { reason: string }).reason);
    }
    throw new Error(response.statusText);
  }
  return response;
}

/**
 * Retrieve data from the Open-Meteo weather API
 *
 * @param {string} url Server and endpoint. E.g. "https://api.open-meteo.com/v1/forecast"
 * @param {any} params URL parameter as an object
 * @param {number} [retries=3] Number of retries in case of an server error
 * @param {number} [backoffFactor=0.2] Exponential backoff factor to increase wait time after each retry
 * @param {number} [backoffMax=2] Maximum wait time between retries
 * @param {RequestInit} [fetchOptions={}] Additional fetch options such as headers, signal, etc.
 * @returns {Promise<WeatherApiResponse[]>}
 */
async function fetchWeatherApi(
  url: string,
  params: any,
  retries = 3,
  backoffFactor = 0.2,
  backoffMax = 2,
  fetchOptions: RequestInit = {}
): Promise<WeatherApiResponse[]> {
  const urlParams = new URLSearchParams(params);
  urlParams.set('format', 'flatbuffers');
  const response = await fetchRetried(
    `${url}?${urlParams.toString()}`,
    retries,
    backoffFactor,
    backoffMax,
    fetchOptions
  );
  const fb = new ByteBuffer(new Uint8Array(await response.arrayBuffer()));

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

// Future endpoints
// - fetchElevationApi
// - fetchGeocodingApi

export { fetchWeatherApi };
