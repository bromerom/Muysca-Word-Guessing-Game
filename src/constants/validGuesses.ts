import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
