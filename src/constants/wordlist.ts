import { CONFIG } from './config'

export const WORDS = [
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
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
