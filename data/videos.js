const yt = (url) => {
  const short = url.match(/youtu\.be\/([^?]+)/)?.[1];
  const shorts = url.match(/shorts\/([^?]+)/)?.[1];
  const watch = url.match(/[?&]v=([^&]+)/)?.[1];
  const id = short || shorts || watch || url;
  return {
    id,
    url,
    // YouTube decides final playback quality, but this requests the best available stream.
    embed: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&vq=hd2160`,
    thumb: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    thumbFallback: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  };
};

const make = (title, url, role = 'DOP / PHOTOGRAPHY / LIGHTING') => ({ title, role, ...yt(url) });

const fashionFilms = [
  make('Victoria Paulsen', 'https://youtu.be/hBweYq9dDwc', 'Fashion Films / Advertising'),
  make('RGB1', 'https://youtu.be/Gcel7y6SwC8', 'Fashion Films / Advertising'),
  make('State Of Still Part 2', 'https://youtu.be/OELOPUWMG8c', 'Fashion Films / Advertising'),
  make('Like This Unseen PT 2', 'https://youtu.be/U5Q393xIlYo', 'Fashion Films / Advertising'),
  make('Era 2 Era PT 2', 'https://youtu.be/QRmKW-pn_08', 'Fashion Films / Advertising'),
  make('Taste Of Time', 'https://youtu.be/ysFOeBxdC1o', 'Fashion Films / Advertising'),
  make('Arop Akol', 'https://youtu.be/Sm0koJQx6IM', 'Fashion Films / Advertising'),
  make('RGB', 'https://youtu.be/IelTKU7Jt64', 'Fashion Films / Advertising'),
  make('State Of Still 1', 'https://youtu.be/p1rsAbMFGWg', 'Fashion Films / Advertising'),
  make('Outside The Circle - Timothy', 'https://youtu.be/c98LbG21208', 'Fashion Films / Advertising'),
  make('Can I Entertain 1', 'https://youtu.be/NiyzYN7hRy0', 'Fashion Films / Advertising'),
  make('Can I Entertain 2', 'https://youtu.be/SbqZrTf_zdk', 'Fashion Films / Advertising'),
  make('Era 2 Era PT 1', 'https://youtu.be/ZSynkkXLlxw', 'Fashion Films / Advertising'),
  make('Outside The Circle - BTS', 'https://youtu.be/ve3-eI6Z6Ao', 'Fashion Films / Advertising'),
  make('Like This Unseen PT 1', 'https://youtu.be/EXvXXvyqQHI', 'Fashion Films / Advertising'),
  make('Du Beurre - Final V', 'https://youtu.be/kfePi4RKuxQ', 'Fashion Films / Advertising'),
  make('Taste Of Time', 'https://youtube.com/shorts/V6_CGFiYG3g', 'Fashion Films / Advertising'),
];

const assisting = [
  make('Jorja Smith - What\'s Done Is Done', 'https://youtu.be/hbDcfEhaQBc?si=7pND9LaNADlm-dd6', 'Commercials / Moving Image'),
  make('Jackets D2 30s DG Branded', 'https://youtu.be/gpfnChGZqwU', 'Commercials / Moving Image'),
  make('SS25 Library Dual 30sec Film Branded', 'https://youtu.be/h6jLvsoj9QA', 'Commercials / Moving Image'),
  make('SS25 Regency Dual 30sec Film Branded', 'https://youtu.be/BJtMvYvdvAo', 'Commercials / Moving Image'),
  make('Jackets D1 30s DG Branded', 'https://youtu.be/Ycxsyg-7OBc', 'Commercials / Moving Image'),
  make('Fleece 15s DG Branded', 'https://youtu.be/4jrUUqBDl_w', 'Commercials / Moving Image'),
  make('Wet DG 15s Grade', 'https://youtu.be/ikikMSwz_e8', 'Commercials / Moving Image'),
  make('Wind DG 15s Grade', 'https://youtu.be/WKjmKVB2cww', 'Commercials / Moving Image'),
];

const socialMedia = [
  make('Victoria Paulsen', 'https://youtube.com/shorts/pECPaUMgje8', 'Social Media / Vertical Content'),
  make('Victoria Paulsen', 'https://youtube.com/shorts/FOYU9u3zYK8', 'Social Media / Vertical Content'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/D7lhjyPEzOc', 'Social Media / Vertical Content'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/8EtYsn5cKd8', 'Social Media / Vertical Content'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/jgFmPVrW8D4', 'Social Media / Vertical Content'),
  make('Take A Touch Out Soon B', 'https://youtube.com/shorts/z93SxUd5gOw', 'Social Media / Vertical Content'),
  make('Take A Touch Snippet B', 'https://youtube.com/shorts/7PorucLQXTI', 'Social Media / Vertical Content'),
  make('Take A Touch Master {2}', 'https://youtu.be/vLNXrpbxXfo', 'Social Media / Vertical Content'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/fwQKDnmpJP8', 'Social Media / Vertical Content'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/UJJ44TyzBBo', 'Social Media / Vertical Content'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/9W0G7LrQ_sM', 'Social Media / Vertical Content'),
  make('B Roll 002', 'https://youtu.be/AcAkDsWnvn0', 'Music Videos / Stills'),
  make('Flint PT2 Master {3}', 'https://youtu.be/-YmuOT6-HPk', 'Music Videos / Stills'),
  make('JDK x AntsLive x BlazeYL - Envy', 'https://youtu.be/Yi-l2c1e2TQ', 'Music Videos / Stills'),
  make('Big Sky - C0044', 'https://youtube.com/shorts/xDp_n0XhJSY', 'Social Media / Vertical Content'),
  make('Big Sky - EASYRIG', 'https://youtube.com/shorts/3E0GByLjdS8', 'Social Media / Vertical Content'),
  make('Big Sky - STORM XT52', 'https://youtube.com/shorts/fz9okQQBOiw', 'Social Media / Vertical Content'),
];

export const sections = [
  {
    slug: 'fashion-films',
    title: 'Fashion Films',
    eyebrow: 'Fashion Films / Advertising',
    href: '/fashion-films',
    featured: fashionFilms[0],
    items: fashionFilms.slice(1),
  },
  {
    slug: 'assisting',
    title: 'Assisting',
    eyebrow: 'Commercials / Moving Image',
    href: '/assisting',
    featured: assisting[0],
    items: assisting.slice(1),
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    eyebrow: 'Social Media / Vertical Content',
    href: '/social-media',
    featured: socialMedia[0],
    items: socialMedia.slice(1),
  },
];

export const contactLink = { label: 'Contact', href: '/contact' };
export const getSection = (slug) => sections.find((section) => section.slug === slug);
