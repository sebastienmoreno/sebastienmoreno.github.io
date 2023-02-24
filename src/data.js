import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Articles',
      links: [
        {
          text: 'Tags',
          href: getPermalink('/tags'),
        },
        {
          text: 'Tutorials',
          href: getPermalink('/category/tutorials'),
        },
        {
          text: 'Tools',
          href: getPermalink('/category/tools'),
        },
      ],
    },
    {
      text: 'A propos',
      href: getPermalink('/a-propos'),
    },
    
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/sebastienmoreno' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/sebastienmoreno' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sebastienmoreno' },
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Articles',
      links: [
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Contenu',
      links: [
        { text: 'Tags', href: '/tags' },
        { text: 'Tutorials', href: '/category/tutorials' },
        { text: 'Tools', href: '/category/tools' },
      ],
    },
    {
      title: 'A propos',
      links: [
        { text: 'Qui suis-je?', href: '/a-propos' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/sebastienmoreno' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/sebastienmoreno' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/sebastienmoreno' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Theme Astrowind de <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a>
  `,
};
