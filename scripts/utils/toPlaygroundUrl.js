import lzs from 'lz-string'

export function toPlaygroundUrl(
  code,
  config,
  site,
) {
  return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}#code/${lzs.compressToEncodedURIComponent(code)}`
}
