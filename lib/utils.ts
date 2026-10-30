import { createCn } from 'cn/config';

// Teach the class merger about the site's type-scale tokens (see --text-* in
// app/globals.css) so `text-h2` is not treated as a colour that conflicts
// with `text-ink`.
export const cn = createCn({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'h1',
            'h2',
            'h2-band',
            'h3',
            'h3-sm',
            'p',
            'p-sm',
            'fine',
            'li',
            'tight',
            'link',
            'caption',
            'ui',
            'button',
            'button-sm',
          ],
        },
      ],
    },
  },
});
