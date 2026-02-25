function PhoneIcon(){
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{display:"inline",verticalAlign:"middle",marginRight:"5px"}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company */}
        <div>
          <h3>OPAAS</h3>
          <p>
            OM Protection and Allied Services provides professional and reliable
            security solutions across Maharashtra since over a decade.
          </p>
          <p style={{marginTop:"16px", fontSize:"13px", color:"rgba(255,255,255,0.4)", letterSpacing:"1px", textTransform:"uppercase"}}>Licensed & Registered</p>
        </div>

        {/* Services */}
        <div>
          <h3>Services</h3>
          <p>Security Guards</p>
          <p>Security Officers</p>
          <p>Security Supervisors</p>
          <p>Vigilance Officers</p>
          <p>CCTV Services</p>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact Us</h3>
          <p><PhoneIcon/><a href="tel:9821165230" className="footer-link">9821165230</a></p>
          <p><PhoneIcon/><a href="tel:9821366774" className="footer-link">9821366774</a></p>
          <p>✉️ <a href="mailto:saineek4122@gmail.com" className="footer-link">saineek4122@gmail.com</a></p>
          <p>📍 Mira Road, Mumbai, Maharashtra</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Om Protection and Allied Services. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer