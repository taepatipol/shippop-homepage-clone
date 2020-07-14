import React from 'react'
import { Card } from 'antd'
import './ServiceSection.css'

function ServiceSection() {

  let services = [
    {
      title: "เปรียบเทียบราคา",
      img: "http://www.shippop.com/assets/images/frontpage/icon_service_01.png?v=1496789498",
      description: "สามารถเช็คได้ทันที ขนส่งไหนถูกสุด ขนส่งไหนส่งไวสุด หรือมีส่วนลดพิเศษ"
    },
    {
      title: "ขนส่งที่เหมาะ",
      img: "https://www.shippop.com/assets/images/frontpage/icon_service_02.png?v=1496789498",
      description: "ไม่ต้องเสียเวลาอีกต่อไป ระบบแนะนำขนส่งที่เหมาะสมกับผู้ใช้"
    },
    {
      title: "ชำระค่าขนส่ง",
      img: "https://www.shippop.com/assets/images/frontpage/icon_service_03.png?v=1496789498",
      description: "ชำระค่าขนส่งผ่านออนไลน์ ด้วยบัตรเครดิตหรือบัตรเดบิต"
    },
    {
      title: "ใบปะหน้า",
      img: "https://www.shippop.com/assets/images/frontpage/icon_service_04.png?v=1496789498",
      description: "หมดปัญหาอ่านไม่ออก พิมพ์ใบปะหน้าจากระบบได้ทันที"
    },
    {
      title: "ติดตามพัสดุ",
      img: "https://www.shippop.com/assets/images/frontpage/icon_service_05.png?v=1496789498",
      description: "สามารถทราบหมายเลขติดตามพัสดุได้ล่วงหน้าจากระบบ"
    },
    {
      title: "คุมรายจ่ายง่ายขึ้น",
      img: "https://www.shippop.com/assets/images/frontpage/icon_service_06.png?v=1496789498",
      description: "ทราบราคาขนส่งล่วงหน้า วางแผนการเลือกใช้งานได้ทันที"
    },
    {
      title: "จัดส่งง่ายขึ้น",
      img: "https://www.shippop.com/assets/images/frontpage/icon_service_07.png?v=1496789498",
      description: "รับของถึงบ้าน หรือ ไม่ต้องรับคิวเข้าแถว"
    },
    {
      title: "เชื่อมต่อง่าย",
      img: "https://www.shippop.com/assets/images/frontpage/icon_service_08.png?v=1496789498",
      description: "รองรับทุกการเชื่อมต่อ ภายใต้ระบบเดียว"
    },
  ]

  const renderServiceCard = (service,index) => {
    return (
      <Card key={index}
        className="service-card" 
        hoverable 
        cover={<img className="service-img" alt={service.title} src={service.img}/>} style={{width:235, height:210, backgroundColor:'F8F8F8'}}
        bodyStyle={{padding: 10}}>
        <h2 className="service-title">{service.title}</h2>
        <p className="service-desc">{service.description}</p>
      </Card>
    )
  }

  return (
    <div className="service-section">
      <h2 style={{fontSize:'39.2px', color:'#0b9dd2', marginBottom:0}}>บริการของเรา</h2>
      <h3>ทำให้การส่งสินค้า สะดวกและง่ายมากขึ้น</h3>
      <div className="service-box">
        { services.map(renderServiceCard) }
      </div>
    </div>
  )
}

export default ServiceSection