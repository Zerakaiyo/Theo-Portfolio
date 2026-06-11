@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-sans: Arial, Helvetica, sans-serif;
  --bg: #030303;
  --soft: #d8d3c8;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: #f5f1e8;
  font-family: var(--font-sans);
}
::selection { background: #f5f1e8; color: #050505; }

.noise::before {
  content: '';
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 50;
  opacity: .12;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
}

.video-card:hover .card-glow { opacity: 1; transform: scale(1.02); }
.video-card:hover .play-dot { transform: translateX(4px); }
