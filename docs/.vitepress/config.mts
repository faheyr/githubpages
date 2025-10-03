import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "richard gitpages site",

  description: "demo of how github pages works",
  
  base: '/githubpages/', // Required for GitHub Pages

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: 'pepsico.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/githubpages/pagesinfo' },
      { text: 'API', link: '/vitepress-samples/api-examples' },
      { text: 'Examples', link: '/vitepress-samples/markdown-examples' },
      { text: 'Devtoberfest', link: '/devtober2025/devtober2025' }
    ],

    sidebar: [
      {
        text: 'VitePress Examples',
        items: [
          { text: 'Markdown Examples', link: '/vitepress-samples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/vitepress-samples/api-examples' },
          { text: 'Pages Info', link: '/githubpages/pagesinfo' }
        ]
      },
      {
        text: 'Devtoberfest 2025',
        items: [
          { text: 'Overview', link: '/devtober2025/devtober2025' },
          { text: 'Databricks', link: '/devtober2025/databricks' },
          { text: 'HANA', link: '/devtober2025/hana' },
          { text: 'Joule', link: '/devtober2025/joule' }
        ]
      },
      {
        text: 'HANA Content',
        items: [
          { text: 'HANA Cloud', link: '/hana/hana-cloud' },
          { text: 'SDI & SDA', link: '/hana/sdi-sda' }
        ]
      },
      {
        text: 'CAP Development',
        items: [
          { text: 'BTP CAP', link: '/cap/cap/btp-cap' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/faheyr/githubpages' }
    ]
  }
})
