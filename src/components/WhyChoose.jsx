function WhyChoose(){

  const reasons = [
    { icon:"🎖️", title:"Highly Trained Personnel", desc:"All our security staff undergoes rigorous training and background verification before deployment." },
    { icon:"🕐", title:"24/7 Reliable Protection", desc:"Round-the-clock security coverage with no gaps — day, night, weekends and holidays." },
    { icon:"📋", title:"Licensed & Compliant", desc:"Fully registered and compliant with all Maharashtra government security regulations." },
    { icon:"👔", title:"Professional Supervision", desc:"Dedicated supervisors monitor every site to ensure discipline and performance standards." },
    { icon:"⚡", title:"Quick Deployment", desc:"We deploy trained security personnel at your location within shortest possible time." },
    { icon:"🤝", title:"Trusted by 200+ Clients", desc:"Decade-long relationships with industries, corporates and residential complexes across Maharashtra." },
  ]

  return (
    <div className="why">
      <div className="container">
        <div className="section-tag">Why Us</div>
        <h2>Why Choose Om Protection and Allied Services?</h2>
        <p style={{color:"var(--text-mid)", marginTop:"8px", fontSize:"16px"}}>
          What sets us apart from the rest.
        </p>

        <div className="why-container">
          {reasons.map((r, i) => (
            <div className="why-box" key={i}>
              <div style={{fontSize:"32px", marginBottom:"12px"}}>{r.icon}</div>
              <h3 style={{margin:"0 0 8px", color:"var(--navy)", fontSize:"18px"}}>{r.title}</h3>
              <p style={{margin:0, color:"var(--text-mid)", fontSize:"14.5px", lineHeight:"1.65"}}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChoose