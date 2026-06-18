const yt = (url) => {
  const short = url.match(/youtu\.be\/([^?]+)/)?.[1];
  const shorts = url.match(/shorts\/([^?]+)/)?.[1];
  const watch = url.match(/[?&]v=([^&]+)/)?.[1];
  const id = short || shorts || watch || url;
  return {
    id,
    url,
    embed: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&vq=hd2160&autoplay=1`,
    thumb: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    thumbFallback: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
  };
};

const make = (title, url, role) => ({ title, role, ...yt(url) });

const fashionFilms = [
  make('Victoria Paulsen', 'https://youtu.be/hBweYq9dDwc', 'Fashion Films / Advertisements'),
  make('RGB1', 'https://youtu.be/Gcel7y6SwC8', 'Fashion Films / Advertisements'),
  make('State Of Still Part 2', 'https://youtu.be/OELOPUWMG8c', 'Fashion Films / Advertisements'),
  make('Like This Unseen PT 2', 'https://youtu.be/U5Q393xIlYo', 'Fashion Films / Advertisements'),
  make('Era 2 Era PT 2', 'https://youtu.be/QRmKW-pn_08', 'Fashion Films / Advertisements'),
  make('Taste Of Time', 'https://youtu.be/ysFOeBxdC1o', 'Fashion Films / Advertisements'),
  make('Arop Akol', 'https://youtu.be/Sm0koJQx6IM', 'Fashion Films / Advertisements'),
  make('RGB', 'https://youtu.be/IelTKU7Jt64', 'Fashion Films / Advertisements'),
  make('State Of Still 1', 'https://youtu.be/p1rsAbMFGWg', 'Fashion Films / Advertisements'),
  make('Outside The Circle - Timothy', 'https://youtu.be/c98LbG21208', 'Fashion Films / Advertisements'),
  make('Can I Entertain 1', 'https://youtu.be/NiyzYN7hRy0', 'Fashion Films / Advertisements'),
  make('Can I Entertain 2', 'https://youtu.be/SbqZrTf_zdk', 'Fashion Films / Advertisements'),
  make('Era 2 Era PT 1', 'https://youtu.be/ZSynkkXLlxw', 'Fashion Films / Advertisements'),
  make('Outside The Circle - BTS', 'https://youtu.be/ve3-eI6Z6Ao', 'Fashion Films / Advertisements'),
  make('Like This Unseen PT 1', 'https://youtu.be/EXvXXvyqQHI', 'Fashion Films / Advertisements'),
  make('Du Beurre - Final V', 'https://youtu.be/kfePi4RKuxQ', 'Fashion Films / Advertisements'),
  make('Taste Of Time', 'https://youtube.com/shorts/V6_CGFiYG3g', 'Fashion Films / Advertisements'),
];

const commercials = [
  make('Jorja Smith - What\'s Done Is Done', 'https://youtu.be/hbDcfEhaQBc?si=7pND9LaNADlm-dd6', 'Commercials / Moving Image'),
  make('Jackets D2 30s DG Branded', 'https://youtu.be/gpfnChGZqwU', 'Commercials / Moving Image'),
  make('SS25 Library Dual 30sec Film Branded', 'https://youtu.be/h6jLvsoj9QA', 'Commercials / Moving Image'),
  make('SS25 Regency Dual 30sec Film Branded', 'https://youtu.be/BJtMvYvdvAo', 'Commercials / Moving Image'),
  make('Jackets D1 30s DG Branded', 'https://youtu.be/Ycxsyg-7OBc', 'Commercials / Moving Image'),
  make('Fleece 15s DG Branded', 'https://youtu.be/4jrUUqBDl_w', 'Commercials / Moving Image'),
  make('Wet DG 15s Grade', 'https://youtu.be/ikikMSwz_e8', 'Commercials / Moving Image'),
  make('Wind DG 15s Grade', 'https://youtu.be/WKjmKVB2cww', 'Commercials / Moving Image'),
];

const musicVideos = [
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/pECPaUMgje8', 'Music Videos / Stills'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/D7lhjyPEzOc', 'Music Videos / Stills'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/8EtYsn5cKd8', 'Music Videos / Stills'),
  make('Care 4 U - Eleazar', 'https://youtube.com/shorts/jgFmPVrW8D4', 'Music Videos / Stills'),
  make('Take A Touch Master {2}', 'https://youtu.be/vLNXrpbxXfo', 'Music Videos / Stills'),
  make('Take A Touch Out Soon B', 'https://youtube.com/shorts/z93SxUd5gOw', 'Music Videos / Stills'),
  make('Take A Touch Snippet B', 'https://youtube.com/shorts/7PorucLQXTI', 'Music Videos / Stills'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/fwQKDnmpJP8', 'Music Videos / Stills'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/UJJ44TyzBBo', 'Music Videos / Stills'),
  make('Take A Touch Snippet', 'https://youtube.com/shorts/9W0G7LrQ_sM', 'Music Videos / Stills'),
  make('B Roll 002', 'https://youtu.be/AcAkDsWnvn0', 'Music Videos / Stills'),
  make('Flint PT2 Master {3}', 'https://youtu.be/-YmuOT6-HPk', 'Music Videos / Stills'),
  make('JDK x AntsLive x BlazeYL - Envy', 'https://youtu.be/Yi-l2c1e2TQ', 'Music Videos / Stills'),
];

const socialMedia = [
  make('Victoria Paulsen', 'https://youtube.com/shorts/FOYU9u3zYK8', 'Social Media / Vertical Content'),
  make('Big Sky - C0044', 'https://youtube.com/shorts/xDp_n0XhJSY', 'Social Media / Vertical Content'),
  make('Big Sky - EASYRIG', 'https://youtube.com/shorts/3E0GByLjdS8', 'Social Media / Vertical Content'),
  make('Big Sky - STORM XT52', 'https://youtube.com/shorts/fz9okQQBOiw', 'Social Media / Vertical Content'),
];

export const sections = [
  {
    slug: 'fashion-films',
    title: 'Fashion Films',
    eyebrow: '01 / Fashion Films / Advertisements',
    href: '/#fashion-films',
    featured: fashionFilms[0],
    items: fashionFilms.slice(1),
    type: 'video',
  },
  {
    slug: 'assisting',
    title: 'Assisting',
    eyebrow: '02 / Commercials / Moving Image',
    href: '/#assisting',
    featured: commercials[0],
    items: commercials.slice(1),
    type: 'video',
  },
  {
    slug: 'music-videos',
    title: 'Music Videos',
    eyebrow: '03 / Music Videos / Stills',
    href: '/#music-videos',
    featured: musicVideos[0],
    items: musicVideos.slice(1),
    type: 'video',
  },
  {
    slug: 'social-media',
    title: 'Social Media',
    eyebrow: '04 / Social Media / Vertical Content',
    href: '/#social-media',
    featured: socialMedia[0],
    items: socialMedia.slice(1),
    type: 'video',
  },
  {
    slug: 'photography',
    title: 'Photography',
    eyebrow: '05 / Artists / Portraits / Clothing',
    href: '/#photography',
    type: 'photo',
  },
];

export const contactLink = { label: 'Contact', href: '/#contact' };
export const videoSections = sections.filter((section) => section.type === 'video');
export const getSection = (slug) => sections.find((section) => section.slug === slug);
