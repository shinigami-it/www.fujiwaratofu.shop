import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Apply',
      href: '/apply',
    },
    {
      text: 'Tournaments',
      links: [
        {
          text: 'Circuit Racing',
          href: getPermalink('/tournaments/circuit'),
        },
        {
          text: 'Drifting',
          href: getPermalink('/tournaments/drifting'),
        },
        {
          text: 'Endurance Racing',
          href: getPermalink('/tournaments/endurance'),
        },
        {
          text: 'Rally Racing',
          href: getPermalink('/tournaments/rally'),
        },
        {
          text: 'Touge Racing',
          href: getPermalink('/tournaments/touge'),
        },
      ],
    },
    {
      text: 'Calendar',
      href: '/calendar',
    },
    {
      text: 'About Us',
      href: '/about',
    },
    {
      text: 'Donate',
      href: '/donate',
    },
  ],
  actions: [{ text: 'Discord', href: 'https://discord.gg/uY7NxaCKxb', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: 'Tournaments',
      links: [
        { text: 'Circuit', href: '/landing/circuit' },
        { text: 'Endurance', href: '/landing/endurance' },
        { text: 'Drifting', href: '/landing/drifting' },
        { text: 'Rally', href: '/landing/rally' },
        { text: 'Touge', href: '/landing/touge' },
      ],
    },
    {
      title: 'FTS',
      links: [
        { text: 'Discord', href: 'https://discord.gg/uY7NxaCKxb' },
        { text: 'About', href: '/about' },
        { text: 'Donate', href: '/landing/donate' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/uY7NxaCKxb' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/fujiwaratofuushop/' },
    { ariaLabel: 'Twitch', icon: 'tabler:brand-twitch', href: 'https://twitch.tv/dashund007' },
  ],
  footNote: `
    <a href="#"><img id="logo" src="https://i.imgur.com/le0aT56.png" style="width: 32px; margin-right: 8px; display: inline-block;"></a>
    Made by FTS · All rights reserved.
  `,
};
