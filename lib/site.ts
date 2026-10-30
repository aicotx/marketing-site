export const site = {
  name: 'The AI Company of Texas',
  legalName: 'AICOTX LLC',
  url: 'https://aicotx.com',
  email: 'hello@aicotx.com',
  tagline: 'Helping businesses wrangle real value out of AI',
  description:
    'The AI Company of Texas is an agency that helps businesses wrangle real value out of AI',
  social: {
    linkedin: 'https://www.linkedin.com/company/the-ai-company-of-texas/',
  },
} as const;

/** Primary navigation, in order. The header appends a Contact mailto link. */
export const nav = [
  { href: '/ladder/', label: 'The Ladder' },
  { href: '/services/', label: 'Services' },
  { href: '/products/', label: 'Products' },
  { href: '/approach/', label: 'Approach' },
  { href: '/company/', label: 'Company' },
] as const;
