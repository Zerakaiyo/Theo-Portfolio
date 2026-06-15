export const categories = [
  {
    slug: 'fashion-films',
    title: 'Fashion Films',
    kicker: 'Fashion / Film',
    description: 'Selected moving image work.',
    featured: 'Gcel7y6SwC8',
    items: [
      ['Gcel7y6SwC8','Arop Akol'],['OELOPUWMG8c','Can I Entertain PT.1'],['U5Q393xIlYo','Can I Entertain PT.2'],['QRmKW-pn_08','Du Deurre'],['ysFOeBxdC1o','Era 2 Era PT.1'],['Sm0koJQx6IM','Era 2 Era PT.2'],['IelTKU7Jt64','Like This Unseen Handycam'],['p1rsAbMFGWg','Like This Unseen PT.1'],['c98LbG21208','Like This Unseen PT.2'],['NiyzYN7hRy0','Outside The Circle BTS'],['SbqZrTf_zdk','Outside The Circle Timothy'],['ZSynkkXLlxw','RGB PT.1'],['ve3-eI6Z6Ao','RGB PT.2'],['EXvXXvyqQHI','State Of Still PT.1'],['kfePi4RKuxQ','State Of Still PT.2'],['V6_CGFiYG3g','Taste Of Time','short']
    ]
  },
  {
    slug: 'clothing',
    title: 'Clothing',
    kicker: 'Edited Videos',
    description: 'Victor clothing edits and vertical content.',
    featured: '0EYTirQp85M',
    items: [
      ['0EYTirQp85M','Victor Clothing PT.1','short'],['6uZui6K4VVI','Victor Clothing PT.2','short'],['VIVgjSpC9B4','Victor Clothing PT.3','short'],['frvjt1knH3g','Victor Clothing PT.4','short'],['gbFItuIpcbE','Victor Clothing PT.5','short'],['ET1NBiquL4s','Victor Clothing PT.6','short'],['aPbYVuU2fhM','Victor Clothing PT.7','short'],['ulWEfxtVO9g','Victor Clothing PT.8','short'],['hGoEvBk4MsM','Victor Clothing PT.9','short']
    ]
  },
  {
    slug: 'music',
    title: 'Music',
    kicker: 'Music Videos / Stills',
    description: 'Music-led videography, stills and short-form work.',
    featured: 'vLNXrpbxXfo',
    items: [
      ['AcAkDsWnvn0','Music Stills'],['vLNXrpbxXfo','Take A Touch Videography PT.1'],['z93SxUd5gOw','Take A Touch Videography PT.2','short'],['7PorucLQXTI','Take A Touch Videography PT.3','short'],['fwQKDnmpJP8','Take A Touch Videography PT.4','short'],['UJJ44TyzBBo','Take A Touch Videography PT.5','short'],['9W0G7LrQ_sM','Take A Touch Videography PT.6','short'],['-YmuOT6-HPk','Stills For Music Video PT.1'],['Yi-l2c1e2TQ','Stills For Music Video PT.2'],['D7lhjyPEzOc','Eleazar PT.1','short'],['BG_RcfIW-Lw','Eleazar PT.2','short'],['8EtYsn5cKd8','Eleazar PT.3','short'],['jgFmPVrW8D4','Eleazar PT.4','short'],['iXBCaboGVCk','Eleazar PT.5','short']
    ]
  },
  {
    slug: 'big-sky',
    title: 'Big Sky',
    kicker: 'Content',
    description: 'Selected production and equipment-led content.',
    featured: 'xDp_n0XhJSY',
    items: [
      ['xDp_n0XhJSY','C0044','short'],['3E0GByLjdS8','EASYRIG BS DB','short'],['fz9okQQBOiw','STORM XT52','short']
    ]
  },
  {
    slug: 'assisting',
    title: 'Assisting',
    kicker: 'SUPERDRY',
    description: 'Assisting and branded production support.',
    featured: 'gpfnChGZqwU',
    items: [
      ['gpfnChGZqwU','Fleece 15s DG Branded'],['h6jLvsoj9QA','Jackets D1 30s DG Branded'],['BJtMvYvdvAo','Jackets D2 30s DG Branded'],['Ycxsyg-7OBc','SS25 Library Dual 30s'],['4jrUUqBDl_w','SS25 Regency Dual 30s'],['ikikMSwz_e8','Wet DG 15s Grade'],['WKjmKVB2cww','Wind DG 15s Grade']
    ]
  }
].map(category => ({
  ...category,
  items: category.items.map(([youtubeId, title, format]) => ({
    youtubeId,
    title,
    format: format || 'wide',
    role: category.slug === 'assisting' ? 'Assisting' : category.slug === 'music' ? 'Videography / Stills' : category.slug === 'clothing' ? 'Edited Video' : 'DOP / Photography / Lighting'
  }))
}));

export function getCategory(slug) {
  return categories.find(category => category.slug === slug);
}

export function youtubeThumb(id) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}
