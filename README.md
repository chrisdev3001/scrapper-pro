## Scrapper Pro

This is a simple scrapping project that gathers product information from various websites 
and returns the collected data in JSON format. 
Currently, the project is designed to extract information from two online stores: 
Amazon and Falabella.

## Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/chrisdev3001/scrapper-pro.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run it

```bash
npm start
```

### 4. See results

```bash
{
    amazon: [...],
    falabella: [...]
}
```

### Customization

Modify stores.mjs, set the selectors according to your website to scrap and try it!

```javascript
// stores.mjs
export const stores = [
  {
    name: 'amazon',
    url: 'https://www.amazon.com/s?k=ps5&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3BI8KJRYNPN8C&sprefix=ps5%2Caps%2C180&ref=nb_sb_noss_1',
    selectors: {
      card: '.s-card-container',
      title: 'h2',
      img: 'img',
      price: '.a-price .a-offscreen',
      link: '.a-link-normal'
    }
  },
  {
    name: 'falabella',
    url: 'https://www.falabella.com/falabella-cl/collection/ps5',
    selectors: {
      card: '.grid-pod',
      title: '.subTitle-rebrand',
      img: 'img',
      price: '.copy10',
      link: '.pod-link'
    }
  }
]

```

All Contributions are welcome! Feel free to open an issue or submit a pull request if you have any suggestions or improvements.

## Authors

- [@chrisdev3001](https://www.github.com/chrisdev3001)
