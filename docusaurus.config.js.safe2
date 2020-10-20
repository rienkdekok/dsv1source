module.exports = {
  title: 'Digital Transformation',
  tagline: 'Overview and Insights',
  url: 'https://rienkdekok.github.io',
  baseUrl: '/dsv1source/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'rienkdekok', // Usually your GitHub org/user name.
  projectName: 'dsv1source', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'Digital Transformation',
      logo: {
        alt: 'dot',
        src: 'img/dot.png',
      },
      items: [
	{
           to: 'docs/introduction',
           activeBasePath: 'docs', //original method
	   position: 'left',
	   label: 'Introduction',
	},
  	{
          to: 'docs/about',
          activeBasePath: 'docs',
          position: 'left',
	  label: 'About',
       },
  	{
          to: 'docs/ruimop/ruimop',
          activeBasePath: 'docs/',
          position: 'right',
	  label: 'Ruimop',
       },
//
//        {to: 'blog', label: 'Blog', position: 'left'},
//        {
//         href: 'https://github.com/facebook/docusaurus',
//          label: 'GitHub',
//          position: 'right',
//        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '.',
//          items: [
//           {
//              label: 'Style Guide',
//              to: 'docs/',
//            },
//            {
//              label: 'Second Doc',
//              to: 'docs/doc2/',
//            },
 //         ],
        },
//        {
//         title: 'Community',
//          items: [
//            {
//              label: 'Stack Overflow',
//              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//            },
//            {
//              label: 'Discord',
//              href: 'https://discordapp.com/invite/docusaurus',
//            },
//            {
//              label: 'Twitter',
//              href: 'https://twitter.com/docusaurus',
//           },
//          ],
//        },
//
//Right
//        {
//          title: 'More',
//          items: [
//            {
//              label: 'Blog',
//              to: 'blog',
//            },
//            {
//              label: 'GitHub',
//              href: 'https://github.com/facebook/docusaurus',
//            },
 //         ],
//        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
       docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
//          editUrl:
//            'https://rienkdekok.github.io/dsv1source/edit/documentation/website/',
        },
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          editUrl:
//            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
