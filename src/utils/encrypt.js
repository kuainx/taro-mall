import JSEncrypt from 'jsencrypt'

const publicKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFYvmTuDrKdSFWHyUpcb1HadIE\n' +
  'U/6MlchW18kSxE61eCmxC6tbL08n+dS20C/eOVwKpvH/1K0E34wcNtajoQgWPjFG\n' +
  'RKKceDbw36/M5P+A1fKMZVRKleb/YIIkHQmB7Gs09acWKpSGfcYzeY/uAwoWBTOr\n' +
  '1z7ylmdMzg+Aeub9SQIDAQAB'

export function encrypt(data) {
  const enc = new JSEncrypt()
  enc.setPublicKey(publicKey)
  return enc.encrypt(data)
}
