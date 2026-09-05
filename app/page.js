export default function Home() {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <section id="home" className="hero-section glass">
        <h1 className="hero-title">[Judul Besar Website Edukasi Di Sini]</h1>
        <p className="hero-description">
          [Deskripsi singkat mengenai tujuan website edukasi ini. Anda dapat mengisinya dengan
          kalimat yang menarik agar pengunjung tertarik untuk belajar di sini.]
        </p>
        <button className="hero-button">[Tombol Aksi Utama]</button>
      </section>

      {/* Main Content Section */}
      <section id="materi" className="content-section">
        <h2 className="section-title">[Judul Area Materi Pembelajaran]</h2>
        <div className="card-grid">
          {/* Placeholder for Learning Materials */}
          <div className="card glass">
            <div className="card-image-placeholder">Gambar</div>
            <h3>[Judul Materi 1]</h3>
            <p>[Deskripsi singkat materi 1 mengenai topik yang akan dibahas]</p>
          </div>
          <div className="card glass">
            <div className="card-image-placeholder">Gambar</div>
            <h3>[Judul Materi 2]</h3>
            <p>[Deskripsi singkat materi 2 mengenai topik yang akan dibahas]</p>
          </div>
          <div className="card glass">
            <div className="card-image-placeholder">Gambar</div>
            <h3>[Judul Materi 3]</h3>
            <p>[Deskripsi singkat materi 3 mengenai topik yang akan dibahas]</p>
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">[Tentang Kami]</h2>
        <div className="card glass" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3>[Visi & Misi]</h3>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
            [Placeholder teks tentang kami. Di sini Anda dapat menjelaskan latar belakang, 
            tujuan, serta visi dan misi dari website edukasi Anda. Bagian ini penting 
            untuk membangun kepercayaan dengan pengunjung.]
          </p>
        </div>
      </section>
    </main>
  );
}
