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

const make = (title, url, role = "DOP / PHOTOGRAPHY / LIGHTING") => ({ title, role, ...yt(url) });

const fashionFilms = [
  make("Arop Akol", "https://youtu.be/Gcel7y6SwC8", "Fashion Film"),
  make("Can I Entertain PT.1", "https://youtu.be/OELOPUWMG8c", "Fashion Film"),
  make("Can I Entertain PT.2", "https://youtu.be/U5Q393xIlYo", "Fashion Film"),
  make("Du Deurre", "https://youtu.be/QRmKW-pn_08", "Fashion Film"),
  make("Era 2 Era PT.1", "https://youtu.be/ysFOeBxdC1o", "Fashion Film"),
  make("Era 2 Era PT.2", "https://youtu.be/Sm0koJQx6IM", "Fashion Film"),
  make("Like This Unseen", "https://youtu.be/IelTKU7Jt64", "Handycam"),
  make("Like This Unseen PT.1", "https://youtu.be/p1rsAbMFGWg", "Fashion Film"),
  make("Like This Unseen PT.2", "https://youtu.be/c98LbG21208", "Fashion Film"),
  make("Outside The Circle BTS", "https://youtu.be/NiyzYN7hRy0", "BTS"),
  make("Outside The Circle", "https://youtu.be/SbqZrTf_zdk", "Fashion Film"),
  make("RGB PT.1", "https://youtu.be/ZSynkkXLlxw", "Fashion Film"),
  make("RGB PT.2", "https://youtu.be/ve3-eI6Z6Ao", "Fashion Film"),
  make("State Of Still PT.1", "https://youtu.be/EXvXXvyqQHI", "Fashion Film"),
  make("State Of Still PT.2", "https://youtu.be/kfePi4RKuxQ", "Fashion Film"),
  make("Taste Of Time", "https://youtube.com/shorts/V6_CGFiYG3g", "Fashion Film"),
];

const assisting = [
  make("Fleece 15s", "https://youtu.be/gpfnChGZqwU", "Assisting / SUPERDRY"),
  make("Jackets D1", "https://youtu.be/h6jLvsoj9QA", "Assisting / SUPERDRY"),
  make("Jackets D2", "https://youtu.be/BJtMvYvdvAo", "Assisting / SUPERDRY"),
  make("SS25 Library", "https://youtu.be/Ycxsyg-7OBc", "Assisting / SUPERDRY"),
  make("SS25 Regency", "https://youtu.be/4jrUUqBDl_w", "Assisting / SUPERDRY"),
  make("Wet DG", "https://youtu.be/ikikMSwz_e8", "Assisting / SUPERDRY"),
  make("Wind DG", "https://youtu.be/WKjmKVB2cww", "Assisting / SUPERDRY"),
];

const socialMedia = [
  make("Victor Clothing PT.1", "https://youtube.com/shorts/0EYTirQp85M", "Social Content"),
  make("Victor Clothing PT.2", "https://youtube.com/shorts/6uZui6K4VVI", "Social Content"),
  make("Victor Clothing PT.3", "https://youtube.com/shorts/VIVgjSpC9B4", "Social Content"),
  make("Eleazar PT.1", "https://youtube.com/shorts/D7lhjyPEzOc", "Social Content"),
  make("Eleazar PT.2", "https://youtube.com/shorts/BG_RcfIW-Lw", "Social Content"),
  make("Eleazar PT.3", "https://youtube.com/shorts/8EtYsn5cKd8", "Social Content"),
  make("Big Sky C0044", "https://youtube.com/shorts/xDp_n0XhJSY", "Social Content"),
  make("Big Sky EASYRIG", "https://youtube.com/shorts/3E0GByLjdS8", "Social Content"),
  make("Big Sky STORM XT52", "https://youtube.com/shorts/fz9okQQBOiw", "Social Content"),
];

export const sections = [
  {
    slug: "fashion-films",
    title: "Fashion Films",
    eyebrow: "Selected moving image",
    featured: fashionFilms[0],
    items: fashionFilms.slice(1),
  },
  {
    slug: "assisting",
    title: "Assisting",
    eyebrow: "SUPERDRY",
    featured: assisting[0],
    items: assisting.slice(1),
  },
  {
    slug: "social-media",
    title: "Social Media",
    eyebrow: "Vertical content",
    featured: socialMedia[0],
    items: socialMedia.slice(1),
  },
];
