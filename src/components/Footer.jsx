function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company */}
        <div>
          <h3>Om Protection and Allied Services</h3>
          <p>
            Om Protection and Allied Services provides professional and reliable
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
          <p>📞 <a href="tel:9821165230" className="footer-link">9821165230</a></p>
          <p>📞 <a href="tel:9821366774" className="footer-link">9821366774</a></p>
          <p>📧 <a href="mailto:omprotectionandalliedservices@gmail.com" className="footer-link">omprotectionandalliedservices@gmail.com</a></p>
          <p>📍 Maharashtra, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Om Protection and Allied Services. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
