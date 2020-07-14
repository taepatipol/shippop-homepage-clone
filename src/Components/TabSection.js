import React from 'react'
import { Button } from 'antd'
import './TabSection.css'

function TabSection() {
  return (
    <div className="tab-section">
      <div className="inner-tab-section">
        <img src="//www.shippop.com/assets/images/frontpage/service.png?v=1496788999" alt="ระบบ API สำหรับเชื่อมโยงร้านค้า"/>
        <div className="tab-data">
          <div className="tab-header">ระบบ API สำหรับเชื่อมโยงร้านค้า</div>
          <div className="tab-caption">ไม่ว่าคุณจะพัฒนาร้านค้าด้วยภาษาไหนระบบอะไร คุณก็สามารถเชื่อมต่อกับ SHIPPOP ผ่านทาง API ที่ทางเราจัดเตรียมไว้ให้ ได้เช่นกัน</div>
        </div>
        <a href="https://www.shippop.com/service/">
          <Button style={{width:182,height:50}}>เรียนรู้เพิ่มเติม</Button>
        </a>
      </div>
    </div>
  )
}

export default TabSection