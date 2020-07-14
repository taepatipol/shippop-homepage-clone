import React from 'react'
import './App.css'

import FixedNavbar from './Components/FixedNavbar'
import PartnerSection from './Components/PartnerSection'
import ArticleSection from './Components/ArticleSection'
import ServiceSection from './Components/ServiceSection'
import TestimonialSection from './Components/TestimonialSection'
import PressSection from './Components/PressSection'
import TabSection from './Components/TabSection'
import FooterSection from './Components/FooterSection'
import MobileNavbar from './Components/MobileNavbar'
import Carousel from './Components/Carousel'

function App() {
  return (
    <div className="App">
      <FixedNavbar/>
      <MobileNavbar/>
      <div className="blank-cover"></div>
      <Carousel/>
      <PartnerSection/>
      <ServiceSection/>
      <TabSection/>
      <ArticleSection/>
      <TestimonialSection/>
      <PressSection/>
      <FooterSection/>
    </div>
  );
}

export default App
