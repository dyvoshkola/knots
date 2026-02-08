import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'uk-UA',
  title: 'Knots',
  description: 'Бібліотека вузлів',

  // Для локального/самостійного перегляду
  base: '/',

  themeConfig: {
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Вузли', link: '/library/' }
    ],
    sidebar: [
      { text: 'Вступ', items: [
        { text: 'Про розділ', link: '/' }
      ]},
      { text: 'Бібліотека', items: [
        { text: 'Каталог вузлів', link: '/library/' }
      ]}
    ]
  }
})
