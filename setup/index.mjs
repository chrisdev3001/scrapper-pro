import { chromium } from 'playwright'
import { stores } from './stores.mjs'

export async function runScrapper() {
  const browser = await chromium.launch({ headless: true })  

  let results = {}

  await Promise.all(
    stores.map(async (store) => {
      const { name, url, selectors } = store
      const page = await browser.newPage()

      await page.goto(url)

      results[name] = await page.$$eval(
        selectors.card,
        (elements, selectors) =>
          elements.map((el) => {
            const title = el.querySelector(selectors.title)?.innerText
            const price = el.querySelector(selectors.price)?.innerText

            if (!title || !price) return null

            const image = el.querySelector(selectors.img)?.getAttribute('src') ?? ''
            const link = el.querySelector(selectors.link)?.getAttribute('href') ?? ''

            return { title, image, price, link }
          }).filter(result => result !== null),
        selectors
      )

      await page.close()
    })
  )

  await browser.close()
  return results
}
