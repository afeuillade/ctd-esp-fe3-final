import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='imagen-dh'>
        <img src="./images/DH.png" alt='DH-logo' />
      </div>
      <div className='iconos'>
      <img src="./images/ico-facebook.png" alt='DH-logo' width="22" height="22" className="bi bi-facebook m-1" viewBox="0 0 16 16"/>
      <img src="./images/ico-instagram.png" alt='instagram-logo' width="22" height="22" className="bi bi-instagram m-1"viewBox="0 0 16 16"/>
      <img src="./images/ico-tiktok.png" alt='tiktok-logo' width="22" height="22" className="bi bi-tiktok m-1"viewBox="0 0 16 16"/>
      <img src="./images/ico-whatsapp.png" alt='whatsapp-logo' width="22" height="22"  className="bi bi-whatsapp m-1"viewBox="0 0 16 16"/>
      </div>
    </footer>
  )
}

export default Footer
