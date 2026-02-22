import { useState } from "react"
import client1 from "../assets/client1.jpg"
import ritu_juhu_rd_3 from "../assets/ritu_juhu_rd_3.jpg"
import chheda_dal_mill_jp_road_andheri from "../assets/chheda_dal_mill_jp_road_andheri.jpg"

// ✅ YAHAN PE APNE CLIENTS ADD KARO
// Bas naya object add karo { img, name, location }
// Jitne chahiye utne add karo!
const clients = [
  { img: client1, name: "Client Name 1", location: "Mumbai, Maharashtra" },
  { img: ritu_juhu_rd_3, name: "Ritu Apartment", location: "Juhu, Mumbai, Maharashtra" },
  { img: chheda_dal_mill_jp_road_andheri, name: "Chheda Dal Mill", location: "J.P. Road, Andheri, Mumbai" },
]

// Ek row mein kitne cards — 4 columns = 1 row = 4 clients
const ROW_SIZE = 4

function Clients(){
  const [showAll, setShowAll] = useState(false)

  const visibleClients = showAll ? clients : clients.slice(0, ROW_SIZE)
  const hasMore = clients.length > ROW_SIZE

  const cardStyle = {
    background:"rgba(255,255,255,0.05)",
    borderRadius:"14px",
    overflow:"hidden",
    border:"1px solid rgba(201,152,58,0.2)",
    transition:"transform 0.3s, box-shadow 0.3s",
    cursor:"default"
  }

  return (
    <div id="clients" className="clients">
      <div className="container">
        <div className="section-tag" style={{background:"rgba(201,152,58,0.18)"}}>Trusted By Many</div>
        <h2>Our Clients</h2>
        <p style={{color:"rgba(255,255,255,0.6)", marginTop:"8px", fontSize:"16px"}}>
          Serving industries across Maharashtra with pride.
        </p>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",
          gap:"28px",
          marginTop:"50px"
        }}>
          {visibleClients.map((client, i) => (
            <div key={i} style={cardStyle}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)"
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <div style={{height:"170px", overflow:"hidden"}}>
                <img
                  src={client.img}
                  alt={client.name}
                  style={{width:"100%", height:"100%", objectFit:"cover"}}
                />
              </div>
              <div style={{padding:"16px 18px"}}>
                <h3 style={{
                  margin:"0 0 6px", fontSize:"16px",
                  color:"white", fontFamily:"'Cormorant Garamond', serif"
                }}>
                  {client.name}
                </h3>
                <p style={{
                  margin:0, fontSize:"13px",
                  color:"rgba(201,152,58,0.85)",
                  display:"flex", alignItems:"center", gap:"5px"
                }}>
                  📍 {client.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {hasMore && (
          <div style={{textAlign:"center", marginTop:"40px"}}>
            <button
              onClick={() => setShowAll(v => !v)}
              style={{
                background:"transparent",
                border:"2px solid rgba(201,152,58,0.6)",
                color:"rgba(201,152,58,0.9)",
                padding:"12px 32px",
                borderRadius:"8px",
                cursor:"pointer",
                fontSize:"15px",
                fontWeight:"600",
                fontFamily:"'Nunito Sans', sans-serif",
                letterSpacing:"0.5px",
                transition:"all 0.25s",
                display:"inline-flex",
                alignItems:"center",
                gap:"8px"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(201,152,58,0.15)"
                e.currentTarget.style.borderColor = "rgba(201,152,58,1)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "rgba(201,152,58,0.6)"
              }}
            >
              {showAll ? "▲ Show Less" : `▼ View All Clients (${clients.length})`}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Clients