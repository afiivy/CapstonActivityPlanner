import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function About() {
  return (
    <div className='about-container about'>
      <div className='top'>
        <Header />
      </div>
      <div className='about-content'>
        <h3>About Us</h3>
        <p>Our aspiration is to be people positive – investing in humanity and the well-being of everyone we connect with, from the people we serve to our partners and beyond.</p>
        <p>Night Out Navigator was born from a simple truth: we were tired of endless indecision. As two people who could never settle on where to go or what to do, we realized we weren&apos;t alone. We knew there had to be a better way, and so we decided to take the plunge and create something that would make planning a night out as effortless as enjoying it.</p>
        <p>With Night Out Navigator, we’ve combined our love for spontaneous adventures with a need for structure, helping you cut through the noise and find the perfect plan for your night. Whether you&apos;re struggling to pick a spot for dinner or looking for that hidden gem, we&apos;ve got you covered.</p>
        <p>We&apos;re here for all the indecisive souls out there, turning what used to be a hassle into a seamless experience. So, stop stressing and start exploring – your perfect night out is just a tap away.</p>
      </div>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  )
}
