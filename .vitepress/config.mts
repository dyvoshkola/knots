import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'uk-UA',
  title: 'Вузли',
  description: 'Розділ про практику вузлів і Теорію вузлів',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Огляд категорій', link: '/categories/' },
      {
        text: 'Категорії',
        items: [
          { text: 'Стопорні вузли', link: '/stopper/' },
          { text: 'Петлі', link: '/loops/' },
          { text: "З'єднувальні вузли", link: '/bends/' },
          { text: 'Захватні і кріпильні', link: '/hitches/' },
          { text: 'Рятувальні та спеціальні', link: '/rescue/' }
        ]
      },
      { text: 'Теорія вузлів', link: '/theory/' }
    ],
    sidebar: [
      {
        text: 'Огляд',
        items: [
          { text: 'Практика і теорія', link: '/' },
          { text: 'Основні вузли за категоріями', link: '/categories/' },
          { text: 'Теорія вузлів', link: '/theory/' }
        ]
      },
      {
        text: 'Категорії',
        items: [
          { text: 'Стопорні вузли', link: '/stopper/' },
          { text: 'Петлі', link: '/loops/' },
          { text: "З'єднувальні вузли", link: '/bends/' },
          { text: 'Захватні і кріпильні', link: '/hitches/' },
          { text: 'Рятувальні та спеціальні', link: '/rescue/' }
        ]
      }
    ]
  }
})
