import { useState, useRef, useEffect } from 'react'

function Home({ openModal }) {
    const [showCallMenu, setShowCallMenu] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowCallMenu(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('touchstart', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('touchstart', handleClickOutside)
        }
    }, [])

    const callLinkStyle = {
        display: 'block',
        padding: '16px 22px',
        color: '#09192e',
        textDecoration: 'none',
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: '15px',
        fontWeight: '600',
        transition: 'background 0.2s',
        WebkitTapHighlightColor: 'transparent'
    }

    return (
        <div className="hero" id="home" style={{overflow: 'visible'}}>
            <style>{`
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .call-link:hover, .call-link:active { background: #f7f4ee !important; }
                .hero-buttons { position: relative; z-index: 999; }
            `}</style>

            <div className="container" style={{position: 'relative'}}>

                <div className="section-tag">Maharashtra's Trusted Security Partner</div>

                <h1>Professional Security Solutions <span>You Can Trust</span></h1>
                <p>
                    Om Protection and Allied Services delivers highly trained security
                    personnel ensuring safety, discipline and 24/7 protection across Maharashtra.
                </p>

                {/* HERO BUTTONS */}
                <div className="hero-buttons" style={{position: 'relative', zIndex: 999}}>
                    <a href="https://wa.me/919821165230" className="btn">
                        💬 WhatsApp Enquiry
                    </a>

                    {/* Call Dropdown */}
                    <div
                        ref={dropdownRef}
                        style={{ position: 'relative', display: 'inline-block', zIndex: 999 }}
                    >
                        <button
                            className="btn-outline"
                            onClick={() => setShowCallMenu(v => !v)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                        >
                            📞 Call Us {showCallMenu ? '▴' : '▾'}
                        </button>

                        {showCallMenu && (
                            <div style={{
                                position: 'absolute',
                                top: 'calc(100% + 10px)',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'white',
                                borderRadius: '12px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                                overflow: 'hidden',
                                minWidth: '240px',
                                width: 'max-content',
                                border: '1px solid rgba(201,152,58,0.3)',
                                zIndex: 99999,
                                animation: 'fadeInDown 0.2s ease'
                            }}>
                                <a
                                    href="tel:9821165230"
                                    style={{...callLinkStyle, borderBottom: '1px solid #f0f0f0'}}
                                    className="call-link"
                                    onClick={() => setShowCallMenu(false)}
                                >
                                    👤 A. L. Tiwari
                                    <div style={{ fontSize: '13px', color: '#888', fontWeight: '400', marginTop: '4px' }}>
                                        Proprietor — 9821165230
                                    </div>
                                </a>
                                <a
                                    href="tel:9821366774"
                                    style={callLinkStyle}
                                    className="call-link"
                                    onClick={() => setShowCallMenu(false)}
                                >
                                    🛡️ S. Shukla
                                    <div style={{ fontSize: '13px', color: '#888', fontWeight: '400', marginTop: '4px' }}>
                                        Supervisor — 9821366774
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Trust badges */}
                <div className="hero-stats" style={{position: 'relative', zIndex: 1}}>
                    <div><h2>10+</h2><p>Years Experience</p></div>
                    <div><h2>500+</h2><p>Security Personnel</p></div>
                    <div><h2>200+</h2><p>Clients Served</p></div>
                    <div><h2>24/7</h2><p>Round-the-Clock</p></div>
                </div>

            </div>
        </div>
    )
}

export default Home