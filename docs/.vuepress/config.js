const { nav } = require('./config/nav')

module.exports = {
    title: '蜗牛先生',
    description: '学习文档',
    head: [
        ['link', { rel: 'icon', href: '/icon.jpg' }]
    ],
    themeConfig: {
        logo: '/icon.jpg',
        nav,
    }
}
