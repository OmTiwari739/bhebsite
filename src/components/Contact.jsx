import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

function Toast({ toast }) {
    if (!toast) return null
    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: toast.type === 'success' ? '#09192e' : '#7f1d1d',
            color: 'white',
            padding: '16px 28px',
            borderRadius: '10px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            zIndex: 9999,
            minWidth: '280px',
            borderLeft: `4px solid ${toast.type === 'success' ? '#c9983a' : '#ef4444'}`,
            animation: 'fadeInUp 0.3s ease',
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '15px',
            fontWeight: '600'
        }}>
            <span style={{ fontSize: '22px' }}>
                {toast.type === 'success' ? '✅' : '❌'}
            </span>
            <div>
                <div style={{ fontWeight: '700', marginBottom: '2px' }}>
                    {toast.type === 'success' ? 'Enquiry Sent!' : 'Failed to Send'}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.8, fontWeight: '400' }}>
                    {toast.message}
                </div>
            </div>
        </div>
    )
}

function Contact() {
    const form = useRef()
    const [toast, setToast] = useState(null)
    const [loading, setLoading] = useState(false)

    const showToast = (type, message) => {
        setToast({ type, message })
        setTimeout(() => setToast(null), 4000)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs.sendForm(
            'service_t596jtn',
            'template_cinvujo',
            form.current,
            'fKIMfy5yuEo0J339_'
        ).then(
            () => {
                setLoading(false)
                showToast('success', 'We will contact you shortly.')
                form.current.reset()
            },
            (error) => {
                setLoading(false)
                showToast('error', 'Please try calling us directly.')
                console.log(error.text)
            }
        )
    }

    return (
        <div className="contact" id="contact">
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
            `}</style>

            <Toast toast={toast} />

            <div className="container">
                <div className="section-tag" style={{color:"var(--gold)", background:"rgba(201,152,58,0.1)"}}>Get In Touch</div>
                <h2>Contact Us</h2>
                <p style={{color:"var(--text-mid)", marginTop:"8px", fontSize:"16px"}}>
                    Reach out to us for enquiries or security solutions.
                </p>

                {/* Contact Cards */}
                <div className="contact-grid">
                    <div className="contact-card">
                        <div style={{fontSize:"32px", marginBottom:"10px"}}>👤</div>
                        <h3>A. L. Tiwari</h3>
                        <p>Founder & Proprietor</p>
                        <p><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{display:"inline",verticalAlign:"middle",marginRight:"5px"}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg><a href="tel:9821165230">9821165230</a></p>
                    </div>
                    <div className="contact-card">
                        <div style={{fontSize:"32px", marginBottom:"10px"}}>🛡️</div>
                        <h3>S. Shukla</h3>
                        <p>Security Supervisor</p>
                        <p><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{display:"inline",verticalAlign:"middle",marginRight:"5px"}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg><a href="tel:9821366774">9821366774</a></p>
                    </div>
                    <div className="contact-card">
                        <div style={{fontSize:"32px", marginBottom:"10px"}}>🏢</div>
                        <h3>Office Contact</h3>
                        <p>Om Protection and Allied Services</p>
                        <p style={{wordBreak:"break-all", fontSize:"13px"}}>📧 <a href="mailto:saineek4122@gmail.com" style={{wordBreak:"break-all"}}>saineek4122@gmail.com</a></p>
                        <p>📍 Mira Road, Mumbai, Maharashtra</p>
                    </div>
                </div>

                {/* EmailJS Form — uncomment karo jab form chahiye ho future mein */}
                {/*
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="text" name="phone" placeholder="Phone Number" required />
                    <textarea name="message" placeholder="How can we help you?" required></textarea>
                    <button className="btn" type="submit" disabled={loading} style={{opacity: loading ? 0.7 : 1}}>
                        {loading ? 'Sending...' : 'Send Enquiry →'}
                    </button>
                </form>
                */}

            </div>
        </div>
    )
}

export default Contact