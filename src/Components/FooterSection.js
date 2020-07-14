import React from 'react'
import { Input, Button } from 'antd'
import './FooterSection.css'

const { Search } = Input

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="inner-footer">
        <div className="footer-col">
          <a className="a-footer-section-logo" href="https://www.shippop.com/">
            <img style={{width:160,paddingTop:10}} className="img-footer-section-logo" src="https://www.shippop.com/assets/images/logo-white.png?v=1497926693" alt="SHIPPOP"/>
            <p style={{color:'white'}}>เราคือพันธมิตรที่รวบรวมบริษัทขนส่งมาไว้ในระบบเดียว ง่ายต่อการเชื่อมต่อและเลือกใช้บริการ</p>
            <Search placeholder="กรอกอีเมล์เพื่อรับข่าวสาร" enterButton="ส่ง" />
          </a>
        </div>
        <div className="footer-col">
          <div className="footer-section-header">Sitemap</div>
          <a className="footer-section-link" href="https://www.shippop.com/">หน้าแรก</a>
          <a className="footer-section-link" href="https://www.shippop.com/service/">บริการของเรา</a>
          <a className="footer-section-link" href="https://www.shippop.com/tracking/">ติดตามพัสดุ</a>
          <a className="footer-section-link" href="https://www.shippop.com/terms/">เงื่อนไขการให้บริการ</a>
          <a className="footer-section-link" href="https://www.shippop.com/privacy/">ความเป็นส่วนตัว</a>
          <a className="footer-section-link" href="https://www.shippop.com/about/">เกี่ยวกับเรา</a>
          <a className="footer-section-link" href="https://www.shippop.com/faq/">คำถามที่พบบ่อย</a>
          <a className="footer-section-link" href="https://www.facebook.com/shippop">โปรโมชั่น</a>
          <a className="footer-section-link" href="https://www.shippop.com/jobs/">สมัครงาน</a>
        </div>
        <div className="footer-col">
          <div className="footer-section-header">กลุ่มลูกค้า</div>
          <a className="footer-section-link" href="https://www.shippop.com/">ลูกค้าทั่วไป</a>
          <a className="footer-section-link" href="https://www.shippop.com/service/">ลูกค้าธุรกิจ</a>
          <a className="footer-section-link" href="https://www.shippop.com/contact/">ขนส่ง (ติดต่อ)</a>
          <div className="footer-section-header">ประชาสัมพันธ์</div>
          <a className="footer-section-link" href="//blog.shippop.com">ข่าวสาร</a>
          <a className="footer-section-link" href="//blog.shippop.com/category/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8/">ประกาศ</a>
        </div>
        <div className="footer-col">
          <div className="footer-section-header">ติดต่อเรา</div>
          <div className="footer-text">เลขที่ 128/239-240 ชั้น 22 อาคารพญาไทพลาซ่า ถนนพญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400</div>
          <div className="footer-text" style={{marginTop:20}}>อีเมล์. <a style={{color:'white'}} href="mailto:contact@shippop.com">contact@shippop.com</a><br/>ฝ่ายบริการลูกค้า (+66) 92-905-3355</div>
          <Button style={{background:"#0276a0",border:'none',color:'white',marginTop:25}}>ดูข้อมูลเพิ่มเติม</Button>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection