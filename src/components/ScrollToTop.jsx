import { useState, useEffect } from 'react'

function ScrollToTop(){
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if(!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
      style={{
        position:'fixed',
        bottom:'140px',
        right:'20px',
        background:'#09192e',
        color:'#c9983a',
        border:'2px solid rgba(201,152,58,0.5)',
        borderRadius:'50%',
        width:'46px',
        height:'46px',
        fontSize:'20px',
        cursor:'pointer',
        zIndex:998,
        boxShadow:'0 6px 20px rgba(0,0,0,0.35)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      ↑
    </button>
  )
}

export default ScrollToTop