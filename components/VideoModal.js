'use client';
export default function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6" onClick={onClose}>
      <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[.28em] text-white">{video.title}</div>
            <div className="mt-1 text-[10px] uppercase tracking-[.22em] text-white/45">{video.role}</div>
          </div>
          <button onClick={onClose} className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[.22em] text-white/70">Close</button>
        </div>
        <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
          <iframe className="h-full w-full" src={`${video.embed}&autoplay=1`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
  );
}
