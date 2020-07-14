import React from 'react'
import './FixedNavbar.css'
import { Button, Input, Menu, Dropdown } from 'antd'

const { Search } = Input

function FixedNavbar() {

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.shippop.com/widget/">
          Widget
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.shippop.com/nearby-dropoff/">
          ค้นหาจุด Dropoff
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.shippop.com/convert_zipcode/">
          โปรแกรมแยกไฟล์พื้นที่พิเศษ
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="fixed-navbar">
      <div className="inner-navbar">
        <div className="left-menu">
          <a href="https://www.shippop.com/" title="SHIPPOP">
            <img className="logo-shippop" alt="SHIPPOP" src="//www.shippop.com/assets/images/frontpage/logo_shippop.png?v=1.03498"/>
          </a>
          <nav>
            <div className="top-link">
              <a href="https://www.shippop.com/">หน้าแรก</a>
            </div>
            <div className="top-link">
              <a href="https://www.shippop.com/service/">บริการของเรา</a>
            </div>
            <div className="top-link">
              <a href="https://www.shippop.com/faq/">คำถามที่พบบ่อย</a>
            </div>
            <div className="top-link">
              <Dropdown overlay={menu}>
              <a href="">เครื่องมือ</a>
              </Dropdown>
            </div>
            <div className="top-link">
              <a href="https://www.shippop.com/contact/">ติดต่อเรา</a>
            </div>
          </nav>
        </div>
        <div className="right-menu">
          <div className="right-top">
            <p>ติดตามพัสดุ</p>
            <Button className="log-in-button" type="primary">Login</Button>
            <Button className="lang-button">TH</Button>
          </div>
          <Search placeholder="กรอกหมายเลขพัสดุ"/>
        </div>
      </div>
    </div>
  )
}

export default FixedNavbar