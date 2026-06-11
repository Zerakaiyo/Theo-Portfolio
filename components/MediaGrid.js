export default function MediaGrid({ items, slug }) {
  if (!items.length) {
    return <p className="lead">This section is ready for photography uploads.</p>;
  }

  return (
    <>
      <div className="grid media-grid">
        {items.map((item) => {
          const modalId = `${slug}-${item.index}`;
          return (
            <article className="media-card" key={modalId}>
              <div className="preview-frame">
                <iframe
                  src={item.embedUrl}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={`${item.title} preview`}
                  loading="lazy"
                />
              </div>

              <div className="media-card-bottom">
                <div>
                  <h3>{item.title}</h3>
                  <div className="meta">{item.role}</div>
                </div>
                <a className="fullscreen-btn" href={`#${modalId}`} aria-label={`Open ${item.title} fullscreen`}>
                  ⛶
                </a>
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
