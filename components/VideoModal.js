'use client';

export default function VideoModal({ active, onClose }) {
  if (!active) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>Close</button>
      <div className="modal-player" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={active.embed}
          title={active.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
        <div className="modal-caption">
          <strong>{active.title}</strong>
          <span>{active.role}</span>
        </div>
      </div>
    </div>
  );
}
