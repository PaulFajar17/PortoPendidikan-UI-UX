import "./globals.css";
import { Outfit } from "next/font/google";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Website Edukasi - [Placeholder Judul]",
  description: "[Placeholder Deskripsi Website Edukasi]",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={font.className}>
        <header className="navbar glass">
          <div className="nav-container">
            <div className="logo">[Logo / Judul Situs]</div>
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#materi">Materi</a>
              <a href="#tentang">Tentang</a>
              <a href="#kontak">Kontak</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer" id="kontak">
          <div className="footer-container">
            <div className="footer-section">
              <h3>[Judul Situs]</h3>
              <p>Platform pembelajaran modern untuk masa depan yang lebih cerah.</p>
            </div>
            <div className="footer-section">
              <h4>Navigasi</h4>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#materi">Materi</a>
                <a href="#tentang">Tentang</a>
                <a href="#kontak">Kontak</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Sosial Media</h4>
              <div className="footer-links">
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter / X</a>
                <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} [Placeholder Nama]. Semua hak dilindungi.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
