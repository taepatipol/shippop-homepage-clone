import React from 'react'
import { Card, Button } from 'antd'
import './ArticleSection.css'

function ArticleSection() {

  let mockArticles = [
    {
      title: 'SCG EXPRESS : Cool TA-Q-BIN ขยายพื้นที่บริการ เพิ่มขนาดใหม่ส่งได้ใหญ่ขึ้น',
      img: 'https://blog.shippop.com/wp-content/uploads/2020/04/S__21676066-300x188.jpg',
      url: 'https://blog.shippop.com/scg-cool-ta-q-bin-%e0%b8%82%e0%b8%a2%e0%b8%b2%e0%b8%a2%e0%b8%9e%e0%b8%b7%e0%b9%89%e0%b8%99%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b8%9a%e0%b8%a3%e0%b8%b4%e0%b8%81%e0%b8%b2%e0%b8%a3/',
      description: 'SCG EXPRESS บริการขนส่งพัสดุแบบเร่งด่วน ได้ขยายพื้นที่ให้บริการจัดส่งพัสดุได้ครอบคลุมยิ่งขึ้น ซึ่งสามารถจัดส่งของได้ทุกพื้นที่ทั่วประเทศไทยแล้ว โดยลูกค้าสามารถส่งพัสดุกับ SCG EXPRESS ผ่าน SHIPPOP ได้แล้ว และยังสามารถใช้บริการ COD ได้อีกด้วย และอีกหนึ่งบริการคือ'
    },
    {
      title: 'SHIPPOP เปิดตัว true e-Logistics จัดส่งพัสดุด่วนส่งไว พร้อมบริการเข้ารับถึงบ้าน เริ่มต้น 25 บาท',
      img: 'https://blog.shippop.com/wp-content/uploads/2020/04/TrueLogistic_1080x675-300x188.jpg',
      url: 'https://blog.shippop.com/true-e-logistics/',
      description: 'True e-Logistics บริษัทขนส่งที่มีศักยภาพในการส่งสินค้าถึงมือผู้รับอย่างมีประสิทธิภาพ ภายใต้บริษัทยักษ์ใหญ่อย่าง True ให้บริการขนส่งพัสดุภายในประเทศ',
    },
    {
      title: 'SHIPPOP จับมือ ninja van ร่วมกับมูลนิธิโรงเรียนแห่งชีวิต ส่งกล่องยังชีพให้กับผู้ตกทุกข์ได้ยากจากวิกฤตโรค Covid-19 ทั่วประเทศ',
      img: 'https://blog.shippop.com/wp-content/uploads/2020/04/DSC2018-300x152.jpg',
      url: 'https://blog.shippop.com/shippop-ninjavan-charity/',
      description: 'บริษัท ชิปป๊อป จำกัด จับมือกับ  บริษัท นินจา โลจิสติกส์ (ประเทศไทย) จำกัด ร่วมสนับสนุน “กองทุนประทังชีพเพื่อเพื่อนร่วมแผ่นดิน” ซึ่งก่อตั้งขึ้นโดย อ.อัจฉราวดี วงศ์สกล และมูลนิธิโรงเรียนแห่งชีวิต'
    },
    {
      title: 'ส่งเจลแอลกอฮอล์ หน้ากากอนามัยและอุปกรณ์การแพทย์กับ ninja van ผ่าน SHIPPOP ถึงรพ.ทั่วกรุงเทพ-ปริมณฑล ฟรี!!',
      img: 'https://blog.shippop.com/wp-content/uploads/2020/04/NinjaVan_1080x6751-300x188.jpg',
      url: 'https://blog.shippop.com/ninjavan-covid19/',
      description: 'ninja van ผู้ให้บริการธุรกิจโลจิสติกส์ ด้วยเทคโนโลยีที่ทันสมัย จัดเคมเปญให้บริการส่งเจลแอลกอฮอล์ หน้ากากอนามัยและอุปกรณ์การแพทย์ ฟรี!!ให้กับโรงพยาบาลทุกแห่งในพื้นที่กรุงเทพ-ปริมณฑล'
    }
  ]

  const renderArticleCard = (article,index) => {
    return (
      <a href={article.url}>
        <Card key={index}
          className="article-card" 
          hoverable 
          cover={<img className="article-img" alt={article.title} src={article.img}/>} style={{width:235, height:220, backgroundColor:'F8F8F8'}}
          bodyStyle={{padding: 10}}>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-desc">{article.description.slice(0,30) + '...'}</p>
        </Card>
      </a>
    )
  }

  return (
    <div className="article-section">
      <div className="inner-article-section">
        <h2>บทความและโปรโมชั่น</h2>
        <h3>บทความข่าวสารและโปรโมชั่นที่เราเสิร์ฟให้</h3>
        <div className="article-card-list">
          { mockArticles.map(renderArticleCard) }
        </div>
        <a href="http://blog.shippop.com">
          <Button style={{width:250, height:63, marginTop:60, fontSize:21}}>อ่านต่อทั้งหมด</Button>
        </a>
      </div>
    </div>
  )
}

export default ArticleSection