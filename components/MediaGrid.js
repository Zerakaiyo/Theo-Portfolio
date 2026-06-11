export default function MediaGrid({ items, slug }) {
  if (!items.length) {
    return <p className="lead">This section is ready for photography uploads.</p>;
  }

  return (
    <>
      <div className="grid">
        {items.map((item) => {
          const modalId = `${slug}-${item.index}`;
          return (
            <a className="card" href={`#${modalId}`} key={modalId}>
              <div className="card-visual">VIEW ON SITE</div>
              <div>
                <h3>{item.title}</h3>
                <div className="meta">{item.role}</div>
              </div>
            </a>
          );
        })}
      </div>
      {items.map((item) => {
        const modalId = `${slug}-${item.index}`;
        return (
          <div className="modal" id={modalId} key={`${modalId}-modal`}>
            <div className="modal-box">
              <div className="modal-top">
                <div className="modal-title">{item.title}</div>
                <a href="#" className="close">Close</a>
              </div>
              <div className="frame">
                <iframe src={item.embedUrl} allow="autoplay; fullscreen" allowFullScreen title={item.title}></iframe>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
