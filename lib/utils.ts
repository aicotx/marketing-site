import { createCn } from "cn/config";

// Teach the class merger about the site's type-scale tokens (see --text-* in
// app/globals.css) so `text-title` is not treated as a colour that conflicts
// with `text-ink`.
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display", "headline", "band", "title", "subtitle", "essay", "entry",
            "lede", "page-lede", "band-body", "body-lg", "kicker", "label", "meta",
          ],
        },
      ],
    },
  },
});
