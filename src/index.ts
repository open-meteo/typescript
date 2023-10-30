import { ByteBuffer } from 'flatbuffers';
import { ApiResponse } from '@openmeteo/sdk/api-response';

async function weather_api(
  url: string,
  params: any
): Promise<ApiResponse[]> {
  const urlParams = new URLSearchParams(params);
  urlParams.set('format', 'flatbuffers');
  console.log(`${url}?${urlParams.toString()}`);
  const response = await fetch(`${url}?${urlParams.toString()}`);
  const bb = await response.arrayBuffer();
  const fb = new ByteBuffer(new Uint8Array(bb));

  // TODO: retry, error handling

  const results: ApiResponse[] = [];
  let pos = 0;
  while (pos < fb.capacity()) {
    fb.setPosition(pos);
    const len = fb.readInt32(fb.position());
    results.push(
      ApiResponse.getSizePrefixedRootAsApiResponse(fb)
    );
    pos += len + 4;
  }
  return results;
}

export { weather_api };
