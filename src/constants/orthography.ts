import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'c',
  'ch',
  'e',
  'g',
  'h',
  'i',
  'm',
  'n',
  'o',
  'p',
  'pqu',
  'qu',
  'q'
  's',
  't',
  'u',
  'x',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
