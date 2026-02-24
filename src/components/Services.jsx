import { FaUserShield, FaUserTie, FaVideo, FaShieldAlt, FaEye } from "react-icons/fa"

function Services(){

  const services = [
    {icon:<FaUserShield size={42}/>, title:"Security Guards", desc:"Professionally trained guards ensuring safety, access control and discipline on premises round the clock."},
    {icon:<FaUserTie size={42}/>, title:"Security Officers", desc:"Experienced officers managing security operations for corporate and industrial establishments."},
    {icon:<FaShieldAlt size={42}/>, title:"Security Supervisors", desc:"Senior supervisors who oversee and coordinate all security activities with precision and authority."},
    {icon:<FaEye size={42}/>, title:"Vigilance Officers", desc:"Specialized vigilance personnel deployed for sensitive areas requiring heightened awareness."},
    {icon:<FaVideo size={42}/>, title:"CCTV Services", desc:"Complete CCTV installation, configuration and real-time monitoring solutions for your premises."}
  ]

  const linkStyle = {
    display:"inline-block", marginTop:"18px", padding:"9px 20px",
    background:"rgba(201,152,58,0.1)", color:"var(--gold)",
    border:"1px solid rgba(201,152,58,0.35)", borderRadius:"6px",
    fontSize:"13.5px", fontWeight:"700", textDecoration:"none",
    fontFamily:"'Nunito Sans', sans-serif", transition:"all 0.2s"
  }

  const Card = ({s, i}) => (
    <div className="service-card" key={i}>
      <div className="service-icon">{s.icon}</div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <a href="https://wa.me/919821165230?text=Hello%2C%20I%20want%20to%20enquire%20about%20security%20services%20from%20Om%20Protection%20and%20Allied%20Services." style={linkStyle}
        onMouseEnter={e=>{e.currentTarget.style.background="var(--gold)";e.currentTarget.style.color="var(--navy)"}}
        onMouseLeave={e=>{e.currentTarget.style.background="rgba(201,152,58,0.1)";e.currentTarget.style.color="var(--gold)"}}
      >Get a Quote →</a>
    </div>
  )

  return (
    <div id="services" className="services">
      <style>{`
        .svc-row1 { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin-top:50px; }
        .svc-row2 { display:grid; grid-template-columns:repeat(2,1fr); gap:28px; margin:28px auto 0; max-width:66%; }
        @media (max-width:768px){
          .svc-row1 { grid-template-columns:1fr; }
          .svc-row2 { grid-template-columns:1fr; max-width:100%; }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">What We Offer</div>
        <h2>Our Services</h2>
        <p style={{color:"var(--text-mid)", marginTop:"8px", fontSize:"16px"}}>
          Comprehensive security solutions tailored to your needs.
        </p>

        <div className="svc-row1">
          {services.slice(0,3).map((s,i) => <Card s={s} i={i} key={i}/>)}
        </div>
        <div className="svc-row2">
          {services.slice(3).map((s,i) => <Card s={s} i={i} key={i}/>)}
        </div>
      </div>
    </div>
  )
}

export default Services