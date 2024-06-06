import { CONFIG } from './config'

export const VALIDGUESSES = [
   'cuhuca',
  'quycaua',
  'fuhuza',
  'quychyquy',
  'uexica',
  'hycata',
  'zihiba',
  'uahaia',
  'tybacha',
  'sihipqua',
  'fuhucha',
  'hichupqua',
  'muysca',
  'quihicha',
  'tyhyba',
  'suhuza',
  'tyhyquy',
  'pquaqueba',
  'chispqua',
  'cuhupqua',
  'hycata',
  'chihiza',
  'chihica',
  'upquachie',
  'cuhupquy',
  'quyhyca',
  'supquaquyn',
  'sahaoa',
  'quyhyty',
  'sotupqua',
  'gyquyne',
  'chitupqua',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
