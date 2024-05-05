import { runScrapper } from './setup/index.mjs'

console.log('starting scrapping...')

const products = await runScrapper()

console.log(products)
