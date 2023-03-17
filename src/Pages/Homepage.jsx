import React from 'react'
import Navigation from '../Components/Navigation'
import Body from '../Components/Body'
import Lessons from '../Components/Lessons'
import Recommended from '../Components/Recommended'
import Footer1 from '../Components/Footer1'


export default function Homepage() {
  return (
    <div class="bg-white">
      <Navigation/>
      <Body/>
      <Lessons/>
      <Recommended/>
      <Footer1/>
    </div>
   
  )
}
