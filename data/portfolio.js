const y = (url) => {
  const short = url.match(/youtu\.be\/([^?]+)/);
  const normal = url.match(/[?&]v=([^&]+)/);
  const shorts = url.match(/shorts\/([^?]+)/);
  const id = short?.[1] || normal?.[1] || shorts?.[1] || url;
  return {
    url,
    id,
    embed: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`,
    thumb: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  };
};

const make = (title, role, url, orientation = 'landscape') => ({ title, role, orientation, ...y(url) });

export const sections = [
  {
    id: 'fashion-films',
    title: 'Fashion Films',
    pieces: [
      make('Arop Akol', 'Fashion Film', 'https://youtu.be/Gcel7y6SwC8'),
      make('Can I Entertain PT.1', 'Fashion Film', 'https://youtu.be/OELOPUWMG8c'),
      make('Can I Entertain PT.2', 'Fashion Film', 'https://youtu.be/U5Q393xIlYo'),
      make('Du Deurre', 'Fashion Film', 'https://youtu.be/QRmKW-pn_08'),
      make('Era 2 Era PT.1', 'Fashion Film', 'https://youtu.be/ysFOeBxdC1o'),
      make('Era 2 Era PT.2', 'Fashion Film', 'https://youtu.be/Sm0koJQx6IM'),
      make('Like This Unseen (Handycam)', 'Fashion Film', 'https://youtu.be/IelTKU7Jt64'),
      make('Like This Unseen PT.1', 'Fashion Film', 'https://youtu.be/p1rsAbMFGWg'),
      make('Like This Unseen PT.2', 'Fashion Film', 'https://youtu.be/c98LbG21208'),
      make('Outside The Circle BTS', 'Fashion Film', 'https://youtu.be/NiyzYN7hRy0'),
      make('Outside The Circle Timothy', 'Fashion Film', 'https://youtu.be/SbqZrTf_zdk'),
      make('RGB PT.1', 'Fashion Film', 'https://youtu.be/ZSynkkXLlxw'),
      make('RGB PT.2', 'Fashion Film', 'https://youtu.be/ve3-eI6Z6Ao'),
      make('State Of Still PT.1', 'Fashion Film', 'https://youtu.be/EXvXXvyqQHI'),
      make('State Of Still PT.2', 'Fashion Film', 'https://youtu.be/kfePi4RKuxQ'),
      make('Taste Of Time', 'Fashion Film', 'https://youtube.com/shorts/V6_CGFiYG3g', 'portrait')
    ]
  },
  {
    id: 'clothing',
    title: 'Clothing',
    pieces: [
      make('Victor Clothing PT.1', 'Edited Video', 'https://youtube.com/shorts/0EYTirQp85M', 'portrait'),
      make('Victor Clothing PT.2', 'Edited Video', 'https://youtube.com/shorts/6uZui6K4VVI', 'portrait'),
      make('Victor Clothing PT.3', 'Edited Video', 'https://youtube.com/shorts/VIVgjSpC9B4', 'portrait'),
      make('Victor Clothing PT.4', 'Edited Video', 'https://youtube.com/shorts/frvjt1knH3g', 'portrait'),
      make('Victor Clothing PT.5', 'Edited Video', 'https://youtube.com/shorts/gbFItuIpcbE', 'portrait'),
      make('Victor Clothing PT.6', 'Edited Video', 'https://youtube.com/shorts/ET1NBiquL4s', 'portrait'),
      make('Victor Clothing PT.7', 'Edited Video', 'https://youtube.com/shorts/aPbYVuU2fhM', 'portrait'),
      make('Victor Clothing PT.8', 'Edited Video', 'https://youtube.com/shorts/ulWEfxtVO9g', 'portrait'),
      make('Victor Clothing PT.9', 'Edited Video', 'https://youtube.com/shorts/hGoEvBk4MsM', 'portrait')
    ]
  },
  {
    id: 'music',
    title: 'Music',
    pieces: [
      make('Music Stills', 'Music Stills', 'https://youtu.be/AcAkDsWnvn0'),
      make('Take A Touch PT.1', 'Videography', 'https://youtu.be/vLNXrpbxXfo'),
      make('Take A Touch PT.2', 'Videography', 'https://youtube.com/shorts/z93SxUd5gOw', 'portrait'),
      make('Take A Touch PT.3', 'Videography', 'https://youtube.com/shorts/7PorucLQXTI', 'portrait'),
      make('Take A Touch PT.4', 'Videography', 'https://youtube.com/shorts/fwQKDnmpJP8', 'portrait'),
      make('Take A Touch PT.5', 'Videography', 'https://youtube.com/shorts/UJJ44TyzBBo', 'portrait'),
      make('Take A Touch PT.6', 'Videography', 'https://youtube.com/shorts/9W0G7LrQ_sM', 'portrait'),
      make('Music Video Stills PT.1', 'Stills', 'https://youtu.be/-YmuOT6-HPk'),
      make('Music Video Stills PT.2', 'Stills', 'https://youtu.be/Yi-l2c1e2TQ'),
      make('Eleazar PT.1', 'Music Video', 'https://youtube.com/shorts/D7lhjyPEzOc', 'portrait'),
      make('Eleazar PT.2', 'Music Video', 'https://youtube.com/shorts/BG_RcfIW-Lw', 'portrait'),
      make('Eleazar PT.3', 'Music Video', 'https://youtube.com/shorts/8EtYsn5cKd8', 'portrait'),
      make('Eleazar PT.4', 'Music Video', 'https://youtube.com/shorts/jgFmPVrW8D4', 'portrait'),
      make('Eleazar PT.5', 'Music Video', 'https://youtube.com/shorts/iXBCaboGVCk', 'portrait')
    ]
  },
  {
    id: 'big-sky',
    title: 'Big Sky',
    pieces: [
      make('C0044', 'Big Sky Content', 'https://youtube.com/shorts/xDp_n0XhJSY', 'portrait'),
      make('EASYRIG BS DB', 'Big Sky Content', 'https://youtube.com/shorts/3E0GByLjdS8', 'portrait'),
      make('STORM XT52', 'Big Sky Content', 'https://youtube.com/shorts/fz9okQQBOiw', 'portrait')
    ]
  },
  {
    id: 'assisting',
    title: 'Assisting',
    pieces: [
      make('Fleece 15s DG Branded', 'SUPERDRY Assisting', 'https://youtu.be/gpfnChGZqwU'),
      make('Jackets D1 30s DG Branded', 'SUPERDRY Assisting', 'https://youtu.be/h6jLvsoj9QA'),
      make('Jackets D2 30s DG Branded', 'SUPERDRY Assisting', 'https://youtu.be/BJtMvYvdvAo'),
      make('SS25 Library Dual 30s Film', 'SUPERDRY Assisting', 'https://youtu.be/Ycxsyg-7OBc'),
      make('SS25 Regency Dual 30s Film', 'SUPERDRY Assisting', 'https://youtu.be/4jrUUqBDl_w'),
      make('Wet DG 15s Grade', 'SUPERDRY Assisting', 'https://youtu.be/ikikMSwz_e8'),
      make('Wind DG 15s Grade', 'SUPERDRY Assisting', 'https://youtu.be/WKjmKVB2cww')
    ]
  }
];

export const services = ['Photography', 'Videography', 'Social Content', 'Production Support'];
