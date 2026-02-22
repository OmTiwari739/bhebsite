import { FaUserShield, FaUserTie, FaVideo, FaShieldAlt, FaEye } from "react-icons/fa"

function Services(){

  const services = [
    {icon:<FaUserShield size={42}/>, title:"Security Guards", desc:"Professionally trained guards ensuring safety, access control and discipline on premises round the clock."},
    {icon:<FaUserTie size={42}/>, title:"Security Officers", desc:"Experienced officers managing security operations for corporate and industrial establishments."},
    {icon:<FaShieldAlt size={42}/>, title:"Security Supervisors", desc:"Senior supervisors who oversee and coordinate all security activities with precision and authority."},
    {icon:<FaEye size={42}/>, title:"Vigilance Officers", desc:"Specialized vigilance personnel deployed for sensitive areas requiring heightened awareness."},
    {icon:<FaVideo size={42}/>, title:"CCTV Services", desc:"Complete CCTV installation, configuration and real-time monitoring solutions for your premises."}
  ]

  return (
    <div id="services" className="services">
      <div className="container">
        <div className="section-tag">What We Offer</div>
        <h2>Our Services</h2>
        <p style={{color:"var(--text-mid)", marginTop:"8px", fontSize:"16px"}}>
          Comprehensive security solutions tailored to your needs.
        </p>

        <div className="services-grid">
          {services.map((s,i)=>(
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
