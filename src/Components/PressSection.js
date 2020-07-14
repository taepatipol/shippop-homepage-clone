import React from 'react'
import './PressSection.css'

function PressSection() {
  return (
    <div className="press-section">
      <h2>คุณอาจเคยพบเรามาบ้าง</h2>
      <h3 style={{marginBottom:25}}>ลูกค้าบางท่าน อาจจะเคยพบเจอเรามาก่อนจากแหล่งต่าง ๆ นี้</h3>
      <div className="press-box">
        <img alt="AIS The StartUP" src="//www.shippop.com/assets/images/frontpage/press_ais.png?v=1496763786"/>
        <img alt="ZipEvent" src="//www.shippop.com/assets/images/frontpage/press_zipevent.png?v=1496763786"/>
        <img alt="blognone" src="//www.shippop.com/assets/images/frontpage/press_blognone.png?v=1496763786"/>
        <img alt="techsauce" src="//www.shippop.com/assets/images/frontpage/press_techsauce.png?v=1496763786"/>
        <img alt="เว็บแบไต๋" src="//www.shippop.com/assets/images/frontpage/press_beartai.png?v=1496763786"/>
        <img alt="ผู้จัดการ" src="//www.shippop.com/assets/images/frontpage/press_manager.png?v=1496763786"/>
        <img alt="กรุงเทพธุรกิจ" src="//www.shippop.com/assets/images/frontpage/press_bangkokbiz.png?v=1496763786"/>
      </div>
    </div>
  )
}

export default PressSection