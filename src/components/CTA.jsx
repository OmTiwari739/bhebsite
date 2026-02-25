import { useState, useRef, useEffect } from 'react'

function CTA(){
  const [showCallMenu, setShowCallMenu] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCallMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const callLinkStyle = {
    display: 'block',
    padding: '14px 20px',
    color: '#09192e',
    textDecoration: 'none',
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: '14.5px',
    fontWeight: '600',
    transition: 'background 0.2s',
    WebkitTapHighlightColor: 'transparent'
  }

  return (
    <div className="cta">
      <style>{`
        .cta-call-link:hover, .cta-call-link:active { background: #f7f4ee !important; }
      `}</style>

      <div className="container" style={{position:"relative", zIndex:1}}>
        <div className="section-tag" style={{background:"rgba(201,152,58,0.2)"}}>Get Started</div>
        <h2 style={{fontSize:"44px", marginBottom:"14px"}}>Need Professional Security Services?</h2>
        <p>Contact us today for reliable, trusted and disciplined security solutions across Maharashtra.</p>

        <div style={{display:"flex", gap:"15px", justifyContent:"center", flexWrap:"wrap", marginTop:"10px"}}>
          <a href="https://wa.me/919821165230?text=Hello%2C%20I%20want%20to%20enquire%20about%20security%20services%20from%20Om%20Protection%20and%20Allied%20Services." className="btn">💬 WhatsApp Us</a>

          {/* Call Dropdown */}
          <div ref={dropdownRef} style={{position:"relative", display:"inline-block"}}>
            <button
              className="btn-outline"
              onClick={() => setShowCallMenu(v => !v)}
              style={{display:"flex", alignItems:"center", gap:"8px", cursor:"pointer"}}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{display:"inline",verticalAlign:"middle",marginRight:"6px"}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> Call Us {showCallMenu ? '▴' : '▾'}
            </button>

            {showCallMenu && (
              <div style={{
                position:"absolute",
                bottom:"calc(100% + 10px)",
                left:"50%",
                transform:"translateX(-50%)",
                background:"white",
                borderRadius:"10px",
                boxShadow:"0 12px 40px rgba(0,0,0,0.25)",
                overflow:"hidden",
                minWidth:"230px",
                border:"1px solid rgba(201,152,58,0.25)",
                zIndex:100,
                animation:"fadeInUp 0.2s ease"
              }}>
                <a href="tel:9821165230" className="cta-call-link"
                  style={{...callLinkStyle, borderBottom:"1px solid #f0f0f0"}}
                  onClick={() => setShowCallMenu(false)}
                >
                  👤 A. L. Tiwari
                  <div style={{fontSize:"13px", color:"#888", fontWeight:"400", marginTop:"3px"}}>
                    Proprietor — 9821165230
                  </div>
                </a>
                <a href="tel:9821366774" className="cta-call-link"
                  style={callLinkStyle}
                  onClick={() => setShowCallMenu(false)}
                >
                  🛡️ S. Shukla
                  <div style={{fontSize:"13px", color:"#888", fontWeight:"400", marginTop:"3px"}}>
                    Supervisor — 9821366774
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity:0; transform:translateX(-50%) translateY(8px); }
          to   { opacity:1; transform:translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default CTA