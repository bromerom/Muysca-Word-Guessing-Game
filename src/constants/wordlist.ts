import { CONFIG } from './config'

export const WORDS = [
  'chuta',
  'paba',
  'uaia',
  'caca',
  'uexica',
  'gyi',
  'uecha',
  'uaque',
  'tyba',
  'psihipqua',
  'fuhucha',
  'cha',
  'muysca',
  'pquyquy',
  'tyhyba',
  'goca',
  'pquaca',
  'pquaqueba',
  'chispqua',
  'yta',
  'ine',
  'gepqua',
  'sica',
  'upqua',
  'cuhupqua',
  'quyhyca',
  'uba',
  'coca',
  'zysquy',
  'guquyn',
  'gyquyne',
  'ybza',
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
