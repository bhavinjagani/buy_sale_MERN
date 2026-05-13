import { Link } from 'react-router-dom';

const footerStyle = {
  background: 'linear-gradient(160deg, #0f0c29, #1a1a3e, #24243e)',
  color: '#cbd5e1',
  fontFamily: "'Segoe UI', sans-serif",
};

const headingStyle = {
  color: '#ffffff',
  fontWeight: 700,
  fontSize: '1rem',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  marginBottom: '1.2rem',
  position: 'relative',
  paddingBottom: '0.6rem',
};

const headingUnderline = {
  content: '""',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: 32,
  height: 3,
  borderRadius: 4,
  background: 'linear-gradient(90deg, #6963ff, #a78bfa)',
};

const linkStyle = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  transition: 'color 0.2s',
  marginBottom: '0.65rem',
};

const dividerStyle = {
  border: 'none',
  borderTop: '1px solid rgba(255,255,255,0.07)',
  margin: 0,
};

const socialBtnStyle = (color) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  borderRadius: '50%',
  background: color,
  color: '#fff',
  fontSize: '0.95rem',
  marginRight: 8,
  textDecoration: 'none',
  transition: 'transform 0.2s, opacity 0.2s',
});

const FooterLink = ({ to, icon, children }) => (
  <li>
    <Link
      to={to}
      style={linkStyle}
      onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
      onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
    >
      {icon && <i className={`fa fa-${icon}`} style={{ width: 14, opacity: 0.6 }}></i>}
      {children}
    </Link>
  </li>
);

const SectionHeading = ({ children }) => (
  <div style={{ position: 'relative', paddingBottom: '0.6rem', marginBottom: '1.4rem' }}>
    <h6 style={headingStyle}>{children}</h6>
    <span style={{ ...headingUnderline, position: 'absolute', bottom: 0, left: 0 }}></span>
  </div>
);

export default function Footer() {
  return (
    <footer style={footerStyle}>

      {/* ── Top newsletter strip ── */}
      <div style={{ background: 'rgba(105,99,255,0.18)', borderBottom: '1px solid rgba(105,99,255,0.25)', padding: '20px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 mb-3 mb-lg-0">
              <h5 style={{ color: '#fff', fontWeight: 700, marginBottom: 4 }}>
                <i className="fa fa-tag mr-2" style={{ color: '#a78bfa' }}></i>
                Post your ad for free today!
              </h5>
              <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>
                Reach millions of buyers across India — vehicles, property, electronics & more.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 text-lg-right">
              <Link
                to="/postads"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #6963ff, #a78bfa)',
                  color: '#fff',
                  padding: '10px 28px',
                  borderRadius: 30,
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 16px rgba(105,99,255,0.35)',
                }}
              >
                Post Free Ad &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer columns ── */}
      <div className="container" style={{ padding: '52px 12px 36px' }}>
        <div className="row">

          {/* Brand + social */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{
                background: 'linear-gradient(135deg, #6963ff, #a78bfa)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1.3rem',
                padding: '4px 14px',
                borderRadius: 8,
                marginRight: 10,
                letterSpacing: '0.03em',
              }}>B</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.25rem' }}>Buynsale</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.4rem' }}>
              United State's trusted classified ads platform. Buy and sell anything — vehicles, properties, electronics, furniture, and more.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <a href="https://www.facebook.com/buynsaleofficial" target="_blank" rel="noreferrer"
                style={socialBtnStyle('#3b5998')}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://twitter.com/buyn_sale" target="_blank" rel="noreferrer"
                style={socialBtnStyle('#1da1f2')}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/buynsale_official/" target="_blank" rel="noreferrer"
                style={socialBtnStyle('linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)')}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC9ws_9_IeJuV4rYWyFcMfIQ" target="_blank" rel="noreferrer"
                style={socialBtnStyle('#ff0000')}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-5">
            <SectionHeading>Quick Links</SectionHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <FooterLink to="/" icon="home">Home</FooterLink>
              <FooterLink to="/postads" icon="plus-circle">Post Ad</FooterLink>
              <FooterLink to="/myaccount" icon="user">My Account</FooterLink>
              <FooterLink to="/login" icon="sign-in">Login</FooterLink>
              <FooterLink to="/signup" icon="user-plus">Register</FooterLink>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6 mb-5">
            <SectionHeading>Popular Categories</SectionHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <FooterLink to="/ads/category/Vehicles" icon="car">Vehicles</FooterLink>
              <FooterLink to="/ads/category/Real Estate" icon="building">Real Estate</FooterLink>
              <FooterLink to="/ads/category/Electronics" icon="mobile">Electronics</FooterLink>
              <FooterLink to="/ads/category/Furniture" icon="bed">Furniture</FooterLink>
              <FooterLink to="/ads/category/Services" icon="wrench">Services</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 mb-5">
            <SectionHeading>Contact Us</SectionHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1rem' }}>
              <li style={{ ...linkStyle, marginBottom: '0.8rem' }}>
                <i className="fa fa-map-marker" style={{ color: '#a78bfa', width: 16 }}></i>
                <span>Dallas, Texas, United State</span>
              </li>
              <li style={{ ...linkStyle, marginBottom: '0.8rem' }}>
                <i className="fa fa-phone" style={{ color: '#a78bfa', width: 16 }}></i>
                <span>+1 98765 43210</span>
              </li>
              <li style={{ ...linkStyle, marginBottom: '0.8rem' }}>
                <i className="fa fa-envelope" style={{ color: '#a78bfa', width: 16 }}></i>
                <span>support@buynsale.com</span>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Link to="/about" style={{ ...linkStyle, margin: 0, fontSize: '0.8rem', color: '#64748b' }}>About</Link>
              <span style={{ color: '#334155' }}>·</span>
              <Link to="/terms" style={{ ...linkStyle, margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Terms</Link>
              <span style={{ color: '#334155' }}>·</span>
              <Link to="/privacy" style={{ ...linkStyle, margin: 0, fontSize: '0.8rem', color: '#64748b' }}>Privacy</Link>
              <span style={{ color: '#334155' }}>·</span>
              <Link to="/faq" style={{ ...linkStyle, margin: 0, fontSize: '0.8rem', color: '#64748b' }}>FAQ</Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <hr style={dividerStyle} />
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-lg-6 col-12" style={{ color: '#475569', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()}&nbsp;
            <span style={{ color: '#a78bfa', fontWeight: 600 }}>Buynsale</span>
            . All rights reserved. Made with <i className="fa fa-heart" style={{ color: '#ef4444', fontSize: '0.75rem' }}></i> 
          </div>
          <div className="col-lg-6 col-12 text-lg-right mt-2 mt-lg-0" style={{ fontSize: '0.82rem', color: '#475569' }}>
            <Link to="/terms" style={{ color: '#475569', textDecoration: 'none', marginRight: 16 }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
              Terms of Use
            </Link>
            <Link to="/privacy" style={{ color: '#475569', textDecoration: 'none', marginRight: 16 }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
              Privacy Policy
            </Link>
            <Link to="/faq" style={{ color: '#475569', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
              FAQ
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
