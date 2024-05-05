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