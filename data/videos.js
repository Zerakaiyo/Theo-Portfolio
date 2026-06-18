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

const make = (title, url, role = 'DOP / PHOTOGRAPHY / LIGHTING') => ({ title, role, ...yt(url) });

const fashionFilms = [
  make('Victoria Paulsen', 'https://youtu.be/hBweYq9dDwc', 'Fashion Film'),
  make('RGB1', 'https://youtu.be/Gcel7y6SwC8', 'Fashion Film'),
  make('State Of Still Part 2', 'https://youtu.be/OELOPUWMG8c', 'Fashion Film'),
  make('Like This Unseen PT 2', 'https://youtu.be/U5Q393xIlYo', 'Fashion Film'),
  make('Era 2 Era PT 2', 'https://youtu.be/QRmKW-pn_08', 'Fashion Film'),
  make('Taste Of Time', 'https://youtu.be/ysFOeBxdC1o', 'Fashion Film'),
  make('Arop Akol', 'https://youtu.be/Sm0koJQx6IM', 'Fashion Film'),
  make('RGB', 'https://youtu.be/IelTKU7Jt64', 'Fashion Film'),
  make('State Of Still 1', 'https://youtu.be/p1rsAbMFGWg', 'Fashion Film'),
  make('Outside The Circle - Timothy', 'https://youtu.be/c98LbG21208', 'Fashion Film'),
  make('Can I Entertain 1', 'https://youtu.be/NiyzYN7hRy0', 'Fashion Film'),
  make('Can I Entertain 2', 'https://youtu.be/SbqZrTf_zdk', 'Fashion Film'),
  make('Era 2 Era PT 1', 'https://youtu.be/ZSynkkXLlxw', 'Fashion Film'),
  make('Outside The Circle - BTS', 'https://youtu.be/ve3-eI6Z6Ao', 'BTS'),
  make('Like This Unseen PT 1', 'https://youtu.be/EXvXXvyqQHI', 'Fashion Film'),
  make('Du Beurre - Final V', 'https://youtu.be/kfePi4RKuxQ', 'Fashion Film'),
  make('Taste Of Time', 'https://youtube.com/shorts/V6_CGFiYG3g', 'Fashion Film'),
];

const assisting = [
  make('Jorja Smith - What\'s Done Is Done', 'https://youtu.be/hbDcfEhaQBc?si=7pND9LaNADlm-dd6', 'Assisting'),
  make('Jackets D2 30s DG Branded', 'https://youtu.be/gpfnChGZqwU', 'Assisting / SUPERDRY'),
  make('SS25 Library Dual 30sec Film Branded', 'https://youtu.be/h6jLvsoj9QA', 'Assisting / SUPERDRY'),
  make('SS25 Regency Dual 30sec Film Branded', 'https://youtu.be/BJtMvYvdvAo', 'Assisting / SUPERDRY'),
  make('Jackets D1 30s DG Branded', 'https://youtu.be/Ycxsyg-7OBc', 'Assisting / SUPERDRY'),
  make('Fleece 15s DG Branded', 'https://youtu.be/4jrUUqBDl_w', 'Assisting / SUPERDRY'),
  make('Wet DG 15s Grade', 'https://youtu.be/ikikMSwz_e8', 'Assisting / SUPERDRY'),
  make('Wind DG 15s Grade', 'https://youtu.be/WKjmKVB2cww', 'Assisting / SUPERDRY'),
];

const socialMedia = [
  make('Victoria Paulsen', 'https://youtube.com/shorts/pECPaUMgje8', 'Social Media'),
  make('Victoria Paulsen', 'https://youtube.com/shorts/FOYU9u3zYK8', 'Social Media'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/D7lhjyPEzOc', 'Social Media'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/8EtYsn5cKd8', 'Social Media'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/jgFmPVrW8D4', 'Social Media'),
  make('Take A Touch Out Soon B', 'https://youtube.com/shorts/z93SxUd5gOw', 'Social Media'),
  make('Take A Touch Snippet B', 'https://youtube.com/shorts/7PorucLQXTI', 'Social Media'),
  make('Take A Touch Master {2}', 'https://youtu.be/vLNXrpbxXfo', 'Social Media'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/fwQKDnmpJP8', 'Social Media'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/UJJ44TyzBBo', 'Social Media'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/9W0G7LrQ_sM', 'Social Media'),
  make('B Roll 002', 'https://youtu.be/AcAkDsWnvn0', 'Music Stills'),
  make('Flint PT2 Master {3}', 'https://youtu.be/-YmuOT6-HPk', 'Music Stills'),
  make('JDK x AntsLive x BlazeYL - Envy', 'https://youtu.be/Yi-l2c1e2TQ', 'Music Stills'),
  make('Big Sky - C0044', 'https://youtube.com/shorts/xDp_n0XhJSY', 'Social Media'),
  make('Big Sky - EASYRIG', 'https://youtube.com/shorts/3E0GByLjdS8', 'Social Media'),
  make('Big Sky - STORM XT52', 'https://youtube.com/shorts/fz9okQQBOiw', 'Social Media'),
];

export const sections = [
  {
    slug: 'fashion-films',
    title: 'Fashion Films',
    eyebrow: 'Selected moving image',
    href: '/fashion-films',
    featured: fashionFilms[0],
    items: fashionFilms.slice(1),
  },
  {
    slug: 'assisting',
    title: 'Assisting',
    eyebrow: 'Commercial / support work',
    href: '/assisting',
    featured: assisting[0],
    items: assisting.slice(1),
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    eyebrow: 'Vertical edits / music / Big Sky',
    href: '/social-media',
    featured: socialMedia[0],
    items: socialMedia.slice(1),
  },
];

export const contactLink = { label: 'Contact', href: '/contact' };
export const getSection = (slug) => sections.find((section) => section.slug === slug);
