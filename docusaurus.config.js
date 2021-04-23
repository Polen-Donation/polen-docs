const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
const spec = fs.readFileSync('./polen.yaml', 'utf-8');

module.exports = {
  title: 'Polen API',
  tagline: 'A sua API para doações',
  url: 'https://Polen-Donation.github.io',
  baseUrl: '/polen-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Polen-Donation', // Usually your GitHub org/user name.
  projectName: 'polen-docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'Polen API',
      logo: {
        alt: 'Logo do Polen',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'api-reference',
          label: 'API',
          position: 'left'
        },
        {
          href: 'https://polen.com.br/',
          label: 'Nosso Site',
          position: 'right'
        },
        {
          href: 'https://github.com/Polen-Donation',
          label: 'GitHub',
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
              label: 'Introdução',
              to: 'docs/',
            },
            {
              label: 'Widgets',
              to: 'docs/widgets/',
            },
            {
              label: 'Suporte',
              to: 'docs/suporte/',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/sigaopolen/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/opolen/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/o-polen/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UChyN5Aps8nFLyqTtVf-TMtA',
            }
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Blog',
              to: 'http://blog.opolen.com.br/?__hstc=260778002.a05414c38de10552571f7dc1e437d52d.1591039181164.1593089703732.1593093583542.34&__hssc=260778002.2.1593093583542&__hsfp=3514408592',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Polen-Donation/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Polen.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Polen-Donation/polen-docs/pulls',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    apiSpec: YAML.parse(spec)
  },
  plugins: [path.resolve(__dirname, 'redoc-plugin')],
};
