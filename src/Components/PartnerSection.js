import React, { useState } from 'react'
import './PartnerSection.css'

function PartnerSection() {

  const [activePartner, setActivePartner] = useState('thaipost')

  const handlePartnerClick = (name) => {
    setActivePartner(name)
  }

  const logoClassName = (isActive) => {
    return isActive ? "partner-logo activated-icon" : "partner-logo"
  }

  const renderSlogan = () => {
    switch(activePartner) {
      case "thaipost":
        return "ขนส่งทั่วประเทศไทยที่ใหญ่ที่สุด"
      case "ninjavan":
        return "ขนส่งรับถึงบ้าน"
      case "lalamove":
        return "มอเตอร์ไซค์ รับส่งด่วนในกรุงเทพ"
      case "skootar":
        return "มอเตอร์ไซต์รับและส่งด่วนในกรุงเทพ"
      case "alpha":
        return "ขนส่งทั่วกรุงเทพและปริมณฑล รับของถึงหน้าบ้าน"
      case "scg-express":
        return "ขนส่งของเย็น รับของถึงหน้าบ้าน"
      default:
        return "slogan text"
    }
  }

  return (
    <div className="partner-section">
      <div className="partner-row">
        <img className={logoClassName(activePartner==="thaipost")} onClick={()=>handlePartnerClick("thaipost")} alt="thaipost" src="https://www.shippop.com/assets/images/logistic/thailandpost.png?v=1497285980"/>
        <img className={logoClassName(activePartner==="ninjavan")} onClick={()=>handlePartnerClick("ninjavan")} alt="ninjavan" src="https://www.shippop.com/assets/images/logistic/ninjavan.png?v=1497285980"/>
        <img className={logoClassName(activePartner==="lalamove")} onClick={()=>handlePartnerClick("lalamove")} alt="lalamove" src="https://www.shippop.com/assets/images/logistic/lalamove.png?v=1497285980"/>
        <img className={logoClassName(activePartner==="skootar")} onClick={()=>handlePartnerClick("skootar")} alt="scootar" src="https://www.shippop.com/assets/images/logistic/skootar.png?v=1497285980"/>
        <img className={logoClassName(activePartner==="alpha")} onClick={()=>handlePartnerClick("alpha")} alt="alpha" src="https://www.shippop.com/assets/images/logistic/alphafast.png?v=1497285980"/>
        <img className={logoClassName(activePartner==="scg-express")} onClick={()=>handlePartnerClick("scg-express")} alt="scg-express" src="https://upload.shippop.com/courier/scg-yamato-express-logo.png?v=1497285980"/>
      </div>
      <p className="partner-slogan">{ renderSlogan() }</p>
    </div>
  )
}

export default PartnerSection