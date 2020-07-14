import React from 'react'
import './MobileNavbar.css'

function MobileNavbar() {
  return (
    <div className="mobile-navbar">
      <img style={{marginLeft:10}} alt="SHIPPOP" height="32" src="//www.shippop.com/assets/images/frontpage/logo_shippop.png?v=1.03498"/>
      <div className="right-mobile-navbar">
        <a href="https://www.shippop.com/tracking/"><img className="nav-icon" src="//www.shippop.com/assets/images/frontpage/icon_service_07.png?v=1496789498" alt="จัดส่งง่ายขึ้น"/></a>
        <img className="nav-icon" src="https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png" alt="profile"/>
        <img className="nav-icon" src="https://lh3.googleusercontent.com/proxy/lFIT8_36p_Cxa-ddTardyA9WMXtbL2FrO43Kdja67khQV3ZdoQcvBH-BGarXiiBOIm3b-K502olG96ZxiMaqRHBB5JOUtinWnGOmxpMievBMnSdEnD8" alt="hamburger"/>
      </div>
    </div>
  )
}

export default MobileNavbar