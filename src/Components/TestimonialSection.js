import React from 'react'
import { Button } from 'antd'
import './TestimonialSection.css'

function TestimonialSection() {

  let customers = [
    {
      name: "Dote Clothing",
      position: "ร้านขายเสื้อผ้า",
      feedback: "ผมพอใจในการให้บริการของ SHIPPOP ใช้งานง่าย \"ปริ้น แปะ ส่ง\" สะดวกมากๆ ทำให้ผมมีเวลาทำการตลาดมากขึ้น ตอบโจทย์ธุรกิจผมได้ดีทีเดียว",
      img: "https://www.shippop.com/assets/images/frontpage/customer1.png?v=1496751996"
    },
    {
      name: "Korabag",
      position: "ร้านขายกระเป๋าเครื่องสำอางค์",
      feedback: "ตลอดเวลาที่ใช้ SHIPPOP ผมได้รับการบริการที่ดี มีทีมงานที่ช่วยตอบข้อสงสัยและแก้ไขปัญหาให้ผมได้ตลอดเวลา",
      img: "https://www.shippop.com/assets/images/frontpage/customer2.png?v=1496751996"
    },
    {
      name: "55 INK",
      position: "ร้านทำป้ายบ้านเลขที่",
      feedback: "SHIPPOP เข้ามาช่วยได้มากเลยครับ ทั้งเรื่องใบปะหน้าที่ไม่ต้องมานั่งเขียนเองแล้ว และพิมพ์ออกมาได้ทีละหลายๆ รายการ แก้ไขปัญหาเรื่องเข้าแถวส่งของ และการชำระเงินที่สะดวกยิ่งขึ้น",
      img: "https://www.shippop.com/assets/images/frontpage/customer5.jpg?v=1496751996"
    },
    {
      name: "LSWGOLD",
      position: "ห้างทองรูปพรรณออนไลน์",
      feedback: "ผมเชื่อมั่นในคุณภาพและมาตรฐานของ SHIPPOP ซึ่งช่วยให้ผมสามารถติดตามสถานะได้ง่าย สะดวก รวดเร็ว พร้อมตรวจสอบได้ตลอดเวลา และทีมงานที่ช่วยแก้ไขปัญหาต่างๆให้ผมได้ทันที",
      img: "https://www.shippop.com/assets/images/frontpage/customer4.png?v=1496751996"
    },
  ]

  const renderCustomer = (customer,index) => {
    return (
      <div className="customer" key={index}>
        <img className="customer-img" alt={customer.name} src={customer.img}/>
        <div className="customer-name">{customer.name}</div>
        <div className="customer-position">{customer.position}</div>
        <div className="customer-feedback">{customer.feedback}</div>
      </div>
    )
  }

  return (
    <div className="testimonial-section">
      <h2>เสียงตอบรับจากผู้ใช้งานจริง</h2>
      <h3>พิสูจน์จากเสียงตอบรับจากผู้ใช้จริงกว่า 2,000 รายในระบบ</h3>
      <div className="testimonial-wrapper">
        { customers.map(renderCustomer) }
      </div>
      <p style={{fontSize:25,color:'#58595b'}}>คุณอาจเป็นอีก 1 ในนั้น อย่าเชื่อจนกว่าจะได้ลองเอง</p>
      <a href="https://app.shippop.com">
        <Button style={{fontSize:21,width:250,height:63.6,marginTop:20}}>ใช้บริการ SHIPPOP</Button>
      </a>
    </div>
  )
}

export default TestimonialSection