function WhyChoose(){

  const reasons = [
    { icon:"🎖️", title:"Highly Trained Personnel", desc:"All our security staff undergoes rigorous training and background verification before deployment." },
    { icon:"🕐", title:"24/7 Reliable Protection", desc:"Round-the-clock security coverage with no gaps — day, night, weekends and holidays." },
    { icon:"📋", title:"Licensed & Compliant", desc:"Fully registered and compliant with all Maharashtra government security regulations." },
    { icon:"👔", title:"Professional Supervision", desc:"Dedicated supervisors monitor every site to ensure discipline and performance standards." },
    { icon:"⚡", title:"Quick Deployment", desc:"We deploy trained security personnel at your location within shortest possible time." },
    { icon:"🤝", title:"Trusted by 200+ Clients", desc:"Decade-long relationships with industries, corporates and residential complexes across Maharashtra." },
  ]

  const Card = ({r, i}) => (
    <div className="why-box" key={i}>
      <div style={{fontSize:"32px", marginBottom:"12px"}}>{r.icon}</div>
      <h3 style={{margin:"0 0 8px", color:"var(--navy)", fontSize:"18px"}}>{r.title}</h3>
      <p style={{margin:0, color:"var(--text-mid)", fontSize:"14.5px", lineHeight:"1.65"}}>{r.desc}</p>
    </div>
  )

  return (
    <div className="why">
      <style>{`
        .why-row1 { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin-top:50px; }
        .why-row2 { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; margin:28px auto 0; max-width:100%; }
        @media (max-width:1024px){
          .why-row1 { grid-template-columns:repeat(2,1fr); }
          .why-row2 { grid-template-columns:repeat(2,1fr); max-width:100%; }
        }
        @media (max-width:768px){
          .why-row1 { grid-template-columns:1fr; }
          .why-row2 { grid-template-columns:1fr; max-width:100%; }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">Why Us</div>
        <h2>Why Choose Om Protection and Allied Services?</h2>
        <p style={{color:"var(--text-mid)", marginTop:"8px", fontSize:"16px"}}>
          What sets us apart from the rest.
        </p>

        <div className="why-row1">
          {reasons.slice(0,3).map((r,i) => <Card r={r} i={i} key={i}/>)}
        </div>
        <div className="why-row2">
          {reasons.slice(3).map((r,i) => <Card r={r} i={i} key={i}/>)}
        </div>
      </div>
    </div>
  )
}

export default WhyChoose