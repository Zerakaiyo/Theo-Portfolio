import Navbar from './Navbar';

export default function PageShell({ children }) {
  return (
    <main className="site-bg">
      <Navbar />
      {children}
      <footer className="footer">
        <div className="container">© Theo Majer</div>
      </footer>
    </main>
  );
}
