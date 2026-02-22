function FloatingButtons(){
  return (
    <>
      {/* Call Button */}
      <a
        href="tel:9821165230"
        style={{
          position:"fixed",
          bottom:"90px",
          right:"20px",
          background:"#09192e",
          color:"white",
          padding:"14px 20px",
          borderRadius:"50px",
          textDecoration:"none",
          fontWeight:"700",
          fontFamily:"DM Sans, sans-serif",
          fontSize:"13px",
          letterSpacing:"0.5px",
          boxShadow:"0 6px 20px rgba(0,0,0,0.35)",
          display:"flex",
          alignItems:"center",
          gap:"7px",
          border:"2px solid rgba(201,152,58,0.4)",
          transition:"transform 0.2s",
          zIndex:999
        }}
      >
        📞 Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919821165230"
        target="_blank"
        style={{
          position:"fixed",
          bottom:"20px",
          right:"20px",
          background:"#25D366",
          color:"white",
          padding:"14px 20px",
          borderRadius:"50px",
          textDecoration:"none",
          fontWeight:"700",
          fontFamily:"DM Sans, sans-serif",
          fontSize:"13px",
          letterSpacing:"0.5px",
          boxShadow:"0 6px 20px rgba(37,211,102,0.4)",
          display:"flex",
          alignItems:"center",
          gap:"7px",
          transition:"transform 0.2s",
          zIndex:999
        }}
      >
        💬 WhatsApp
      </a>
    </>
  )
}

export default FloatingButtons
