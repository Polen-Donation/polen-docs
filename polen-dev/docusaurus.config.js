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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
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
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
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
