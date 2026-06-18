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

// Titles matched to the actual YouTube uploads so thumbnails/videos and labels stay aligned.
const fashionFilms = [
  make("RGB1", "https://youtu.be/Gcel7y6SwC8", "Fashion Film"),
  make("State Of Still Part 2", "https://youtu.be/OELOPUWMG8c", "Fashion Film"),
  make("Like This Unseen PT 2", "https://youtu.be/U5Q393xIlYo", "Fashion Film"),
  make("Era 2 Era PT 2", "https://youtu.be/QRmKW-pn_08", "Fashion Film"),
  make("Taste Of Time", "https://youtu.be/ysFOeBxdC1o", "Fashion Film"),
  make("Arop Akol", "https://youtu.be/Sm0koJQx6IM", "Fashion Film"),
  make("RGB", "https://youtu.be/IelTKU7Jt64", "Fashion Film"),
  make("State Of Still 1", "https://youtu.be/p1rsAbMFGWg", "Fashion Film"),
  make("Outside The Circle - Timothy", "https://youtu.be/c98LbG21208", "Fashion Film"),
  make("Can I Entertain 1", "https://youtu.be/NiyzYN7hRy0", "Fashion Film"),
  make("Can I Entertain 2", "https://youtu.be/SbqZrTf_zdk", "Fashion Film"),
  make("Era 2 Era PT 1", "https://youtu.be/ZSynkkXLlxw", "Fashion Film"),
  make("Outside The Circle - BTS", "https://youtu.be/ve3-eI6Z6Ao", "BTS"),
  make("Like This Unseen PT 1", "https://youtu.be/EXvXXvyqQHI", "Fashion Film"),
  make("Du Beurre - Final V", "https://youtu.be/kfePi4RKuxQ", "Fashion Film"),
  make("Taste Of Time", "https://youtube.com/shorts/V6_CGFiYG3g", "Fashion Film"),
];

const assisting = [
  make("Jorja Smith - What's Done Is Done", "https://youtu.be/hbDcfEhaQBc?si=7pND9LaNADlm-dd6", "Assisting"),
  make("Jackets D2 30s DG Branded", "https://youtu.be/gpfnChGZqwU", "Assisting / SUPERDRY"),
  make("SS25 Library Dual 30sec Film Branded", "https://youtu.be/h6jLvsoj9QA", "Assisting / SUPERDRY"),
  make("SS25 Regency Dual 30sec Film Branded", "https://youtu.be/BJtMvYvdvAo", "Assisting / SUPERDRY"),
  make("Jackets D1 30s DG Branded", "https://youtu.be/Ycxsyg-7OBc", "Assisting / SUPERDRY"),
  make("Fleece 15s DG Branded", "https://youtu.be/4jrUUqBDl_w", "Assisting / SUPERDRY"),
  make("Wet DG 15s Grade", "https://youtu.be/ikikMSwz_e8", "Assisting / SUPERDRY"),
  make("Wind DG 15s Grade", "https://youtu.be/WKjmKVB2cww", "Assisting / SUPERDRY"),
];

const socialContent = [
  make("Care 4 U - Eleazar", "https://youtube.com/shorts/D7lhjyPEzOc", "Social Content"),
  make("Care 4 U - Eleazar", "https://youtube.com/shorts/8EtYsn5cKd8", "Social Content"),
  make("Care 4 U - Eleazar", "https://youtube.com/shorts/jgFmPVrW8D4", "Social Content"),
  make("Take A Touch Out Soon B", "https://youtube.com/shorts/z93SxUd5gOw", "Social Content"),
  make("Take A Touch Snippet B", "https://youtube.com/shorts/7PorucLQXTI", "Social Content"),
  make("Take A Touch Master {2}", "https://youtu.be/vLNXrpbxXfo", "Social Content"),
  make("Take A Touch Snippet", "https://youtube.com/shorts/fwQKDnmpJP8", "Social Content"),
  make("Take A Touch Snippet", "https://youtube.com/shorts/UJJ44TyzBBo", "Social Content"),
  make("Take A Touch Snippet", "https://youtube.com/shorts/9W0G7LrQ_sM", "Social Content"),
  make("B Roll 002", "https://youtu.be/AcAkDsWnvn0", "Music Stills"),
  make("Flint PT2 Master {3}", "https://youtu.be/-YmuOT6-HPk", "Music Stills"),
  make("JDK x AntsLive x BlazeYL - Envy", "https://youtu.be/Yi-l2c1e2TQ", "Music Stills"),
  make("Big Sky - C0044", "https://youtube.com/shorts/xDp_n0XhJSY", "Social Content"),
  make("Big Sky - EASYRIG", "https://youtube.com/shorts/3E0GByLjdS8", "Social Content"),
  make("Big Sky - STORM XT52", "https://youtube.com/shorts/fz9okQQBOiw", "Social Content"),
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
    eyebrow: "Commercial / support work",
    featured: assisting[0],
    items: assisting.slice(1),
  },
  {
    slug: "social-content",
    title: "Social Content",
    eyebrow: "Vertical edits / music / Big Sky",
    featured: socialContent[0],
    items: socialContent.slice(1),
  },
];
