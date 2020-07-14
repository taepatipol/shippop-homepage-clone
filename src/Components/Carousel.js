import React from 'react'
import { Input, Button } from 'antd'
import './Carousel.css'

function Carousel() {
  return (
    <div className="carousel">
      <img className="cover-img" alt="cover" src="https://www.shippop.com/assets/images/frontpage/slider/slide3.png?v=1497285980"/>
      <div class="fixed-tab">
        <h1 style={{fontSize:60,color:'white',marginTop:60,marginBottom:0}} title="ส่งของ">ส่งของ</h1>
        <h2 style={{fontSize:28,color:'white',margin:0}} title="จองขนส่งออนไลน์">จองขนส่งออนไลน์</h2>
        เปรียบเทียบราคา ติดตามสถานะการจัดส่ง และ ชำระค่าขนส่งผ่านทางออนไลน์ได้ทันที
      </div>
      <div className="tabs">
        <Button>เช็คค่าส่งของ</Button>
        <a href="https://www.shippop.com/service/"><Button>สำหรับลูกค้า business</Button></a>
      </div>
      <div className="check-price">
        <p>กรอกรหัสไปรษณีย์<br/>สำหรับเทียบราคาขนส่ง</p>
        <Input style={{width:135, height:41}} placeholder="รหัส ปณ. ต้นทาง"/>
        <Input style={{width:135, height:41}} placeholder="รหัส ปณ. ปลายทาง"/>
        <Input style={{width:135, height:41}} placeholder="น้ำหนัก (กรัม)"/>
        <Button style={{width:207, height:42}} type="primary">ตรวจเช็คราคา</Button>
      </div>
    </div>
  )
}

export default Carousel