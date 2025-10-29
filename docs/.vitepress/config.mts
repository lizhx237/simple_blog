import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Simple Blog",
  description: "My Blog Built By VitePress",
  // 为 GitHub Pages 项目站点设置 base（注意首尾都要有斜杠）
  base: '/simple_blog/',
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about-me' }
    ],

    sidebar: [
      {
        text: 'Notes',
        items: [
          { text: '关于凸优化', link: '/optimization' },
          { text: '数图', link: '/image-processing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
