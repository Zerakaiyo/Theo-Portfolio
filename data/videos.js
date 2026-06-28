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
const numberTitle = (prefix, index) => `${prefix} ${String(index).padStart(2, '0')}`;

const fashionUrls = [
  ['https://youtu.be/kfePi4RKuxQ', 'DOP / EDIT'],
  ['https://youtu.be/c98LbG21208', 'DOP / EDIT'],
  ['https://youtu.be/Sm0koJQx6IM', 'DOP / EDIT'],
  ['https://youtu.be/QRmKW-pn_08', 'DOP / EDIT'],
  ['https://youtu.be/ZSynkkXLlxw', 'DOP / EDIT'],
  ['https://youtu.be/EXvXXvyqQHI', 'DOP / EDIT'],
  ['https://youtu.be/U5Q393xIlYo', 'DOP / EDIT'],
  ['https://youtu.be/Gcel7y6SwC8', 'DOP / EDIT'],
  ['https://youtu.be/IelTKU7Jt64', 'DOP / EDIT'],
  ['https://youtu.be/NiyzYN7hRy0', 'DOP / EDIT'],
  ['https://youtu.be/SbqZrTf_zdk', 'DOP / EDIT'],
  ['https://youtu.be/p1rsAbMFGWg', 'DOP / EDIT'],
  ['https://youtu.be/hBweYq9dDwc', 'DOP / EDIT'],
  ['https://youtu.be/ysFOeBxdC1o', 'DOP / EDIT'],
  ['https://youtu.be/ve3-eI6Z6Ao', 'EDIT'],
  ['https://youtube.com/shorts/V6_CGFiYG3g', 'EDIT'],
];

const fashion = fashionUrls.map(([url, role], index) => make(numberTitle('Fashion Film', index + 1), url, role));

const assisting = [
  make('Jorja Smith', 'https://youtu.be/hbDcfEhaQBc', 'SPARK TRAINEE'),
  make('Assisting 02', 'https://youtu.be/h6jLvsoj9QA', 'ASSISTANT CAMERA'),
  make('Assisting 03', 'https://youtu.be/ikikMSwz_e8', 'ASSISTANT CAMERA'),
  make('Assisting 04', 'https://youtu.be/BJtMvYvdvAo', 'ASSISTANT CAMERA'),
  make('Assisting 05', 'https://youtu.be/WKjmKVB2cww', 'ASSISTANT CAMERA'),
  make('Assisting 06', 'https://youtu.be/Ycxsyg-7OBc', 'ASSISTANT CAMERA'),
  make('Assisting 07', 'https://youtu.be/gpfnChGZqwU', 'ASSISTANT CAMERA'),
  make('Assisting 08', 'https://youtu.be/4jrUUqBDl_w', 'ASSISTANT CAMERA'),
];

const music = [
  make('Take A Touch', 'https://youtu.be/vLNXrpbxXfo', 'DOP / PHOTOGRAPHY'),
  make('Stills For Music Video', 'https://youtu.be/-YmuOT6-HPk', 'ASSISTANT CAMERA / PHOTOGRAPHY'),
  make('Stills For Music Video 02', 'https://youtu.be/Yi-l2c1e2TQ', 'ASSISTANT CAMERA / PHOTOGRAPHY'),
];

const socials = [
  make('Victoria Paulsen', 'https://youtube.com/shorts/pECPaUMgje8', 'DOP / EDIT'),
  make('Victoria Paulsen 02', 'https://youtube.com/shorts/FOYU9u3zYK8', 'DOP / EDIT'),
  make('Big Sky 01', 'https://youtube.com/shorts/fz9okQQBOiw', 'DOP / EDIT'),
  make('Big Sky 02', 'https://youtube.com/shorts/xDp_n0XhJSY', 'DOP / EDIT'),
  make('Big Sky 03', 'https://youtube.com/shorts/3E0GByLjdS8', 'DOP / EDIT'),
  make('Take A Touch', 'https://youtube.com/shorts/9W0G7LrQ_sM', 'EDIT'),
  make('Take A Touch Snippet B', 'https://youtube.com/shorts/fwQKDnmpJP8', 'EDIT'),
  make('Take A Touch Out Soon B', 'https://youtube.com/shorts/7PorucLQXTI', 'EDIT'),
  make('CARE 4 U - ELEAZAR', 'https://youtube.com/shorts/D7lhjyPEzOc', 'DOP / EDIT'),
  make('CARE 4 U - ELEAZAR 03', 'https://youtube.com/shorts/BG_RcfIW-Lw', 'DOP / EDIT'),
  make('CARE 4 U - ELEAZAR 04', 'https://youtube.com/shorts/iXBCaboGVCk', 'DOP / EDIT'),
];

const events = [
  make('Event Coverage 01', 'https://youtu.be/kXW4jU5tCWU', 'DOP / EDIT'),
  make('Event Coverage 02', 'https://youtu.be/RHgfLjlJv5g', 'DOP / EDIT'),
  make('Event Coverage 03', 'https://youtu.be/5VzNjoarU-o', 'DOP / EDIT'),
  make('Event Coverage 04', 'https://youtu.be/gGmflROX9V4', 'DOP / EDIT'),
];

export const sections = [
  {
    slug: 'fashion',
    title: 'Fashion',
    eyebrow: 'Fashion Films / Advertisements',
    href: '#fashion',
    featured: fashion[0],
    items: fashion.slice(1),
  },
  {
    slug: 'assisting',
    title: 'Assisting',
    eyebrow: 'Moving Image / Commercials',
    href: '#assisting',
    featured: assisting[0],
    items: assisting.slice(1),
  },
  {
    slug: 'music',
    title: 'Music',
    eyebrow: 'Music Videos / Photography',
    href: '#music',
    featured: music[0],
    items: music.slice(1),
  },
  {
    slug: 'socials',
    title: 'Socials',
    eyebrow: 'Vertical Content / Brands',
    href: '#socials',
    featured: socials[0],
    items: socials.slice(1),
  },
  {
    slug: 'events',
    title: 'Events',
    eyebrow: 'Event Coverage / Highlights',
    href: '#events',
    featured: events[0],
    items: events.slice(1),
  },
];

export const contactLink = { label: 'Contact', href: '#contact' };
export const getSection = (slug) => sections.find((section) => section.slug === slug);
