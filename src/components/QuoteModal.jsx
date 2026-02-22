function QuoteModal({show, close}){
  if(!show) return null

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-box" onClick={e=>e.stopPropagation()}>
        <div className="section-tag" style={{marginBottom:"12px"}}>Quick Enquiry</div>
        <h2 style={{marginTop:"8px"}}>Request Security Service</h2>

        <input placeholder="Your Full Name"/>
        <input placeholder="Phone Number"/>
        <textarea placeholder="Describe your security requirement..." style={{minHeight:"100px", marginTop:"9px"}}></textarea>

        <div style={{marginTop:"18px", display:"flex", gap:"12px"}}>
          <button className="btn">Submit Enquiry</button>
          <button className="close-btn" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default QuoteModal
