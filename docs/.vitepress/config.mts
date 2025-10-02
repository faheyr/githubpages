import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "richard gitpages site",
  description: "demo of how github pages works in conjunction with vitepress. to demo documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/pagesinfo' }
      { text: 'API', link: '/api-examples' }
      { text: 'Examples', link: '/markdown-examples' }
      { text: 'Devtopberfest', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
          { text: 'Pagesinfo', link: '/pagesinfo' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
