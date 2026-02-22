import owner from "../assets/owner.jpg"
import owner2 from "../assets/owner2.jpg"
import owner3 from "../assets/owner3.jpg"


function About(){
  return (
    <div id="about" className="about-section">
      <div className="container about-grid">

        {/* Owner Photo */}
        <div className="about-image">
          <img src={owner3} alt="Proprietor"/>
        </div>

        {/* Director Message */}
        <div className="about-content">
          <div className="section-tag" style={{color:"var(--gold)", background:"rgba(201,152,58,0.1)"}}>About Us</div>
          <h2>Message from the Proprietor</h2>

          <p className="director-message">
            "Our mission is to provide reliable, disciplined, and highly
            professional security services that ensure complete safety and
            peace of mind for our clients. We believe that security is not just
            a service — it is a responsibility."
          </p>

          <h3 style={{color:"var(--navy)", marginBottom:"4px"}}>Mr. Amritlal Tiwari</h3>
          <p style={{color:"var(--text-mid)", margin:"0 0 20px", fontSize:"15px"}}>Founder & Proprietor, Om Protection and Allied Services</p>

          <div className="about-stats">
            <div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Security Personnel</p>
            </div>
            <div>
              <h3>200+</h3>
              <p>Clients Served</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
