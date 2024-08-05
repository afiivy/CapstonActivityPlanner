import React from 'react'


export default function Footer() {
  return (
    <footer className="footer">
        <div>
        <div><a className="about" href='./about'>About</a></div>
        <div><a className='contact' href='./contact'>Contact Us</a></div>
        </div>

    <div className="container"> 
        <div className="line"></div>
        <span className="text">Follow Us</span>
        <div className="line"></div>
    </div>  
    </footer>
  )
}