import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "richard gitpages site",

  description: "demo of how github pages works",
  base: '/githubpages/', // Required for GitHub Pages
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/pagesinfo' },
      { text: 'API', link: '/api-examples' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Devtoberfest', link: '/devtober2025' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Pages Info', link: '/pagesinfo' },
          { text: 'Devtoberfest 2025', link: '/devtober2025' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
