import { Variable } from '@openmeteo/sdk/variable';
import { fetchWeatherApi } from '../src';

describe('openmeteo', () => {
  describe('client', () => {
    test('fetch_2_locations', async () => {
      // 2 location data, with hourly temp and precip
      global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 200,
          arrayBuffer: () =>
            Promise.resolve(
              new Uint8Array([
                116, 1, 0, 0, 32, 0, 0, 0, 28, 0, 28, 0, 24, 0, 20, 0, 16, 0,
                12, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 28, 0,
                0, 0, 36, 0, 0, 0, 0, 0, 0, 26, 0, 78, 109, 61, 0, 0, 112, 66,
                112, 102, 86, 65, 0, 0, 82, 66, 12, 0, 32, 0, 20, 0, 12, 0, 8,
                0, 4, 0, 12, 0, 0, 0, 28, 0, 0, 0, 16, 14, 0, 0, 128, 156, 201,
                100, 0, 0, 0, 0, 0, 75, 200, 100, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
                0, 0, 148, 0, 0, 0, 16, 0, 0, 0, 12, 0, 12, 0, 11, 0, 10, 0, 0,
                0, 4, 0, 12, 0, 0, 0, 8, 0, 0, 0, 0, 0, 32, 24, 24, 0, 0, 0,
                154, 153, 217, 63, 102, 102, 6, 64, 0, 0, 128, 63, 205, 204, 76,
                62, 205, 204, 204, 61, 0, 0, 128, 63, 102, 102, 38, 64, 205,
                204, 76, 64, 0, 0, 0, 64, 102, 102, 102, 63, 154, 153, 153, 62,
                205, 204, 44, 64, 154, 153, 153, 63, 205, 204, 76, 62, 0, 0, 0,
                0, 205, 204, 204, 61, 154, 153, 153, 62, 102, 102, 102, 63, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 16, 0, 16, 0, 15, 0, 11, 0, 0, 0, 4, 0, 0, 0, 12, 0, 16,
                0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 47, 24, 0, 0, 0, 104,
                145, 135, 65, 207, 247, 135, 65, 207, 247, 135, 65, 156, 196,
                134, 65, 104, 145, 133, 65, 207, 247, 133, 65, 207, 247, 135,
                65, 207, 247, 135, 65, 156, 196, 136, 65, 53, 94, 140, 65, 207,
                247, 145, 65, 53, 94, 144, 65, 156, 196, 144, 65, 104, 145, 151,
                65, 207, 247, 161, 65, 156, 196, 166, 65, 207, 247, 163, 65,
                104, 145, 145, 65, 53, 94, 144, 65, 2, 43, 137, 65, 53, 94, 134,
                65, 53, 94, 134, 65, 207, 247, 131, 65, 207, 247, 129, 65, 124,
                1, 0, 0, 32, 0, 0, 0, 28, 0, 36, 0, 32, 0, 28, 0, 24, 0, 20, 0,
                12, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 28, 0, 0, 0,
                44, 0, 0, 0, 0, 0, 0, 26, 1, 0, 0, 0, 0, 0, 0, 0, 0, 78, 237,
                60, 0, 0, 33, 68, 208, 204, 20, 65, 104, 102, 64, 66, 12, 0, 32,
                0, 20, 0, 12, 0, 8, 0, 4, 0, 12, 0, 0, 0, 28, 0, 0, 0, 16, 14,
                0, 0, 128, 156, 201, 100, 0, 0, 0, 0, 0, 75, 200, 100, 0, 0, 0,
                0, 0, 0, 0, 0, 2, 0, 0, 0, 148, 0, 0, 0, 16, 0, 0, 0, 12, 0, 12,
                0, 11, 0, 10, 0, 0, 0, 4, 0, 12, 0, 0, 0, 8, 0, 0, 0, 0, 0, 32,
                24, 24, 0, 0, 0, 154, 153, 153, 62, 0, 0, 0, 63, 154, 153, 153,
                62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 204, 204, 61, 0, 0,
                128, 63, 154, 153, 153, 63, 205, 204, 12, 64, 154, 153, 217, 63,
                51, 51, 179, 63, 154, 153, 153, 62, 205, 204, 76, 63, 0, 0, 0,
                64, 205, 204, 76, 64, 205, 204, 204, 62, 205, 204, 204, 61, 205,
                204, 204, 61, 0, 0, 0, 0, 205, 204, 204, 61, 205, 204, 204, 61,
                205, 204, 76, 62, 205, 204, 204, 61, 16, 0, 16, 0, 15, 0, 11, 0,
                0, 0, 4, 0, 0, 0, 12, 0, 16, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 1,
                2, 0, 0, 47, 24, 0, 0, 0, 180, 72, 134, 65, 26, 175, 132, 65,
                231, 123, 133, 65, 26, 175, 136, 65, 26, 175, 136, 65, 129, 21,
                137, 65, 129, 21, 137, 65, 129, 21, 131, 65, 180, 72, 132, 65,
                78, 226, 131, 65, 78, 226, 133, 65, 129, 21, 135, 65, 231, 123,
                143, 65, 231, 123, 151, 65, 26, 175, 142, 65, 129, 21, 145, 65,
                180, 72, 142, 65, 129, 21, 139, 65, 78, 226, 133, 65, 26, 175,
                128, 65, 206, 247, 118, 65, 2, 43, 110, 65, 155, 196, 103, 65,
                206, 247, 94, 65,
              ]).buffer
            ),
          json: () => Promise.resolve({ test: 100 }),
        })
      ) as jest.Mock;

      const params = {
        latitude: [52.54, 48.1, 48.4],
        longitude: [13.41, 9.31, 8.5],
        hourly: ['temperature_2m', 'precipitation'],
        start_date: '2023-08-01',
        end_date: '2023-08-01',
        format: 'flatbuffers',
      };
      const url = 'https://api.open-meteo.com/v1/forecast';
      const responses = await fetchWeatherApi(url, params);
      expect(responses).toHaveLength(2);
      expect(responses[0].latitude()).toBeCloseTo(52.5, 2);
      expect(responses[1].latitude()).toBeCloseTo(48.1, 2);
      const hourly = responses[0].hourly()!;

      const temperature_2m = hourly.variables(0)!;
      expect(temperature_2m.variable()).toBe(Variable.temperature);
      expect(temperature_2m.altitude()).toBe(2);

      //const hourly_series = [...Array(hourly.seriesLength()).keys()].map(i => hourly.series(i)!)
      //const temperature_2m = hourly_series.find(s => s.variable() == Variable.temperature)?.valuesArray()

      const temperature_2m_array = temperature_2m.valuesArray();
      expect(temperature_2m_array).toBeDefined();
      expect(temperature_2m_array).toHaveLength(24);
      expect(temperature_2m_array![0]).toBeCloseTo(16.9459991, 2);
    });
  });
});

describe('openmeteo', () => {
  describe('client', () => {
    test('test_error', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 400,
          json: () => Promise.resolve({ reason: 'Some error' }),
        })
      ) as jest.Mock;
      await expect(fetchWeatherApi('', {})).rejects.toThrow('Some error');
    });
  });
});

describe('openmeteo', () => {
  describe('client', () => {
    test('test_unknown_error', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 400,
          statusText: 'Other error',
          json: () => Promise.resolve({}),
        })
      ) as jest.Mock;
      await expect(fetchWeatherApi('', {})).rejects.toThrow('Other error');
    });
  });
});

describe('openmeteo', () => {
  describe('client', () => {
    test('test_retry', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          status: 500,
          statusText: 'Internal server error',
        })
      ) as jest.Mock;
      await expect(fetchWeatherApi('', {})).rejects.toThrow(
        'Internal server error'
      );
      expect(fetch).toHaveBeenCalledTimes(3);
    });
  });
});
