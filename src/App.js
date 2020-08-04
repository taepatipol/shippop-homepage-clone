import React, { useEffect } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import ReactGA from 'react-ga'

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

export const initGA = () => {
  ReactGA.initialize('UA-174253601-1')
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.hash })
  ReactGA.pageview(window.location.hash)
}

function App() {

  useEffect(() => {
    initGA()
    logPageView()
  })

  return (
    <div className="App">
      <FixedNavbar/>
      <MobileNavbar/>
      <div className="blank-cover"></div>
      <Route exact path='/'>
        <Carousel/>
      </Route>
      <Route exact path='/service'>
        <ServiceSection/>
      </Route>
      <Route exact path='/article'>
        <ArticleSection/>
      </Route>
      <PartnerSection/>
      <TabSection/>
      <TestimonialSection/>
      <PressSection/>
      <FooterSection/>
    </div>
  );
}

export default App
