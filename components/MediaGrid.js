export default function MediaGrid({ items, slug }) {
  if (!items.length) {
    return (
      <div className="empty-state reveal-card">
        <div className="kicker">Coming Soon</div>
        <h2>Photography</h2>
        <p className="lead">This section is ready for portrait and film photography uploads.</p>
      </div>
    );
  }

  return (
    <>
      <div className="reel-strip" aria-label="Scrollable media reel">
        {items.map((item, idx) => {
          const modalId = `${slug}-${item.index}`;
          return (
            <article className="media-card cinematic-card reveal-card" key={modalId} style={{ '--delay': `${idx * 45}ms` }}>
              <div className="preview-frame cinematic-frame">
                <iframe
                  src={item.embedUrl}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={`${item.title} preview`}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div>
                    <span className="project-index">{String(item.index).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                    <div className="meta">{item.role}</div>
                  </div>
                  <a className="fullscreen-btn" href={`#${modalId}`} aria-label={`Open ${item.title} fullscreen`}>
                    ⛶
                  </a>
                </div>
              </div>
              <div className="media-card-bottom">
                <div>
                  <h3>{item.title}</h3>
                  <div className="meta">{item.role}</div>
                </div>
                <a className="text-link" href={`#${modalId}`}>Fullscreen</a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="grid media-grid below-reel" id="grid">
        {items.map((item, idx) => {
          const modalId = `${slug}-${item.index}`;
          return (
            <article className="media-card reveal-card" key={`${modalId}-grid`} style={{ '--delay': `${idx * 35}ms` }}>
              <div className="preview-frame compact-frame">
                <iframe
                  src={item.embedUrl}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={`${item.title} preview grid`}
                  loading="lazy"
                />
                <a className="project-overlay compact-overlay" href={`#${modalId}`} aria-label={`Open ${item.title} fullscreen`}>
                  <div>
                    <span className="project-index">{String(item.index).padStart(2, '0')}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <span className="fullscreen-btn">⛶</span>
                </a>
              </div>
              <div className="media-card-bottom">
                <div>
                  <h3>{item.title}</h3>
                  <div className="meta">{item.role}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {items.map((item) => {
        const modalId = `${slug}-${item.index}`;
        return (
          <div className="modal" id={modalId} key={`${modalId}-modal`}>
            <div className="modal-box">
              <div className="modal-top">
                <div>
                  <div className="modal-title">{item.title}</div>
                  <div className="modal-role">{item.role}</div>
                </div>
                <a href="#" className="close">Close</a>
              </div>
              <div className="frame large-frame">
                <iframe
                  src={item.embedUrl}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={item.title}
                />
              </div>
              <p className="viewer-note">Use the Google Drive player controls for play, pause, volume, timeline and fullscreen.</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
