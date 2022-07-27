const config = {
  title: '🎂Bun Design',
  description: '一个 Vue3 组件库',
  themeConfig: {
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Bun Design'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/components/icon', activeMatch: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quieStart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [{ text: 'Icon', link: '/components/icon' }]
        },
        {
          text: '导航',
          items: [{ text: 'Icon', link: '/components/icon' }]
        },
        {
          text: '反馈',
          items: [{ text: 'Icon', link: '/components/icon' }]
        },
        {
          text: '数据录入',
          items: [{ text: 'Icon', link: '/components/icon' }]
        },
        {
          text: '数据展示',
          items: [{ text: 'Icon', link: '/components/icon' }]
        },
        {
          text: '布局',
          items: [{ text: 'Icon', link: '/components/icon' }]
        }
      ]
    }
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    config: md => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  }
}

export default config
