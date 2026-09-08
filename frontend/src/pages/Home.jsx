import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      
      {/* 🌟 SPLIT HERO BANNER: Enhanced Rounding & Slight Translucent Depth */}
      {/* 🌟 SPLIT HERO BANNER: Enhanced Rounding & Slight Translucent Depth */}
<section 
  className="card border-0 shadow-sm p-4 p-md-5 mb-5 text-white rounded-mhenik overflow-hidden" 
  style={{ backgroundColor: 'rgb(110, 110, 110)', backdropFilter: 'blur(5px)', }}
>
  <div className="row align-items-center g-4">
    {/* 🏎️ Left Side: Performance Animation wrapper for Logo Drop-In */}
    <div className="col-md-6 text-center animate-hero-logo">
      <img 
        src="/logo.png" 
        alt="Mhenik Traders Shield Logo" 
        className="img-fluid py-2 rounded-mhenik"
        style={{ 
          maxHeight: '360px', 
          objectFit: 'contain',
          filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.2))',
          borderRadius: '20px',
        }} 
      />
    </div>

    {/* 📝 Right Side: Delayed Performance Animation wrapper for Text Slide-In */}
    <div className="col-md-6 text-center text-md-start animate-hero-text-delayed">
      <span className="badge bg-white text-mhenik-crimson fw-bold px-3 py-2 rounded-pill text-uppercase font-monospace mb-3 small tracking-wider">
        Official Inventory Platform
      </span>
      <h1 className="display-5 fw-black mb-3 text-uppercase font-monospace tracking-tight">
        MHENIK TRADERS
      </h1>
      <p className="lead text-light mb-4 fs-5 opacity-90 lh-base">
        Your trusted source for genuine automotive spare parts, mechanical components, and heavy-duty vehicle accessories.
      </p>
      <Link to="/shop" className="btn btn-mhenik-secondary rounded-mhenik btn-lg fw-bold px-5 py-3 shadow-sm text-dark text-uppercase tracking-wide rounded-3">
        Explore Inventory (4,000+ Items)
      </Link>
    </div>
  </div>
</section>

      {/* Main Profile Panel: Styled with custom glass rounding */}
      <div className="card border-0 shadow-sm p-4 p-md-5 rounded-mhenik card-mhenik-glass">
        <h2 className="h3 text-dark fw-bold border-bottom border-3 pb-2 mb-4" style={{ borderColor: '#612940' }}>
          About Our Company
        </h2>
        <p className="text-muted fs-5 lh-base">
          Welcome to <strong>Mhenik Traders</strong>. We are a premier automotive spare parts supplier dedicated to keeping fleets and personal vehicles operating at peak mechanical efficiency. Our extensive commercial stock includes a massive catalog of nearly 4,000 components carefully organized by precise manufacturing reference keys and individual product SKUs.
        </p>
        <p className="text-muted fs-5 lh-base mb-5">
          Whether you are sourcing specific engine parts, pipe frameworks, or structural body accessories, our inventory framework ensures high compatibility matching, reducing ordering downtime and delivery delays.
        </p>

        {/* Pillars Row */}
        <div className="row g-4 mb-5">
  
  {/* Column 1 */}
  <div className="col-md-4 ">
    <div className="feature-box h-100 py-2 ">
      <h5 className="fw-bold text-dark mb-">Genuine Tracking</h5>
      <p className="text-muted small mb-0">
        Every item maps to a verified catalog SKU to ensure direct vehicle compatibility.
      </p>
    </div>
  </div>

  {/* Column 2 */}
  <div className="col-md-4">
    <div className="feature-box h-100 py-2">
      <h5 className="fw-bold text-dark mb-2">Categorized Supply</h5>
      <p className="text-muted small mb-0">
        Fast discovery across structural engine segments, filtration, and custom piping assembly.
      </p>
    </div>
  </div>

  {/* Column 3 */}
  <div className="col-md-4">
    <div className="feature-box h-100 py-2">
      <h5 className="fw-bold text-dark mb-2">Direct Inquiries</h5>
      <p className="text-muted small mb-0">
        Instant verification loops connected directly to our support line over standard communication APIs.
      </p>
    </div>
  </div>

</div>

        {/* Official Channels Block */}
        <h3 className="h5 text-dark fw-bold mb-3">Official Channels & Physical Location</h3>
        <div className="p-4 rounded-3 border bg-white bg-opacity-60">
          <div className="row g-3">
            <div className="col-md-6">
              <p className="mb-2 fs-6">📍 <strong>Physical Location:</strong> Nairobi, Kenya</p>
              <p className="mb-0 fs-6">📞 <strong>Primary Phone Enquiries:</strong> +254 716 687687</p>
            </div>
            <div className="col-md-6">
              <p className="mb-2 fs-6">✉️ <strong>Corporate Email Address:</strong> mhenikt@gmail.com</p>
              <p className="mb-0 fs-6">⏱️ <strong>Operating Hours:</strong> Mon – Sat | 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      

      {/* 🗺️ LOCATION GEOLOCATION MAP CONTAINER */}
<section className="card border-0 rounded-mhenik shadow-sm p-3 p-md-4 mt-5 mb-5 bg-white rounded-3">
  <div className="container-fluid">
    
    {/* Minor sub-header context matching your typography */}
    <div className="d-flex align-items-center gap-2 mb-3 px-1">
      <i className="bi bi-map-fill text-secondary fs-5"></i>
      <span className="fw-bold text-secondary text-uppercase font-monospace small tracking-wider">
        Where to find us
      </span>
    </div>

    {/* Responsive Frame Wrapper */}
    <div 
      className="position-relative w-100 overflow-hidden rounded-3 shadow-sm" 
      style={{ 
        height: 'calc(250px + 10vw)', 
        minHeight: '280px', 
        maxHeight: '450px',
        border: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <iframe
  title="Mhenik Traders Location"
  src="https://maps.google.com/maps?q=MHENIK+TRADERS+49+Kirinyaga+Rd+Nairobi&t=&z=16&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="380"
  style={{ border: 0, borderRadius: '8px' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
    </div>

  </div>
</section>

{/* 🌐 SOCIAL MEDIA ENGAGEMENT FOOTER STRIP */}
<section className="card border-0 rounded-mhenik shadow-sm p-4 p-md-5 mt-5 mb-1 bg-white text-center rounded-3 ">
        <div className="container">
          
          {/* Headings Matching Design */}
          <h2 className="fw-bold mb-2 text-dark font-monospace" style={{ fontSize: 'calc(22px + 0.5vw)' }}>
            Follow us on social media
          </h2>
          <p className="text-muted fs-6 mb-4 font-monospace fw-semibold">
            All the latest news for you
          </p>

          {/* Flex Row Container containing interactive target nodes */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 pt-2">
            
            

            {/* 🎵 TikTok */}
            <a href="https://www.tiktok.com/@mheniktraders8?_r=1&_t=ZS-99ZSFntMUY0" target="_blank" rel="noreferrer" className="text-decoration-none social-link-item">
              <i className="bi bi-tiktok d-block fs-2 text-dark mb-1"></i>
              <span className="small fw-bold text-secondary font-monospace">TikTok</span>
            </a>

            
            

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;