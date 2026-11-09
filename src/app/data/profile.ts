export type SocialType = 'github' | 'linkedin' | 'x' | 'instagram' | 'discord';

export interface SocialLink {
  name: string;
  handle: string;
  /** Profile link. Leave it out for networks without public links (then `copy` is used). */
  url?: string;
  /** Text copied to the clipboard when there is no `url` (e.g. a Discord username). */
  copy?: string;
  type: SocialType;
}

/** Single source of truth for personal info used across the site. */
export const PROFILE = {
  brand: 'Elverovski',
  email: 'contact@elverovski.com',
  /** CV page (e.g. 'cv.html'). Empty = the CV buttons stay hidden. */
  cv: '',
  /**
   * Web3Forms access key (free, https://web3forms.com): messages from the contact form
   * arrive straight in your inbox. It is meant to be public. Empty = the form falls back
   * to opening the visitor's email app (mailto).
   */
  web3formsKey: 'b0beb228-2930-428d-8bc7-f5ae834cede3',
  /** Order matters: in Contact the last one takes the full row when the count is odd. */
  socials: <SocialLink[]>[
    {
      name: 'GitHub',
      handle: '@Elverovski',
      url: 'https://github.com/Elverovski',
      type: 'github',
    },
    {
      name: 'X',
      handle: '@elverovski',
      url: 'https://x.com/elverovski',
      type: 'x',
    },
    {
      name: 'Discord',
      handle: 'elverovski',
      copy: 'elverovski',
      type: 'discord',
    },
  ],
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
