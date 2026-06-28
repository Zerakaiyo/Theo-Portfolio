const yt = (url) => {
  const short = url.match(/youtu\.be\/([^?]+)/)?.[1];
  const shorts = url.match(/shorts\/([^?]+)/)?.[1];
  const watch = url.match(/[?&]v=([^&]+)/)?.[1];
  const id = short || shorts || watch || url;
  return {
    id,
    url,
    embed: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`,
    thumb: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  };
};

const make = (title, url, role) => ({ title, role, ...yt(url) });

const fashion = [
  make('State of Still {PT.2}', 'https://youtu.be/kfePi4RKuxQ', 'DOP / EDIT'),
  make('Like this Unseen PT.2', 'https://youtu.be/c98LbG21208', 'DOP / EDIT'),
  make('Era 2 Era PT.2', 'https://youtu.be/Sm0koJQx6IM', 'DOP / EDIT'),
  make('Du Deurre - Final V', 'https://youtu.be/QRmKW-pn_08', 'DOP / EDIT'),
  make('RGB {PT.1}', 'https://youtu.be/ZSynkkXLlxw', 'DOP / EDIT'),
  make('State of Still {PT.1}', 'https://youtu.be/EXvXXvyqQHI', 'DOP / EDIT'),
  make('Can I Entertain {2}', 'https://youtu.be/U5Q393xIlYo', 'DOP / EDIT'),
  make('Arop Akol', 'https://youtu.be/Gcel7y6SwC8', 'DOP / EDIT'),
  make('Like this Unseen (Handycam)', 'https://youtu.be/IelTKU7Jt64', 'DOP / EDIT'),
  make('Outside The Circle - BTS', 'https://youtu.be/NiyzYN7hRy0', 'DOP / EDIT'),
  make('Outside The Circle - Timothy', 'https://youtu.be/SbqZrTf_zdk', 'DOP / EDIT'),
  make('Like this Unseen PT.1', 'https://youtu.be/p1rsAbMFGWg', 'DOP / EDIT'),
  make('Victoria Paulsen', 'https://youtu.be/hBweYq9dDwc', 'DOP / EDIT'),
  make('Era 2 Era PT.1', 'https://youtu.be/ysFOeBxdC1o', 'DOP / EDIT'),
  make('RGB {PT.2}', 'https://youtu.be/ve3-eI6Z6Ao', 'EDIT'),
  make('Taste of Time', 'https://youtube.com/shorts/V6_CGFiYG3g', 'EDIT'),
];

const assisting = [
  make("Jorja Smith - What's Done Is Done", 'https://youtu.be/hbDcfEhaQBc', 'SPARK TRAINEE'),
  make('Jackets D1 30s DG Branded', 'https://youtu.be/h6jLvsoj9QA', 'ASSISTANT CAMERA'),
  make('Wet DG 15s Grade', 'https://youtu.be/ikikMSwz_e8', 'ASSISTANT CAMERA'),
  make('Jackets D2 30s DG Branded', 'https://youtu.be/BJtMvYvdvAo', 'ASSISTANT CAMERA'),
  make('Wind DG 15s Grade', 'https://youtu.be/WKjmKVB2cww', 'ASSISTANT CAMERA'),
  make('SS25 Library Dual 30sec Film Branded', 'https://youtu.be/Ycxsyg-7OBc', 'ASSISTANT CAMERA'),
  make('Fleece 15s DG Branded', 'https://youtu.be/gpfnChGZqwU', 'ASSISTANT CAMERA'),
  make('SS25 Regency Dual 30sec Film Branded', 'https://youtu.be/4jrUUqBDl_w', 'ASSISTANT CAMERA'),
];

const music = [
  make('Take A Touch - Videography', 'https://youtu.be/vLNXrpbxXfo', 'DOP / PHOTOGRAPHY'),
  make('Stills for Music Video Part 1', 'https://youtu.be/-YmuOT6-HPk', 'ASSISTANT CAMERA / PHOTOGRAPHY'),
  make('Stills for Music Video Part 2', 'https://youtu.be/Yi-l2c1e2TQ', 'ASSISTANT CAMERA / PHOTOGRAPHY'),
];

const socials = [
  make('Victoria Paulsen', 'https://youtube.com/shorts/pECPaUMgje8', 'DOP / EDIT'),
  make('Victoria Paulsen 02', 'https://youtube.com/shorts/FOYU9u3zYK8', 'DOP / EDIT'),
  make('STORM XT52', 'https://youtube.com/shorts/fz9okQQBOiw', 'DOP / EDIT'),
  make('C0044', 'https://youtube.com/shorts/xDp_n0XhJSY', 'DOP / EDIT'),
  make('EASYRIG-BS_DB', 'https://youtube.com/shorts/3E0GByLjdS8', 'DOP / EDIT'),
  make('Take A Touch - Videography', 'https://youtube.com/shorts/9W0G7LrQ_sM', 'EDIT'),
  make('Take A Touch Snippet B', 'https://youtube.com/shorts/fwQKDnmpJP8', 'EDIT'),
  make('Take A Touch Out Soon B', 'https://youtube.com/shorts/7PorucLQXTI', 'EDIT'),
  make('CARE 4 U - ELEAZAR', 'https://youtube.com/shorts/D7lhjyPEzOc', 'DOP / EDIT'),
  make('CARE 4 U - ELEAZAR', 'https://youtube.com/shorts/BG_RcfIW-Lw', 'DOP / EDIT'),
  make('CARE 4 U - ELEAZAR', 'https://youtube.com/shorts/iXBCaboGVCk', 'DOP / EDIT'),
];

const events = [
  make('Event Coverage / Highlights', 'https://youtu.be/kXW4jU5tCWU', 'DOP / EDIT'),
  make('Event Coverage / Highlights 02', 'https://youtu.be/RHgfLjlJv5g', 'DOP / EDIT'),
  make('Event Coverage / Highlights 03', 'https://youtu.be/5VzNjoarU-o', 'DOP / EDIT'),
  make('Event Coverage / Highlights 04', 'https://youtu.be/gGmflROX9V4', 'DOP / EDIT'),
];

export const sections = [
  {
    slug: 'fashion',
    title: 'Fashion',
    eyebrow: '01 / Fashion Films / Advertisements',
    href: '#fashion',
    featured: fashion[0],
    items: fashion.slice(1),
  },
  {
    slug: 'assisting',
    title: 'Assisting',
    eyebrow: '02 / Moving Image / Commercials',
    href: '#assisting',
    featured: assisting[0],
    items: assisting.slice(1),
  },
  {
    slug: 'music',
    title: 'Music',
    eyebrow: '03 / Music Videos / Photography',
    href: '#music',
    featured: music[0],
    items: music.slice(1),
  },
  {
    slug: 'socials',
    title: 'Socials',
    eyebrow: '04 / Vertical Content / Brands',
    href: '#socials',
    featured: socials[0],
    items: socials.slice(1),
  },
  {
    slug: 'events',
    title: 'Events',
    eyebrow: '05 / Event Coverage / Highlights',
    href: '#events',
    featured: events[0],
    items: events.slice(1),
  },
];

export const contactLink = { label: 'Contact', href: '#contact' };
export const getSection = (slug) => sections.find((section) => section.slug === slug);
