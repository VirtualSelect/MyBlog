const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: '你好，我是Hohoo👋',
    tagline: '在这里我会记录日常和工作及学习过程中所遇到问题与解决方案，忙时学习，闲时读书，希望我的分享对你有所启发。',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/hohoo.ico',
    organizationName: 'Hohoo', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Hohoo's Blog",
                logo: {
                    alt: "Hohoo's Blog",
                    src: 'img/hohoo.jpg',
                },
                items: [
                    {
                        label: '模版内容',
                        position: 'right',
                        items: [
                            {
                                type: 'doc',
                                docId: 'intro',
                                label: '官方教程',
                            },
                            {
                                label: '官方博客',
                                to: '/blog',
                            },
                        ]
                    },
                    {
                        label: '归纳',
                        position: 'right',
                        items: [
                            {label: 'GitHub', to: 'https://github.com/VirtualSelect'},
                            {label: '博客', to: 'https://virtualselect.github.io'},
                            {label: '友链 宇宁', to: 'https://yn-wiki.com'},
                            {label: '友链 愧怍', to: 'https://kuizuo.cn'},
                        ],
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                        /*dropdownItemsAfter: [
                            {
                                to: 'https://my-site.com/help-us-translate',
                                label: 'Help us translate',
                            },
                        ]*/
                    },
                    {
                        type: 'search',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'Personal',
                        items: [
                            {
                                label: '博客',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/VirtualSelect',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Hohoo Blog. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            /*i18n: {
                defaultLocale: 'zh-CN',
                locales: ['en', 'zh-CN'],
                localeConfigs: {
                    en: {
                        htmlLang: 'en-GB',
                    },
                },
            },*/
        }),
});
