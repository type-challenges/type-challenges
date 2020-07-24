import lzs from 'lz-string'

// https://github.com/microsoft/TypeScript-Website/tree/v2/packages/playground
export function toPlaygroundUrl(
  code: string,
  config: Object = {},
  site = 'https://www.staging-typescript.org/play',
) {
  return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${v}`).join('&')}#code/${lzs.compressToEncodedURIComponent(code)}`
}
